export default function Footer() {
return (
<footer style={{ borderTop: '1px solid #eee', marginTop: 24, padding: 16 }}>
<div className="container">© {new Date().getFullYear()} Appscrip Demo — Public Repo</div>
</footer>
)
}