import Head from "next/head";
import React from 'react';
import { LayoutProps } from "./Layout.interface";
import SideBar from '../SideBar'

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>no name</title>
            </Head>
            <div style={{display: "flex", flexDirection: 'row', height: "100vh", width: "100vw"}}>
                <SideBar/>
                {children}
            </div>
        </>
    )
}

export default Layout;