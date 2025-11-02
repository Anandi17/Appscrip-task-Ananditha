import Head from 'next/head'
import Header from '../components/Header'
import Filters from '../components/Filters'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'

export default function Home({ products }) {
const siteTitle = 'Product Listing — Appscrip Task'
const siteDescription = 'Responsive product listing page demo with SSR and SEO. Browse products fetched from a mock API.'


const jsonLd = {
"@context": "https://schema.org",
"@type": "ItemList",
"name": "Sample Product Listing",
"itemListElement": products.slice(0, 20).map((p, i) => ({
"@type": "Product",
"position": i + 1,
"name": p.title,
"image": p.image,
"description": p.description,
"sku": p.id,
"offers": {
"@type": "Offer",
"price": p.price,
"priceCurrency": "USD"
}
}))
}
return (
<div>
<Head>
<title>{siteTitle}</title>
<meta name="description" content={siteDescription} />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="index, follow" />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
</Head>


<Header />


<main className="container">
<h1 className="page-title">Products</h1>
<h2 className="visually-hidden">Filter and product listing</h2>


<div className="layout">
<aside className="sidebar">
<Filters />
</aside>

<section className="product-area">
<div className="product-grid" role="list">
{products.map((product) => (
<ProductCard key={product.id} product={product} />
))}
</div>
</section>
</div>
</main>


<Footer />


<style jsx>{`
.container { max-width: 1200px; margin: 0 auto; padding: 16px; }
.page-title { font-size: 2rem; margin: 16px 0; }
.layout { display: grid; grid-template-columns: 280px 1fr; gap: 24px; align-items: start; }
.sidebar { border-right: 1px solid #e6e6e6; padding-right: 12px; }
.product-area { }
.product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }


@media (max-width: 1024px) {
.product-grid { grid-template-columns: repeat(2, 1fr); }
.layout { grid-template-columns: 1fr; }
.sidebar { order: 2; border-right: none; padding-right: 0; }
}
@media (max-width: 480px) {
.product-grid { grid-template-columns: 1fr; }
.page-title { font-size: 1.5rem; }
}
`}</style>
</div>
)
}


export async function getServerSideProps() {
try {
const res = await fetch('https://fakestoreapi.com/products')
const products = await res.json()
return { props: { products } }
} catch (err) {
console.error('SSR fetch error', err)
return { props: { products: [] } }
}
}