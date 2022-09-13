import Guitarra from "./Guitarra";

const Listado = ({guitarras}) => {
    return (
        <div className="blog">
            {guitarras.map(guitarra => (
                <Guitarra
                    key={guitarra.id}
                    guitarra = {guitarra}
                />
            ))}
        </div>
    );
}

export default Listado;