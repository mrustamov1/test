import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { ProductDetails } from "./product-details.component"

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
  }, [id])

  if (!product) return <p>Loading...</p>

  return <ProductDetails product={product} />
}
