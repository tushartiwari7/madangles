import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
const Layout = ({children}) => {
    return (
        <>
        <Head>
          <title>Learn Triangles</title>
          <meta name="keywords" content="triangles,neogcamp,level0" />
          <meta name="description" content="know all things about triangles: its area,hypotenuse,types of triangles and much more..." />
          <meta name="description" content="Also, take a quiz to know how much you know?" />
          <meta name="author" content="Tushar Tiwari" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Nav />
        <div className={styles.container}>
            {children}
        </div>
        </>
    )
}
export default Layout;
