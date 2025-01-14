import 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur est quo earum repudiandae repellendus delectus inventore quod suscipit reprehenderit non iste harum voluptate ullam, voluptatibus dicta distinctio nostrum! Blanditiis, minima!</p>
                    <div className="footer-social icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-rigth">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+123423434</li>
                        <li>hellohello@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright © 2025 tomato.com -All Right Reserved.</p>
        </div>
    )
}

export default Footer
