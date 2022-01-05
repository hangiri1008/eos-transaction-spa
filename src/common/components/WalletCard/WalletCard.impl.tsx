import React, { useState } from 'react';
import styled from '@emotion/styled';
import { WalletCardProps } from './WalletCard.interface';

const WalletCard = ({ logoImgSrc, blockChainTitle, coinTitle, coinQuantity, holdingValue ,sendButton }: WalletCardProps) => {
    const [currency, setCurrency] = useState("usd");

    const changeSelectLanguageHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value)
    }

    return (
        <CardContainer>
            <div style={{display: "flex", alignSelf:"center", alignItems: "center", justifyContent: "flex-start", width: "20%", height: "80%" ,borderRight: "1.5px solid #D3D3D3"}}>
                <LogoImgContainer>
                    <LogoImg src={logoImgSrc} />
                </LogoImgContainer> 
                <LogoText>
                        {blockChainTitle}<text style={{fontSize:"90%", color:"#696969"}}><br/>{coinTitle}</text>
                </LogoText>
            </div>
            <div style={{display: "flex", alignItems: "flex-start", justifyContent: "flex-start", width: "60%", height: "80%"}}>
                <DescriptionWrapper>
                    <text style={{fontSize: "20px", fontWeight:"bold", color: "#A9A9A9"}}>보유 수량</text>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                        <text style={{margin: "20px 0px", fontSize: "24px", fontWeight:"bold",}}>{coinQuantity} 
                        <text style={{margin: "0px 10px", fontSize:"60%", color:"#696969"}}>{coinTitle}</text></text>
                    </div>
                </DescriptionWrapper>
                <DescriptionWrapper>
                    <text style={{fontSize: "20px", fontWeight:"bold", color: "#A9A9A9"}}>평가 금액</text>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}>
                        <text style={{margin: "20px 0px", fontSize: "24px", fontWeight:"bold",}}>{holdingValue}</text>
                        <CurrencyDropdown onChange={(event)=> changeSelectLanguageHandler(event)}>
                            <option value="usd">USD</option>
                            <option value="krw">KRW</option>
                        </CurrencyDropdown>
                    </div>
                </DescriptionWrapper>
            </div>
            <div style={{display: "flex", flexDirection:'column', alignSelf:"center", alignItems: "flex-end", justifyContent: "center", width: "20%", height: "80%"}}>
                <SendButton onClick={sendButton}>보내기</SendButton>
                <CollectButton>받기</CollectButton>
            </div>
        </CardContainer>
    )
}

const CardContainer = styled.div({
    display: 'flex',
    flexDirection: 'row',
    width:"100%",
    height:"100%",
    border: "2px solid #D3D3D3",
    borderRadius: "8px",
    boxShadow: "6px 6px 10px -12px rgba(0,0,0,0.75)"
})

const LogoImgContainer = styled.div({
    width:"100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    borderRadius: "50%",
    backgroundColor: "#D3D3D3"
})

const LogoImg = styled.img({
    width: "65%",
    height: "65%",
    display: "block",
})

const LogoText = styled.text({
    margin: "20px",
    fontSize: "20px",
    fontWeight: 'bold'
})

const DescriptionWrapper = styled.div({
    width: "40%",
    height: "80%",
    display: 'flex',
    padding: "10px",
    flexDirection: 'column',
    margin: "40px 0px 40px 40px",
    overflowY: 'hidden'
})

const CurrencyDropdown = styled.select({
    textAlign: 'center',
    margin: "0px 10px",
    padding: "4px 12px",
    overflowY: "scroll",
    border: "1px solid",
    borderRadius: "4px",
    fontSize: 14
})

const SendButton = styled.button`
    width: 60%;
    height: 30%;
    margin: 10px 25px 5px 0px;
    color: white;
    font-weight: bold; 
    font-size: 20px;
    border-radius: 6px;
    background-color: #696969;
    &:hover{
        color: black;
        background-color: #DCDCDC;
    }
`

const CollectButton = styled.button`
    width: 60%;
    height: 30%;
    margin: 10px 25px 5px 0px;
    color: white;
    font-weight: bold; 
    font-size: 20px;
    border-radius: 6px;
    background-color: #A9A9A9;
    &:hover{
        color: black;
        background-color: #DCDCDC;
    }
`
export default WalletCard;