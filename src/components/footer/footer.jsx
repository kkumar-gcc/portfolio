import './footer.css';

function Footer(){

    return (
        <div className="frame">
        <a href="#" className="btn">
          <ion-icon name="logo-facebook" style={{ color: '#3b5998' }}></ion-icon>

        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-twitter" style={{ color: '#00acee' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-dribbble" style={{ color: ' #ea4c89' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-linkedin" style={{ color: '#0e76a8' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="logo-github" style={{ color: '#AD5C51' }}></ion-icon>
        </a>
        <a href="#" className="btn">
          <ion-icon name="mail"></ion-icon>
        </a>
      </div>
    )
}

export default Footer;