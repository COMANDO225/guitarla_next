import Link from 'next/link'
import Image from 'next/image'


const Guitarra = ({guitarra}) => {

    const { nombre, descripcion, imagen, precio, url } = guitarra

    return (
        <div className='card_guitarra'>
            <Image
                layout='responsive'
                width={180}
                height={390}
                src={imagen.url}
                alt={`imagen de Guitarra ${nombre}`}
            />
            <div className="card_guitarra_content">
                <h3 className='card_guitarra_titulo'>{nombre}</h3>
                <p className='card_guitarra_parraf'>{descripcion}</p>
                <p className='precio'>${precio}</p>
                <Link href={`/guitarras/${url}`}>
                    <a className='boton'>Ver Producto</a>
                </Link>
            </div>
        </div>
    );
}

export default Guitarra;