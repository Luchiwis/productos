import "./product.css"
import { Link } from "react-router-dom"

export function ProductCard({ id, nombre, desc, precio, stock, thumbnail }) {
    return (
        <>
            <div className="product">
                <Link to={"/product/" + id} className="text-link">
                    <div className="product-img">
                        <img src={thumbnail} alt="product image" />
                    </div>
                    <div className="product-body">
                        <h1 className="product-title">{nombre}</h1>
                        <p className="product-description">{desc}</p>
                        <div className="product-container">
                            <p className="product-stock">stock:{stock}</p>
                            <p className="product-price">precio: {precio}</p>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}