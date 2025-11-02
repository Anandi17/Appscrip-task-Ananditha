import Head from 'next/head'


export default function Header() {
return (
<header className="site-header">
<div className="site-wrap">
<a className="logo" href="/">Appscrip Demo</a>
<nav className="nav">
<a href="#">Home</a>
<a href="#">Shop</a>
<a href="#">Contact</a>
</nav>
</div>


<style jsx>{`
.site-header { border-bottom: 1px solid #eee; }
.site-wrap { max-width: 1200px; margin: 0 auto; padding: 12px 16px; display:flex; align-items:center; justify-content:space-between; }
.logo { font-weight:700; font-size:1.1rem; text-decoration:none; }
.nav a { margin-left: 12px; text-decoration:none; }
`}</style>
</header>
)
}