import Head from "next/head";
import React from 'react';
import { LayoutProps } from "./Layout.interface";

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>no name</title>
            </Head>
            <header></header>
            <main>{children}</main>
        </>
    )
}

export default Layout;