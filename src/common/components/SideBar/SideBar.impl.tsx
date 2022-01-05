import styled from "@emotion/styled";
import React, { useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const SideBar = () => {
    const router = useRouter();
    const [language, setLanguage] = useState("eng");

    const changeSelectLanguageHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(e.target.value)
    }

    return (
        <StyledSideNavBar>
            <StyledLogoContainer>
                <StyledLogoText href="/">LEDGIS DeFi
                    <text style={{fontWeight: "bold", fontSize: "140%"}}><br/>
                    Lemonade</text>
                </StyledLogoText>
            </StyledLogoContainer>
            <StyledLanguageConatiner>
                <StyledLanguageDropdown id={"dropdown"} onChange={(event) => {
                    changeSelectLanguageHandler(event);
                }}>
                    <option value="eng">ENG</option>
                    <option value="kor">KOR</option>
                </StyledLanguageDropdown>
            </StyledLanguageConatiner>
            <StyledNavContainer>
                <Link href="/dashboard" passHref>
                    <StyledNavMenu className={router.pathname === '/dashboard' ? 'active' : ''}>{language === 'kor' ? "대시보드" : "Dashboard"}</StyledNavMenu>
                </Link>
                <Link href="/wallet" passHref>
                    <StyledNavMenu className={router.pathname === '/wallet' ? 'active' : ''}>{language === 'kor' ? "레지스 지갑" : "LEDGIS Wallet"}</StyledNavMenu>
                </Link>
                <Link href="/staking" passHref>
                    <StyledNavMenu className={router.pathname === '/staking' ? 'active' : ''}>{language === 'kor' ? "스테이킹" : "Staking"}</StyledNavMenu>
                </Link>
                <Link href="/bridge" passHref>
                    <StyledNavMenu className={router.pathname === '/bridge' ? 'active' : ''}>{language === 'kor' ? "브릿지" : "Bridge"}</StyledNavMenu>
                </Link>
                <Link href="/lending" passHref>
                    <StyledNavMenu className={router.pathname === '/lending' ? 'active' : ''}>{language === 'kor' ? "렌딩" : "Lending"}</StyledNavMenu>
                </Link>
                <Link href="/history" passHref>
                    <StyledNavMenu className={router.pathname === '/history' ? 'active' : ''}>{language === 'kor' ? "히스토리" : "History"}</StyledNavMenu>
                </Link>
                <Link href="/battle" passHref>
                    <StyledNavMenu className={router.pathname === '/battle' ? 'active' : ''}>{language === 'kor' ? "롱/숏 배틀" : "Long/Short Battle"}</StyledNavMenu>
                </Link>
                <Link href="/docs" passHref>
                    <StyledNavMenu className={router.pathname === '/docs' ? 'active' : ''}>{language === 'kor' ? "관련문서 ->" : "Docs ->"}</StyledNavMenu>
                </Link>
                <Link href="/market" passHref>
                    <StyledNavMenu className={router.pathname === '/market' ? 'active' : ''}>{language === 'kor' ? "NFT 마켓 ->" : "NFT Market ->"}</StyledNavMenu>
                </Link>
            </StyledNavContainer>
        </StyledSideNavBar>
    )
}

const StyledSideNavBar = styled.nav({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "13%",
    padding: "18px 12px 18px 28px",
    borderRight: "1px solid #D3D3D3"
})

const StyledLogoContainer = styled.div({  
    display: "flex",
    position: "relative",
    height: "8%",
    width: "100%",
})

const StyledLogoText = styled.a({
    position: "absolute",
    height:"100%",
    width:"100%",
    fontSize: 18,
})

const StyledLanguageConatiner = styled.div({
    display: "flex",
    height: "5%",
    width: "100%",
    alignItems: "flex-start",
})

const StyledLanguageDropdown = styled.select({
    width: "50%",
    overflowY: "scroll",
    border: "2px solid 	#C0C0C0",
    borderRadius: "4px",
    fontSize: 14
})

const StyledNavContainer = styled.div({
    display: "flex",
    flexDirection: 'column',
    height: "87%",
    width: "100%",
    fontSize: 18,
})

const StyledNavMenu = styled.a`
    margin: 15px 0px;
    &.active {
        color: #228B22;
        font-weight: bold;
        font-size: 120%;
        margin: 10px 0px;
    }
`;

export default SideBar;