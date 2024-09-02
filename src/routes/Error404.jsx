import { Link } from "react-router-dom"
export function Error404() {
    return (
        <>
            <h1>te confundiste hermano, aca no hay nada</h1>
            <h2>Error 404</h2>
            <Link to="/">Volver a la pagina principal</Link>
        </>

    )
}