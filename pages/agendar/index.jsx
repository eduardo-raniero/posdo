//import router from 'next/router';

import firebase from '../../utils/Firebase/firebaseAuth';

//CSS
import styles from '../../styles/book.module.scss';

//ICONS
import { FaGoogle } from 'react-icons/fa';

function Book(){
    const handleGoogleAuth = () => {
        // const google_provider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth().signInWithPopup(google_provider)
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err)=>{
        //         console.log(err);
        //     })
        // console.log(firebase);
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