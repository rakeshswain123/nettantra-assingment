import React, { Component } from 'react';
import weeb from "../src/img/img3.svg";

class Signindone extends Component{

    render(){
        return (
            <section id="head" className="justify-content-center">
            <div>
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column" >
                                <div className="mt-3">
                                <h1 className="text-center">Successfully Logged In</h1>
    
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={weeb} className="img-fluid animated" alt="home img"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Signindone;
