import './Footer.css'
import brandLogo from '../NavBar/assets/brand-logo.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <figure><img src={brandLogo}alt="logo"></img></figure>
        <p> RETRO TOYS 2024 - TODOS LOS DERECHOS RESERVADOS</p>
      </div>
      
      
    </div>
  )
}

export default Footer