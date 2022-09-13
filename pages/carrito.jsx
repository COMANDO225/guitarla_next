import {useState, useEffect} from 'react';

import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'
import Image from 'next/image'


const Carrito = ({carrito, actualizarCantidad, eliminarProducto}) => {

    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [carrito]);

    console.log(carrito);
    return (
        <Layout page={'Carrito de Compras'}>
            <h1 className="heading">Carrito</h1>
            <div className={`contenedor ${styles.contenido}`}>
                <div className={styles.carrito}>
                    {carrito.length === 0 ? 'Carrito Vacio' : (
                        carrito.map(producto => (
                            <div key={producto.id} className={styles.producto}>
                                <div className={styles.producto_img}>
                                    <Image
                                        // layout='responsive'
                                        width={190}
                                        height={300}
                                        objectFit="contain"
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />
                                </div>
                                <div className={styles.producto_info}>
                                    <h3 className={styles.nombre}>Guitarra: {producto.nombre}</h3>
                                    <div>
                                        <p className={styles.cantidad}>Cantidad:</p>
                                        <select 
                                            className={styles.select}
                                            value={producto.cantidad}
                                            onChange={(e) => actualizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto.id
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                        </select>
                                    </div>
                                    <span>Precio:</span>
                                    <p className={styles.precio}>S/. {producto.precio}</p>
                                    <strong className={styles.subtotal}>Subtotal: S/. {producto.precio * producto.cantidad}</strong>
                                </div>
                                <button type='button' className={styles.eliminar} onClick={() => eliminarProducto(producto.id)}>X</button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    {total > 0 ? (
                        <>
                            <h3>Resumen del Pedido</h3>
                            <p>{`Total a pagar: $${total}`}</p>
                        </>
                    ): <p>No hay productos en el carrito</p>
                    }
                </div>
            </div>
        </Layout>
    );
}

export default Carrito;