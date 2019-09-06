import React, {Component} from 'react';
import './Signup.css';

class Signup extends Component {
    render(){
        return(
            <div style={{ textAlign: 'center', maxWidth: 500}}>
                <form>
                    <h2>++สมัครสมาชิก++</h2>
                

                    <div className="form-group row">
                        <label for="username" className ="col-3">Username :</label>
                        <div className="col-9">
                            <input type="text" name="username" placeholder="Username" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="password" className ="col-3">Password :</label>
                        <div className="col-9">
                            <input type="password" name="password" placeholder="Password" className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                        <label for="confirm-password" className ="col-3">Confirm Password :</label>
                        <div className="col-9">
                            <input type="password" name="confirm-password" placeholder="Confirm Password" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="firstname" className ="col-3">Firstname :</label>
                        <div className="col-9">
                            <input type="text" name="firstname" placeholder="Firstname" className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label for="lastname" className ="col-3">Lastname :</label>
                        <div className="col-9">
                            <input type="text" name="lastname" placeholder="Lastname" className="form-control"/>
                        </div>
                    </div>
                    
                    <div className="form-group row">
                    <label className="offset-col-3"></label>
                        <div className="col-9">
                            <button className="btn btn-success">บันทึกข้อมูล</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;