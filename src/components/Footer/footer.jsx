import '../../styles/footer-style/footer.css';
import pp from '../../images/pi-removebg-preview.png';
import git from '../../images/25231.png';
import link from '../../images/LinkedIn.png';
function Footer () {

    return (
        <footer className='footer' id='foot'> 
            <div className='footerLeft'>
                <img src={pp} alt="error" />
                <a href="mailto:moad.abidi@outlook.com">Envoyer un e-mail</a>
            </div>
            <div className='reseaux'>
                <div className='resLogo'>
                    <a href="https://github.com/Zzodiaq">
                        <img src={git} alt="error" />
                    </a>
                    <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE8ItYlatpBtQAAAYuqbsjI8wAeMkRwAfaXjunJw7_7OylQ_CmZYQ4lbGFzIt78UgdmJ0DBnjkFtAVp9yWRjxR2d0NL6K3YVTn8fnbZ5ncenf9SSXQYe4lMJS2jRILrkMCn4X4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmoad-abidi-753010210%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app">
                        <img src={link} alt="error" />
                    </a>
                </div>
                <p>© 2023 Abidi Moad, Tous droits réservés.</p>
            </div>
        </footer>
    ) 
}

export default Footer