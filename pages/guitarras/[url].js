import Image from 'next/image'
import Layout from '../../components/Layout';
import {useState} from 'react'

const ProductoGuitarra = ({guitarra, agregarCarrito}) => {


    const [cantidad, setCantidad] = useState(1);
    const { nombre, descripcion, imagen, precio, id } = guitarra

    const handleSubmit = (e) => {
        e.preventDefault()

        if(cantidad < 1){
            alert('Cantidad no valida')
            return
        }

        // Agregar al carrito
        const guitarraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad
        }
        agregarCarrito(guitarraSeleccionada)
    }

    return (
        <Layout page={`Guitarra ${nombre.toLowerCase()}`}>
            <div className='contenedor medium'>
                <h1 className="heading">GUITARRA {nombre}</h1>
                <div className='card_guitarra medium'>
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
                        <p className='precio'>{`$${precio}`}</p>

                        <form className='form' onSubmit={handleSubmit}>
                            <label className='form_label'>Cantidad</label>
                            <select 
                                className='form_select'
                                value={cantidad}
                                onChange={e => setCantidad(parseInt(e.target.value))}
                            >
                                <option value="0">--Seleccione --</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>

                            <input className='boton medium' type="submit" value="Agregar al Carrito"/>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async ({query: {url}}) => {

    const urlGuitarra = `http://localhost:1337/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()
    

    return {
        props: {
            guitarra: guitarra[0]
        }
    }
}

export default ProductoGuitarra;