import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

class SignUp extends React.Component{
    render(){
        return(
            <div>
              <ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="">Sign Up</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to="/"> Home</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"> <Link to="/room"> More Rooms</Link></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><Link to="/login">Login</Link></a>
  </li>
</ul>
                <div style={{marginTop: '10px', backgroundRepeat: 'no-repeat', padding: '115px', backgroundImage: 'url("https://fsa.zobj.net/crop.php?r=Woda03kEiMjk45yPKMYGjuJEM3rlb95_Xt6y0OyvjwEtlhdaq7NwFQoOyBwfhbsqXZ76eBcFeh_M_VFC8RR_GUmpNGxJo7QBAVquUAe0OLE33ShI9Xdj2lgCM0NIMU_y9Sd62KGXxkIYgJiA")'}}>
        <h1 style={{fontFamily: 'Georgia, "Times New Roman", Times, serif', backgroundColor: 'black', color: 'white', textAlign: 'center', textDecoration: 'underline', borderRadius: '100px', fontStyle: 'oblique', fontWeight: 'bold', wordSpacing: '1px', opacity: '50px', padding: '5px', letterSpacing: '1px', cursor: 'pointer', margin: '10px', boxShadow: '0px 0px 20px 0px grey'}}>Sign Up </h1>
        <br />
        <br />
        <br />
        <h4 style={{fontFamily: 'Georgia, "Times New Roman", Times, serif', backgroundColor: 'black', color: 'white', textAlign: 'center', textDecoration: 'underline', borderRadius: '100px', fontStyle: 'oblique', fontWeight: 'bold', wordSpacing: '1px', opacity: '50px', padding: '5px', letterSpacing: '1px', cursor: 'pointer', margin: '10px', boxShadow: '0px 0px 20px 0px grey'}}>Email: </h4>
        <br /><br />
        <div style={{textAlign: 'center'}}>
          <input placeholder="Enter Your Email Address..." style={{borderRadius: '100px', cursor: 'pointer', height: '30px', width: '180px', backgroundImage: 'url("https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg")', fontFamily: 'Georgia, "Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'oblique'}} type="email" id="lemail" />
        </div>
        <br />
        <br />
        <h4 style={{fontFamily: 'Georgia, "Times New Roman", Times, serif', backgroundColor: 'black', color: 'white', textAlign: 'center', textDecoration: 'underline', borderRadius: '100px', fontStyle: 'oblique', fontWeight: 'bold', wordSpacing: '1px', opacity: '50px', padding: '5px', letterSpacing: '1px', cursor: 'pointer', margin: '10px', boxShadow: '0px 0px 20px 0px grey'}}> Password: </h4>
        <br /><br />
        <div style={{textAlign: 'center'}}>
          <input placeholder="Enter Your Password..." style={{borderRadius: '100px', cursor: 'pointer', height: '30px', width: '180px', backgroundImage: 'url("https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg")', fontFamily: 'Georgia, "Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'oblique'}} type="password" id="lpassword" />
        </div>
        <br />
        <br />
        <br />
        <div style={{textAlign: 'center'}}>
          <h3 id="fdata-err" style={{cursor: 'not-allowed', wordSpacing: '1px', textDecoration: 'underline', color: 'rgb(255, 0, 0)', backgroundImage: 'url("https://globetrender.com/wp-content/uploads/2020/05/Caribbean-beach.jpg")', borderRadius: '100px', fontWeight: 'bold', fontStyle: 'oblique', fontFamily: 'Georgia, "Times New Roman", Times, serif'}} />    
          <br />
          <button onclick="SignUp()" style={{borderRadius: '100px', cursor: 'pointer', height: '40px', width: '220px', marginLeft: '-15px', backgroundColor: '#0D6EFD', color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif', fontWeight: 'bold', fontStyle: 'oblique'}}>Sign Up</button>
        </div>   
      </div>
            </div>
        )
    }
}

export default SignUp