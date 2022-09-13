import Link from 'next/link'
import Curso from '../components/Curso';
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import ListadoBlog from '../components/ListadoBlog';

const Index = ({guitarras, curso, blog}) => {

    return (
      <>
        <Layout page={'Inicio'} guitarras={guitarras[3]}>
          <main className='contenedor'>
            <h1 className='heading'>Nuestra Colección</h1>

            <Listado
                    guitarras = {guitarras}
            />
            <div className='orient_center'>
              <Link href="/tienda">
                <a className='boton shadow'>Más Guitarras <span>&#x279C;</span></a>
              </Link>
            </div>

          </main>
          <Curso
            curso={curso}
          />
          <section className="contenedor">
            <ListadoBlog
              blog = {blog}
            />
            <div className='orient_center'>
              <Link href="/tienda">
                <a className='boton shadow'>Más Guitarras <span>&#x279C;</span></a>
              </Link>
            </div>
          </section>
        </Layout>
      </>
    )
}

export const getServerSideProps = async () => {
  // consulta 1
  // const urlGuitarra = `http://localhost:1337/guitarras`
  // const respuestaG = await fetch(urlGuitarra)
  // const guitarras = await respuestaG.json()

  // consulta 2
  // const url = `http://localhost:1337/cursos`
  // const respuestaC = await fetch(url)
  // const cursos = await respuestaC.json()

  // Consulta anidada
  const urlGuitarras = `http://localhost:1337/guitarras?_limit=6`
  const urlCursos = `http://localhost:1337/cursos`
  const urlBlogs = 'http://localhost:1337/blogs?_limit=3'

  const [resGuitarras, resCursos, resBlogs] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlogs),

  ])

  const [guitarras, curso, blog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlogs.json(),
  ])



  return {
      props: {
          guitarras: guitarras,
          curso: curso,
          blog: blog
      }
  }
}

export default Index