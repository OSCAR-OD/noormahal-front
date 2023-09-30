"use client"
import Link from "next/link";
import  {useEffect} from 'react';
import lazyLoading from './components/JsContent/LazyLoading';
//import Image from 'next/image'
//import styles from './page.module.css'

import HomePage from "./pages/HomePage";

export default function Home() {
  
  
  return (
    // <main className={styles.main}>
     <main >
<HomePage />

    </main>
  )
}
