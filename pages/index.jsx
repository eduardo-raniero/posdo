import { useRouter } from 'next/router';

//CSS
import styles from '../styles/home.module.scss';

//ICONS
import { BsClockFill } from 'react-icons/bs';
import { AiFillDollarCircle } from 'react-icons/ai';

export default function Home() {
  const router = useRouter()
  return (
    <>
      <div className={styles.homeAligner}>
        <article className={styles.banner}>
          <div style={{marginLeft: '1rem'}} className={styles.bannerText}>
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div style={{marginRight: '1rem'}} className={styles.oldMan}>
            <img className={styles.bubbles} src="./banner/bubbles.svg" alt="Posdo WebApp Agendar" />
            <img className={styles.oldManImg} src="./banner/old-man-pipe.png" alt="Posdo Website" />
          </div>
        </article>

        <article className={styles.services}>
          <div className={styles.servicesAligner}>
            <div className={styles.servicesBox}>
              <div className={styles.servicesBigImg}>
                <img loading='lazy' src="./services/beard-haircut.jpg" alt="Serviços Posdo Corte" />
              </div>
              <div className={styles.detailsBox}>
                <h2>Cabelo & Barba</h2>
                <span>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                <div style={{marginTop: '2rem'}}>
                  <div style={{marginLeft: '0rem', display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{content: '' , fontSize: '2rem',marginBottom: '.2rem'}}> <BsClockFill /> </h3>
                    <p>60 min.</p>
                  </div>
                  <div style={{marginLeft: '0rem', display: 'flex', flexDirection: 'column'}}>
                    <h3 style={{content: '' , fontSize: '2.287rem', marginBottom: '-.1rem'}}> <AiFillDollarCircle /> </h3>
                    <p>R$75</p>
                  </div>
                </div>
                <button>Agendar</button>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.workers}>
          <div className={styles.workersAligner}>
            <h1>Nossos Almirantes</h1>

            <div className={styles.workersContainer}>
              <div style={{marginTop: '4rem'}} className={styles.workerBox}>
                <img src="./workers/fernando.png" alt="aa" /> <br />
                <strong>Antônio Carlos</strong>
                <p>Almirante com 2 anos de Posdo, ama viajar pelo país e exterior.</p>
              </div>
              <div style={{marginTop: '2rem'}} className={styles.workerBox}>
                <img src="./workers/rodrigo.png" alt="aa" /> <br />
                <strong>Rodrigo Antunes</strong>
                <p>Almirante com 5 anos de Posdo, entusiasta de Sherlock Holmes.</p>
              </div>
              <div  className={styles.workerBox}>
                <img src="./workers/antonio.png" alt="aa" /> <br />
                <strong>Antônio Carlos</strong>
                <p>Almirante com 7 anos de Posdo, amante de motos “custom”.</p>
              </div>
            </div>
          </div>
        </article>

        <article className={styles.cta}>
          <div className={styles.ctaAligner}>
            <h1>What is Lorem Ipsum?</h1>
            <button onClick={() => router.push('/agendar')}>Agendar</button>
          </div>
        </article>
      </div>
    </>
  )
}
