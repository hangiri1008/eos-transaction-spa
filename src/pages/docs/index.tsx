import React from 'react'
import styled from "@emotion/styled";

const Docs = () => {
    return (
        <>
            <StyledDashboardTitle>Docs</StyledDashboardTitle>
        </>
    )
}

const StyledDashboardTitle = styled.div({
    display: "flex",
    flexDirection: "row",
    height: "100%",
    width: "87%",
})

export default Docs;
