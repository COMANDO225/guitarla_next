import Image from 'next/image'
import {useEffect} from 'react';

import Layout from "../../components/Layout";
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'


const EntradaBlog = ({entrada}) => {

    const {contenido, imagen, published_at, titulo} = entrada


    // Evitar que den click derecho
    // window.oncontextmenu = () => false


    const fecha = published_at
    return (
        <Layout page={titulo}>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={styles.entrada}>
                    <Image
                        layout = 'responsive'
                        width = {800}
                        height = {600}
                        src = {imagen.url}
                        alt = {`imagen de ${titulo}`}
                    />
                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(fecha)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>
    );
}

export const getServerSideProps = async ({query: {url}}) => {

    const urlBlog = `http://localhost:1337/blogs?url=${url}`
    console.log(urlBlog);

    const respuesta = await fetch(urlBlog)
    const entrada = await respuesta.json()


    return {
        props: {
            entrada: entrada[0]
        }
    }
}

export default EntradaBlog;