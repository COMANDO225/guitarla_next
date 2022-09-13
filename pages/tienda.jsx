import Layout from '../components/Layout'
import Listado from '../components/Listado';

const Tienda = ({guitarras}) => {

    return (
        <Layout page={'Tienda Virtual'}>
            <main className="contenedor">
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado
                    guitarras = {guitarras}
                />
            </main>
        </Layout>
    );
}


export const getServerSideProps = async () => {
    const url = `http://localhost:1337/guitarras?_sort=createdAt:desc`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()

    return {
        props: {
            guitarras: guitarras
        }
    }
}

export default Tienda;