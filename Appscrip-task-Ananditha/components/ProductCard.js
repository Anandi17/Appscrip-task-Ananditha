export default function ProductCard({ product }) {
const cleanTitle = product.title.replace(/[^a-z0-9\s]/gi, '').toLowerCase().split(' ').slice(0,6).join('-')
const seoFileName = `${cleanTitle}-${product.id}.jpg` // illustrative — images come from API


return (
<article className="card" role="listitem">
<img src={product.image || '/images/product-placeholder.jpg'} alt={product.title} loading="lazy" width="300" height="300" />
<h3 className="card-title">{product.title}</h3>
<p className="price">${product.price}</p>
<button aria-label={`Add ${product.title} to cart`} className="btn">Add to Cart</button>


<style jsx>{`
.card { border:1px solid #e8e8e8; padding:12px; border-radius:8px; display:flex; flex-direction:column; gap:8px; }
img { object-fit:contain; width:100%; height:200px; }
.card-title { font-size:0.95rem; margin:0; min-height:40px; }
.price { font-weight:700; }
.btn { margin-top:auto; padding:8px; background:#111; color:#fff; border:none; border-radius:6px; }
`}</style>
</article>
)
}