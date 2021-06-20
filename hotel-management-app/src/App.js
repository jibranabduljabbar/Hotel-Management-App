import logo from './logo.svg';
import './App.css';
import Home from './Component/Home.jsx'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Login from './Component/Login'
import SignUp from './Component/Sign-Up.jsx'
import Room from './Component/Room.jsx'

function App() {
  return (
    <div className="App">
       <Router>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/signup' component={SignUp}/>
    <Route exact path='/room' component={Room}/>
    <Route exact path='/' component={Home}/>
             </Router> 
    </div>
  );
}

export default App;
