import Head from 'next/head'
import Footer from './Footer';
import Header from './Header';

const Layout = ({children, page, guitarras}) => {
    return (
        <div className='next-app'>
            <Head>
                <title>GuitarLA - {page}</title>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Sitio Web de venta de guitarras" />

            </Head>
            <Header
                guitarras = {guitarras}
            />


            {children}

            <Footer/>
        </div>
    );
}

Layout.defaultProps = {
    guitarras: null
}

export default Layout;