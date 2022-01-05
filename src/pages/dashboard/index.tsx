import React from 'react'
import styled from "@emotion/styled";

const Dashboard = () => {
    return (
        <>
            <StyledDashboardTitle>Dashboard</StyledDashboardTitle>
        </>
    )
}

const StyledDashboardTitle = styled.div({
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "87%",
})

export default Dashboard;
