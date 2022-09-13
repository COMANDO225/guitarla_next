import Entrada from "./Entrada";

const ListadoBlog = ({blog}) => {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className={'blog'}>
                {blog.map( entrada => (
                    <Entrada
                        key={entrada.id}
                        entrada={entrada}
                    />
                ))}
            </div>
        </>
    );
}

export default ListadoBlog;