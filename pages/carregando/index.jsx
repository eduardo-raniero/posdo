import { useEffect, useState } from "react"
import { useRouter } from "next/router";

import styles from './skeleton.module.scss';

export default function Skeleton(){
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        let obj = localStorage.getItem('user');
        const uObj = JSON.parse(obj);

        if(uObj){
            router.push('/dashboard')
        } 

        if(!uObj){
            router.push('/agendar')

        }
    }, []);
    
    return(
        <div className={styles.box}>
            <div className={styles.loader}>Loading...</div>
        </div>
    )
}