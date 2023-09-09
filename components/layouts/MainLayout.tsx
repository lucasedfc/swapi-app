import React from 'react'
import styles from './MainLayout.module.css';
import Head from 'next/head';
import { Navbar } from '../Navbar';
export const MainLayout = ({ children, title }: { children: React.ReactNode, title: string }) => {
    return (
      
        <div className={styles.container}>
    
        
          <Head>
            <title>StartWars App - {title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar />
          
          <main className={`${styles.main}`}>
            
           {children}
    
          </main>
        </div>
      )
}
