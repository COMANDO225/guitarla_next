import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'



const Nosotros = () => {
    return (
        <Layout page={'Nosotros'}>
            <main className='contenedor'>
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>

                    <Image
                        width={600}
                        height={400}
                        layout='responsive'
                        src={'/img/nosotros.jpg'}
                        alt="imagen sobre nosotros"
                    />
                    <div className={styles.parrafo}>
                        <p>Maecenas feugiat convallis aliquet. Cras finibus cursus ligula eu egestas. Proin 
                        sit amet est quis est venenatis venenatis. Donec tincidunt tortor vitae metus 
                        porta, vel mattis nulla maximus. Aliquam tincidunt in libero ac consectetur. 
                        Sed dapibus in augue in bibendum. Curabitur vel enim ac nibh euismod ornare a 
                        eu quam. Cras maximus nibh tortor. In commodo ligula vitae facilisis finibus. 
                        Cras tempus mattis sagittis. Nullam fringilla sagittis risus non porta. Donec 
                        eget nisi et velit porta suscipit non at nunc. Curabitur maximus tempor sollicitudin.
                        </p>
                        <p>
                        Cras maximus nibh tortor. In commodo ligula vitae facilisis finibus. 
                        Cras tempus mattis sagittis. Nullam fringilla sagittis risus non porta. Donec 
                        eget nisi et velit porta suscipit non at nunc.
                        </p>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros