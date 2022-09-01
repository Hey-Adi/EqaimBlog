import './Footer.css';
function Footer() {
    return (
        <div className="footer">
            <p>Handcrafted with ❤ by Aditya Burman</p>
            <p style={{color:'var(--grey)'}}>©{new Date().getFullYear()} Eqaim Blog. All rights reserved </p>
        </div>
    )
}
export default Footer;