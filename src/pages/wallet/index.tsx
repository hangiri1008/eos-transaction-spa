import React from 'react'
import styled from "@emotion/styled";
import WalletList from '../../domains/wallet/component/WalletList.impl'

const Wallet = () => {
    return (
        <div style={{height:"100%", width:"100%"}}>
            <div style={{height:"40%", width:"100%"}}>     
            </div>
            <div style={{height:"35%", width:"100%"}}>
                <WalletList />
            </div>
            <div style={{height:"25%", width:"100%"}}>     
            </div>
        </div>
    )
}

const StyledDashboardTitle = styled.div({
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "87%",
})

export default Wallet;
