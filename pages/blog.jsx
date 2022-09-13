import Layout from "../components/Layout"
import ListadoBlog from "../components/ListadoBlog"

const Blog = ({blog}) => {

    return (
        <Layout page={'Blog'}>
            <main className="contenedor">
                <ListadoBlog
                    blog={blog}
                />
            </main>
        </Layout>
    )
}

export async function getStaticProps() {

    const url = 'http://localhost:1337/blogs'
    const respuesta = await fetch(url)
    const blog = await respuesta.json()

    return {
        props: {
            blog: blog
        }
    }
}

export default Blog;