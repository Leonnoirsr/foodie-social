import Link               from "next/link"
import Image              from "next/image"
import Navlink            from "./Navlink"
import logoImg            from '@/assets/logo.png'
import styles             from './styles/main-header.module.css'
import BackgroundGradient from "./BackgroundGradient"

const MainHeader = () => {


    
    return (
        <>
        <BackgroundGradient />
        <header className={styles.header}>
            <Link className={styles.logo} href='/'>
                <Image src={logoImg} alt="A plate with food on it" priority />
                Foodie Social
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Navlink route="meals" highlightActive>Browse Meals</Navlink>
                    </li>
                    <li>
                        <Navlink route="community" highlightActive>Foodies Community</Navlink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )

}

export default MainHeader