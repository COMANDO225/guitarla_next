import Link from 'next/link'
import Image from 'next/image'


const Curso = ({curso}) => {

    const {titulo, contenido, imagen} = curso

    return (
        <section className='poster'>
            <div className="contenedor curso_grid">
                <div className='curso_contenido'>
                    <h2 className='heading m-0'>{titulo}</h2>
                    <p>{contenido}</p>
                    <Link href="/">
                        <a className='boton'>Más información</a>
                    </Link>
                </div>
            </div>
            <div className="absolute">
                    <Image
                        priority
                        layout={'fill'}
                        objectFit={'cover'}
                        src={imagen.url}
                        alt="imagen de curso"
                    />
                </div>
        </section>
    );
}

export default Curso;