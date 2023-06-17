import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from 'next/image'

import styles from '../../styles/dashboard.module.scss';

export default function Dashboard(){
    const router = useRouter();
    const [user, setUser] = useState({});
    
    //replace to react query here
    useEffect(() => {
        let obj = localStorage.getItem('user');
        const uObj = JSON.parse(obj);

        if(uObj){
            setUser(uObj);
        } 

        if(!uObj){
            router.push('/carregando')
        }
        
    }, []);

    const agenda = [
        {
            id: "1",
            barber: "Antônio Carlos",
            img: 'antonio',
            unoccupied: ['14:00', '16:00', '20:00'],
            occupied: ['09:00', '10:00', '11:00', '13:00', '15:00', '17:00', '18:00', '19:00']
        },
        {
            id: "2",
            barber: "Fernando Martins",
            img: 'fernando',
            unoccupied: ['14:00'],
            occupied: ['09:00', '10:00', '11:00', '13:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
        },
        {
            id: "3",
            barber: "Rodrigo Antunes",
            img: 'rodrigo',
            unoccupied: [],
            occupied: ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
        },
    ]

    return(
        <div className={styles.bigAligner}>
            <h1>Olá, {user?.name}! </h1>
            <h2>Escolha um de nossos barbeiros para prosseguirmos com o agendamento</h2>

            <div className={styles.barbersBox}>
                {
                    agenda.map((item) => (
                    <div key={item.id} className={styles.barberItem}>
                        <img 
                            className="barberPhoto" 
                            src={`./workers/${item.img}.png`} 
                            alt={`${item.img}`} 
                            style={{opacity: `${item.unoccupied.length == 0 ? '.34' : '1'}`}}
                            loading="lazy" 
                        />
                        <br></br>
                        <small style={{opacity: `${item.unoccupied.length == 0 ? '.34' : '1'}`}}>{item.barber}</small>
                        <p 
                            style={{opacity: `${item.unoccupied.length == 0 ? '.34' : '1'}`}}
                        > 
                            <strong> {item.unoccupied.length} </strong> {item.unoccupied.length === 1 ? "Horário disponível" : 'Horários disponíveis'} 
                        </p>
                        <button 
                            style={{opacity: `${item.unoccupied.length == 0 ? '.34' : '1'}`}} 
                            disabled={item.unoccupied.length === 0 ? true : false}>
                                Escolher Horário
                        </button>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}