//CSS
import styles from '../../styles/book.module.scss';

//ICONS
import { FaGoogle } from 'react-icons/fa';

function Book(){
    const handleGoogleAuth = () => {
        console.log("building...");
    }

    return(
        <div className={styles.bigAligner}>
            <div className={styles.banner}>
                <article>
                    <h1>Faça seu login</h1>
                    <button onClick={handleGoogleAuth}><FaGoogle />  Login com Google</button>
                </article>
            </div>
        </div>
    )
}

export default Book;