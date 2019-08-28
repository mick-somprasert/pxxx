import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src="imgae/img2.jpg" className=""></img>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-4">
                        <img src="imgae/img3.jpg" className=""></img>
                    </div>
                    <div className="col-8">
                        <img src="imgae/img4.jpg" className=""></img>
                    </div>
                </div>

                <div className="row">
                    <div className="col-7">
                        <img src="imgae/img5.jpg" className=""></img>
                    </div>
                    <div className="col-5">
                        <img src="imgae/img6.jpg" className=""></img>
                    </div>
                </div>
            
                <div className="row">
                    <div className="col-3">
                        <img src="imgae/img7.jpg" className=""></img>
                    </div>
                    <div className="col-3">
                        <img src="imgae/img8.jpg" className=""></img>
                    </div>
                    <div className="col-3">
                        <img src="imgae/img9.jpg" className=""></img>
                    </div>
                    <div className="col-3">
                        <img src="imgae/img10.jpg" className=""></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default About;