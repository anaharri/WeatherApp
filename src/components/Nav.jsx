import SearchBar from "./SearchBar";
import Logo from '../logoHenry.png'
import styles from './Nav.module.css'

export default function Nav ({onSearch}){
    return (
        <nav className="navbar sticky-top navbar-light">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <img src={Logo} className={styles.logo} alt="logo Henry" srcset="" />
                    <a className={styles.brand} href="http://github.com/anaharri">anaHarri</a>
                </div>
                <SearchBar onSearch={onSearch}/>
            </div>
        </nav>
    )
}