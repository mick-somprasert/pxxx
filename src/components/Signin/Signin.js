import React, {Component} from 'react';
import './Signin.css';

class Signin extends Component {
    render(){
        return(
            <div>
                <h2>**เข้าสู่ระบบ**</h2>
                <form className="myForm">
                    <label for="username" className="myLabel">Username :
                        <input type="text" name="username" className="myInput" /><br/>
                    </label>
                    <label for="password" className="myLabel">Password :
                        <input type="password" name="password" className="myInput" /><br/>
                    </label>
                    <button className="myButton"> SignIn </button>
                </form>
            </div>
        )
    }
}
export default Signin;