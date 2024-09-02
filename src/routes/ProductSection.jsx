import { useParams } from "react-router-dom"

export function ProductSection() {
    const { id } = useParams()

    return (
        <h1>producto {id}</h1>
    )
}