import React, {Component} from 'react';
import './Signup.css';

class Signup extends Component {
    render(){
        return(
            <div>
                <h2>++สมัครสมาชิก++</h2>
                <form className="myForm">
                    
                    <label for="username" className ="myLabel">Username :
                        <input type="text" name="username" className="myInput"/>
                    </label>
                    <label for="password" className ="myLabel">Password :
                        <input type="text" name="password" className="myInput"/>
                    </label>
                    <label for="confirm-password" className ="myLabel">Confirm Password :
                        <input type="text" name="confirm-password" className="myInput"/>
                    </label>
                    <label for="firstname" className ="myLabel">Firstname :
                        <input type="text" name="firstname" className="myInput"/>
                    </label>
                    <label for="lastname" className ="myLabel">Lastname :
                        <input type="text" name="lastname" className="myInput"/>
                    </label>
                    <button className="myButton">บันทึก</button>
                </form>
            </div>
        )
    }
}
export default Signup;