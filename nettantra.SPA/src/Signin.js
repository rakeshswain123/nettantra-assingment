import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router-dom';


class Signin extends Component{

    constructor(props){
        super(props)

        this.state = {
            
            email : "",
            password : "",
            redirect : false,
            url : "http://localhost:3000/api/authUser"
        }
    }

    componentDidMount(){
        if(this.state.redirect == true){
            this.setState({
                redirect :false
            })
        }
    }

    render(){
        return (
            <>
            {this.state.redirect ? <Redirect to={{ pathname: '/signindone', state: { data: "" } }} /> : null}
            <div className="my-5">
                <h1 className="text-center">Sign-In</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-6 col-10 mx-auto">
                            <div className="card text-center">
                        
                        <div className="card-body">
                            <form>
                                <div className="form-group row">
                                    <label for="validation03" className="col-sm-2 col-form-label label1">Email</label>
                                    <div className="col-sm-10">
                                      <input type="email" className="form-control" id="validation03" placeholder="Email" value={this.state.email} onChange={(e)=>{
                                            this.setState({
                                                email : e.target.value
                                            })
                                        }}/>
                                    </div>
                                  </div>
                                <div className="form-group row">
                                        <label for="inputPassword1" className="col-sm-2 col-form-label label1">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control " id="validation04" name="" Placeholder="Password" aria-describedby="passwordHelpInline" value={this.state.password} onChange={(e)=>{
                                            this.setState({
                                                password : e.target.value
                                            })
                                        }} required/>
    
                                        </div>
                                        <small id="passwordHelpInline" className="text-muted col-sm-8">
                                             Must be 8-20 characters long.
                                        </small>
                                </div>
                                <div id="header" className="my-4">
                                    <button className="btn-get-started" type="submit" onClick={()=>{
                                        var postObj = { 
                                            name : this.state.firstName,
                                            email : this.state.email,
                                            password : this.state.password
                                        }
                                        axios.post(this.state.url, postObj, {
                                            headers: {
                                              'Content-Type': 'application/json',
                                            }
                                          }).then((response) => {
                                              console.log(response.data)
                                              if(response.data.recordset.length != 0){
                                                if(response.data.recordset[0].name != ""){
                                                    console.log(response.data.recordset[0].name)
                                                    this.setState({
                                                        redirect : true
                                                    })
                                                }

                                              }
                                      
                                          }).catch((err) => {
                                            console.log("error", err)
                                           
                                          })
                                    }}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Signin;
