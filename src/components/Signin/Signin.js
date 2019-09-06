import React, {Component} from 'react';
import './Signin.css';

class Signin extends Component {
    render(){
        return(
            <div style={{textAlign: 'center' ,maxWidth: 500}}>
                <form>
                <h2>**เข้าสู่ระบบ**</h2>
                
                <div className="form-group row">
                    <label for="username" className="col-3">Username :</label>
                    <div className="col-9">
                        <input type="text" name="username" placeholder="Username" className="form-control" />
                    </div>
                </div>

                <div className="form-group row">
                    <label for="password" className="col-3">Password :</label>
                    <div className="col-9">
                        <input type="password" name="password" placeholder="Password" className="form-control" />
                    </div>
                </div>

                <div className="form-group row">
                    <label className="offset-col-3"></label>
                        <div className="col-9">
                            <button className="btn btn-success">เข้าสู่ระบบ</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signin;