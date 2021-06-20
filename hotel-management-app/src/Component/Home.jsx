import React from 'react'
import '../App.css'
import Logo from '../Images/hotel Logo.jpg'
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
          
            <div>
        <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to="/room"> More Rooms</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"> <Link to="/login"> Login</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to="/signup">Sign Up</Link></a>
  </li>
</ul>
        <div style={{display:"flex",textAlign:"center"}}>
        <div>

        </div>   
                  <br/>
         <div>   
         
         </div>  
                   <br/>
         <div>
         
         </div>
        </div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light text-capitalize main-font-family">
          <div className="container">
            <a className="navbar-brand" href="index.html"><img src="imgs/logo.png" alt="#" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#show-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="show-menu">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#room">rooms</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">blog</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">contacts</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Features
                  </a>
                  
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  
                    <div className="dropdown-divider" />
                    
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </li>
                <li className="nav-item book d-flex align-items-center">
                  <a className="nav-link" href="#">book now</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header id="home">
          <div className="small-container">
            <form className="main-font-family text-center">
              <input type="search" />
              <i className="fas fa-search" />
              <input type="submit" defaultValue="Search" />
            </form>
            <div className="row">
              <div className="col-lg-4 col-12 lobster-font-family d-flex align-items-center">
                <h2>It is a long established fact that a reader will be distracted by the readablen</h2>
                <button><a href="#">About hotel</a></button>
              </div>
            </div>
            <div className="h-slider roboto-font-family welcome d-flex align-items-center justify-content-center">
              <h1 className="text-capitalize">Welcome to <br /><span>five hotel</span></h1>
              <div id="headerslider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item carousel-three active" />
                  <div className="carousel-item carousel-two" />
                  <div className="carousel-item carousel-one" />
                </div>
                <a className="carousel-control-prev" href="#headerslider" role="button" data-slide="prev">
                  <i className="fas fa-angle-double-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#headerslider" role="button" data-slide="next">
                  <i className="fas fa-angle-double-right" />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="st-rec" />
          <div className="rd-rec" />
        </header>
        <div className="about lobster-font-family">
          <div className="container">
            <h2 className="text-center text-capitalize">About our hotel</h2>
            <img src="imgs/shape.png" />
            <div className="row">
              <div className="col-lg-6 col-12">
                <h4>A best place to enjoy your life</h4>
                <p>This is a very good hotel and the rooms of this hotel are also very cheap and this hotel also has a swimming pool and the food of this hotel is also wonderful. </p>
                <button><a href="#">Read more</a></button>
              </div>
              <div className="col-lg-6 col-12">
                <div className="img" />
              </div>
            </div>
            <h2 className="text-capitalize" id="room">rooms &amp; suits</h2>
            <div className="row">
              <div className="col-lg-4 col-12">
                <div className="img" />
              </div>
              <div className="col-lg-8 col-12">
                <div className="block">
                  <div>
                    <img src="imgs/shape.png" />
                    <strong>$405</strong>
                    <h5>Comfort Double Rooms</h5>
                    <p>
                      Our double rooms have a single double bed, but we can always add a sofa bed if you would like to increase the capacity to three people. These rooms vary in size from 20–25 sq m. Our double rooms are equipped with: Shower Telephone Safe Mini-fridge Satellite LCD TV Seating unit Hair dryer Free WiFi</p>
                    <button><a href="#" className="text-capitalize">Read more</a></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery lobster-font-family" id="blog">
          <div className="container">
            <h2 className="text-calitalize text-center">Our gallery</h2>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div className="pic-one"><h4>Relaxed swimming</h4></div>
                <div className="pic-two"><h4>Spacious Accommodtion</h4></div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="pic-three active"><h4>Yoga Wellness</h4></div>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="pic-four"><h4>Special dinner</h4></div>
                <div className="pic-five"><h4>Apa &amp; Wellness</h4></div>
              </div>
            </div>
          </div>
        </div>
        <div className="slider main-font-family">
          <h2 className="text-center text-capitalize main-font-family">what our clients say</h2>
          <div id="slideToNext" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#slideToNext" data-slide-to={0} className="active" />
              <li data-target="#slideToNext" data-slide-to={1} />
              <li data-target="#slideToNext" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="carousel-caption d-block">
                  <img src="imgs/pic7.jpg" />
                  <h5>Mark</h5>
                  <p>This is a good hotel and everything they do is good</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-block">
                  <img src="imgs/pic7.jpg" />
                  <h5>Jhon</h5>
                  <p>This is a very good hotel, everything is good and the food is great</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="carousel-caption d-block">
                  <img src="imgs/pic7.jpg" />
                  <h5>Furhan</h5>
                  <p>This hotel is very good and the room prices of this hotel are also good</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact main-font-family text-center">
          <div className="container">
            <h2 id="contact">Get in touch</h2>
            <div className="row">
              <div className="col-6">
                <div className="contact-form">
                  <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Phone" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <input type="submit" defaultValue="submit" />
                  </form>
                </div>
              </div>
              <div className="col-6">
                <h2 className="text-right">Book Your Holiday Best for relaxed retreats and cultural encounters</h2>
                <img src="imgs/shape.png" />
              </div>
            </div>
          </div>
          <div />
        </div>
        <footer className="noto-font-family">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <h3>Useful links</h3>
                  <ul className="text-capitalize">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Rooms</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contacts</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                  <h3>Find us</h3>
                  <p>Healing Center, 176 W Street name,<br />
                    Karachi, Pakistan<br />
                    (+92) 3111111111 <br />
                    (+92) 3222222222 <br />
                    fivehotel@gmail.com
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 col-12 form">
                  <h3>News letter</h3>
                  <form>
                    <input type="email" placeholder="Email" />
                    <input type="submit" />
                  </form>
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                    <li><a href="#"><i className="fab fa-twitter" /></a></li>
                    <li><a href="#"><i className="fab fa-instagram" /></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="copyright noto-font-family">
          <p>© 2021 All Rights Reserved. Create by <a target="_blank" href="https:://github.com/jibranabduljabbar">Jibran Abdul Jabbar</a></p>
        </div>
            </div>
        )
    }
}


export default Home;