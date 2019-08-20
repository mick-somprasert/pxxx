import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    render(){
        var Heaber = {
            display: 'inlineBlock',
            backgroundColor:'#009423',
            color: '#FFF',
            fontSize: 25,
            padding: 10,
            
        }
        return(
            <div style={{display: 'block', backgroundColor: '#5efa81', fontSize:25, padding:10,}}> <br/>
                <Link to="/" style={Heaber}>Home</Link>
                <Link to="/about" style={Heaber}>About</Link> 
                <Link to="/signin" style={Heaber}>Signin</Link> 
                <Link to="/signup" style={Heaber}>Signup</Link> 
            </div>
        )
    }
}
export default Header;