import Link from 'next/link'
import Layout from "../components/Layout";
import styles from '../styles/NotFound.module.css'

const NotFound = () => {
    return (
            <div className={styles.not_found}>
                <h1 className="heading">Pagina no encontrada</h1>
                <Link href={'/'}>
                    <a className={'boton'}>Volver al Inicio</a>
                </Link>
            </div>
    );
}

export default NotFound;