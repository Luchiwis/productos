import "./productGrid.css"
import products from "../../assets/prod.json"
import { ProductCard } from "./ProductCard"

export function ProductGrid() {
    return (
        <div className="products">
            {
                products.map((element, key) => {
                    return (<ProductCard
                        key={key}
                        id={element.id}
                        nombre={element.nombre}
                        desc={element.descripcion}
                        precio={element.precio_us}
                        stock={element.stock}
                        thumbnail={element.thumbnail}
                    />)
                })
            }
        </div>
    )
}