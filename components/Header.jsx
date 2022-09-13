import Link from 'next/link'
import styles from '../styles/Header.module.css';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Header = ({guitarras}) => {

    const router = useRouter()

    return (
        <header className={styles.header}>
            <div className="contenedor header">
                <div className={styles.barra}>
                    <Link href="/" passHref className={styles.logoContainer}>
                        <a>
                            <Image width={300} height={100} src='/img/logo.svg' alt='logo de guitarLA'/>
                        </a>
                    </Link>
                    
                    <nav className={styles.navegacion}>
                        <Link href={'/'}>Inicio</Link>
                        <Link href={'/nosotros'}>Nosotros</Link>
                        <Link href={'/blog'}>Blog</Link>
                        <Link href={'/tienda'}>Tienda</Link>
                        <Link href={'/carrito'}>
                            <a className='carrito_img'>
                                <Image
                                    width={30}
                                    height={25}
                                    layout='fixed'
                                    src={'/img/carrito.png'}
                                    alt="Imagen carrito"
                                />
                            </a>
                        </Link>
                    </nav>
                </div>
                {guitarras && 
                    <div className='header_promo'>
                        <h2 className='header_promo_title'>Modelo {guitarras.nombre}</h2>
                        <p className='header_promo_desc m-0'>{guitarras.descripcion}</p>
                        <p className='precio'>{`$${guitarras.precio}`}</p>

                        <Link href={`/guitarras/${guitarras.url}`}>
                            <a className='boton uppercase'>Ver producto</a>
                        </Link>
                    </div>
                }
            </div>
            {router.pathname === '/' && (
                <div className="header_promo_img">
                    <Image
                        layout='fill'
                        src={'/img/header_guitarra.png'}
                        alt=""
                    />
                </div>
            )}
        </header>
    );
}

export default Header;