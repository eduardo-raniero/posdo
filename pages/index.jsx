//Components
import MainBanner  from '../components/homeItems/mainBanner/mainBanner';
import ServicesBox from '../components/homeItems/servicesBox/servicesBox';
import WorkersBox from '../components/homeItems/workersBox/workersBox';
import CtaBox from '../components/homeItems/ctaBox/ctaBox';

//SCSS
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.homeAligner}>
        <MainBanner />
        <ServicesBox />
        <WorkersBox />
        <CtaBox />
      </div>
    </>
  )
}
