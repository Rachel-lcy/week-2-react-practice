import gmailPicture from './assets/gmail.png';
import linkedinPicture from './assets/linkedin.png';
import instagramPicture from './assets/instagram.png';


function Contact(){
    return(
        <div className='Contact'>
            <h2>Contact Me</h2>
            <div className='Socials'>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new"><img src={gmailPicture} alt="Gmail" /></a>
                <a href="https://www.linkedin.com/feed/"><img src={linkedinPicture} alt="Gmail" /></a>
                <a href="https://www.instagram.com/"><img src={instagramPicture} alt="Gmail" /></a>
            </div>
        </div>
    )
}

export default Contact;