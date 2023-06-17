import Image from 'next/image'

import services from '../../../utils/listOfServices.json';

import styles from '../../../styles/home.module.scss';

import { BsClockFill } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';

export default function ServicesBox(){
    const currentService = 0

    return(
        <article className={styles.services}>
        <div className={styles.servicesAligner}>
          <div style={{marginLeft: '1rem', marginRight: '1rem'}} className={styles.servicesBox}>
            <div className={styles.servicesBigImg}>
                <Image 
                  width={500} 
                  height={450} 
                  loading='lazy' 
                  src={"/"+services[currentService]?.img} 
                  alt="Serviços Posdo Corte"
                />
            </div>
            
            <div className={styles.detailsBox}>
              <h2>{services[currentService]?.name}</h2>
              <span>{services[currentService]?.desc}</span>
              <div>
                <div style={{marginLeft: '0rem', display: 'flex', flexDirection: 'column'}}>
                  <h3 style={{content: '' , fontSize: '2rem',marginBottom: '.2rem'}}> <BsClockFill /> </h3>
                  <p>{services[currentService]?.time}</p>
                </div>
                <div style={{marginLeft: '0rem', display: 'flex', flexDirection: 'column'}}>
                  <h3 style={{content: '' , fontSize: '2.287rem', marginBottom: '-.1rem'}}> <AiFillDollarCircle /> </h3>
                  <p>{services[currentService]?.price}</p>
                </div>
              </div>
              <button>Agendar</button>
            </div>
          </div>
        </div>
      </article>
    )
}