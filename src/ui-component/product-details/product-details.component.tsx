type Product = {
  id: string
  name: string
  images: string[]
  description: string
  price: number
}
export const ProductDetails = ({ product }: { product: Product }) => (
  <div>
    <h2>{product.name}</h2>
    {product.images.map((img, i) => (
      <img key={i} src={img} alt={product.name} />
    ))}
    <p>{product.description}</p>
    <strong>${product.price}</strong>
  </div>
)
