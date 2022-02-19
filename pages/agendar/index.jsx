import { auth } from '../../utils/Firebase/firebaseAuth';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from 'next/router';

//CSS
import styles from '../../styles/book.module.scss';

//ICONS
import { FaGoogle } from 'react-icons/fa';

function Book(){
    const router = useRouter();

    const handleGoogleAuth = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((res)=>{

            const udata = res.user
            localStorage.setItem('user', JSON.stringify({
                name: udata.displayName,
                email: udata.email,
                uid: udata.uid
            }))
            
            if (udata.uid){
                router.push('/carregando')
            }
        })
        .catch(()=>{
            router.push('/agendar')
        })
    }

    return(
        <div className={styles.bigAligner}>
            <div className={styles.banner}>
                <article style={{padding: '0 1rem'}}>
                    <h1>Faça seu login</h1>
                    <button onClick={handleGoogleAuth}><FaGoogle />  Login com Google</button>
                </article>
            </div>
        </div>
    )
}

export default Book;