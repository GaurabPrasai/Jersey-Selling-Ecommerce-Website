const Head = () => {
  return(
    <>
      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Gaurab's Jersey Store</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
      </head>
    </>
  )
}
const Logo = () => {
  return(
    <>
      <a className="logo" href="/">
        <img src="\src\assets\img\logo.png" alt="logo" />
      </a>
    </>
  ); 
}  

const Navmenu = () => {
  return(
    <>
      <ul className="navmenu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>    
    </>
  
  ); 
}  

const Navicon = () => {
  return(
    <>
      <div className="nav-icon">
        <a href="#"><i className='bx bx-search'></i></a>
        <a href="#"><i className='bx bx-user'></i></a>
        <a href="#"><i className='bx bx-cart'></i></a>
        <button className="login-btn">Login</button>
      </div>
    </>
  
  ); 
}  

const Header = () => {
  return(
    <>
    <header>
      <Logo />
      <Navmenu />
      <Navicon />
    </header>
      
    </>
  );
}

const MainHomeSection = () => {
  return(
    <>
    <section class="main-home">
      <div className="main-text">
            <h5>New Season, New Look</h5>
            <h1>2024 Jersey Drop<br />Authentic Jerseys</h1>
            <p>Represent With Pride</p>

            <a href="#" className="main-btn">Shop Now<i className='bx bx-right-arrow-alt'></i></a>
        </div>
    </section>
    </>
  );
}

const TrendingSection = () => {
  return(
    <>
      <section className="trending-product" id="trending">
        <div className="center-text">
            <h2>Our Best <span>Products</span></h2>
        </div>

        <div className="products">
            <div className="row">
                <img src="\src\assets\\img\1.jpg" alt="" />
                <div className="product-text">
                    <h5>Sale</h5>
                </div>
                <div className="heart-icon">
                    <i className='bx bx-heart'></i>
                </div>
                <div className="rating">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>

                <div className="price">
                    <h4>FC Bayern Home Jersey</h4>
                    <p>$4999 - $5299</p>
                </div>
            </div>

            <div className="row">
                <img src="\src\assets\\img\2.jpg" alt="" />
                <div className="product-text">
                    <h5>Sale</h5>
                </div>
                <div className="heart-icon">
                    <i className='bx bx-heart'></i>
                </div>
                <div className="rating">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>

                <div className="price">
                    <h4>Real Madrid Home Jersey</h4>
                    <p>$7999 - $8599</p>
                </div>
            </div>

            <div className="row">
                <img src="\src\assets\\img\3.jpg" alt="" />
                <div className="product-text">
                    <h5>New</h5>
                </div>
                <div className="heart-icon">
                    <i className='bx bx-heart'></i>
                </div>
                <div className="rating">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                </div>

                <div className="price">
                    <h4>Juventus Pre-Match Jersey</h4>
                    <p>$4299 - $4599</p>
                </div>
            </div>

            <div className="row">
                <img src="\src\assets\\img\4.jpg" alt="" />
                <div className="product-text">
                    <h5>Hot</h5>
                </div>
                <div className="heart-icon">
                    <i className='bx bx-heart'></i>
                </div>
                <div className="rating">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </div>

                <div className="price">
                    <h4>Argentina 24 Home Jersey</h4>
                    <p>$4699 - $5999</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

const JoinSection = () => {
  return(
    <>
      <section id="join">
        <div className="join-banner">
            <span>JOIN US AND GET 15% OFF</span>
            <a href="#" className="secondary-btn">SIGN UP FOR FREE<i className='bx bx-right-arrow-alt'></i></a>
        </div>
      </section>
    </>
  )
}

const ContactSection = () => {
  return(
    <>
      <section className="contact" id="cont">
        <div className="contact-info">
            <div className="first-info">
                <img src="../src/assets/img/logo.png" alt="" />
                <p>Sundarharaincha-10 Khorsane <br /> Morang, Nepal</p>
                <p>021-5606032</p>
                <p>GaurabPrasaigp@gmail.com</p>
                <div className="social-icon">
                    <a href="https://www.facebook.com/Gaurabprasaiofficial/"><i className='bx bxl-facebook'></i></a>
                    <a href="https://twitter.com/Gaurabprasaigp"><i className='bx bxl-twitter'></i></a>
                    <a href="https://www.instagram.com/gaurab_Prasai/" target="_blank"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.youtube.com/@gaurabprasai"><i className='bx bxl-youtube'></i></a>
                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                </div>
            </div>
            <div className="second-info">
                <h4>Support</h4>
                <p>Contact us</p>
                <p>About page</p>
                <p>Size Guide</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>

            <div className="third-info">
                <h4>Shop</h4>
                <p>Men's Jerseys</p>
                <p>Women's Jerseys</p>
                <p>Kids's jerseys</p>
                <p>Gears</p>
                <p>Discount</p>
            </div>

            <div className="fourth-info">
                <h4>Company</h4>
                <p>About</p>
                <p>Blog</p>
                <p>Affiliate</p>
                <p>Login</p>
            </div>
        </div>
      </section>
    </>
  );
}

const Section = () => {
  return(
    <>
      <MainHomeSection />
      <TrendingSection />
      <JoinSection />
      <ContactSection />
    </>
  )
}

const Fotter = () => {
  return(
    <>
      <div class="end-text">
          <p>Copyright &copy; @2024. All Rights Reserved. Designed by Gaurab.</p>
      </div>
    </>
  )
  
}

const AppLayout = () => {

  return (
    <>
      <Head />
      <Header />
      <Section />
      <Fotter />
    </>
  )
}

export default AppLayout
