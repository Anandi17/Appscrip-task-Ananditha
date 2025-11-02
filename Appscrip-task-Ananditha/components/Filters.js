export default function Filters() {
return (
<div>
<h3>Filters</h3>
<section aria-labelledby="category-heading">
<h4 id="category-heading">Category</h4>
<ul>
<li><label><input type="checkbox" /> Men's Clothing</label></li>
<li><label><input type="checkbox" /> Women's Clothing</label></li>
<li><label><input type="checkbox" /> Electronics</label></li>
<li><label><input type="checkbox" /> Jewelry</label></li>
</ul>
</section>


<section>
<h4>Price</h4>
<p>Use slider or min/max inputs (optional)</p>
</section>


<style jsx>{`
h3 { margin-top: 0; }
ul { list-style:none; padding:0; margin:8px 0 16px 0; }
li { margin-bottom:8px; }
`}</style>
</div>
)
}