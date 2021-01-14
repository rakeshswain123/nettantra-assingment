import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
class Signup extends Component{

    constructor(props){
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            address : "",
            city : "",
            state : "",
            zip : "",
            terms : false,
            url : "http://localhost:3000/api/addNewData",
            redirect : false
        }
    }
    render(){
        return (
            <>
            {this.state.redirect ? <Redirect to={{ pathname: '/signin', state: { data: "" } }} /> : null}
            <div className="my-4">
                <h1 className="text-center">Sign-Up</h1>
            </div>
            <div className="container-fluid mb-4">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row">
                            <div className="col-md-7 col-10 mx-auto">
                            <div className="card ">
                        
                        <div className="card-body">
                        <form>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label className="label1" for="validation01" >First Name</label>
                                        <input type="text" className="form-control" id="validation01" name="" placeholder="First Name" value={this.state.firstName} onChange={(e)=>{
                                            this.setState({
                                                firstName : e.target.value
                                            })
                                        }} required/>
                                        
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="label1" for="validation02">Last Name</label>
                                        <input type="text" className="form-control" id="validation02" name="" placeholder="Last Name" value={this.state.lastName} onChange={(e)=>{
                                            this.setState({
                                                lastName : e.target.value
                                            })
                                        }} required/>
                                        
                                    </div>
                                    
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label className="label1" for="validation03">Email</label>
                                        <input type="text" className="form-control" id="validation03" name="" Placeholder="Email" value={this.state.email} onChange={(e)=>{
                                            this.setState({
                                                email : e.target.value
                                            })
                                        }} required/>
                                        
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="label1" for="inputPassword1">Password</label>
                                        <input type="password" className="form-control " id="validation04" name="" Placeholder="Password" aria-describedby="passwordHelpInline" value={this.state.password} onChange={(e)=>{
                                            this.setState({
                                                password : e.target.value
                                            })
                                        }} required/>
                                        <small id="passwordHelpInline" className="text-muted">
                                             Must be 8-20 characters long.
                                        </small>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-12 mb-3">
                                        <label className="label1" for="validation03">Address</label>
                                        <input type="text" className="form-control" id="validation03" name="" Placeholder="Lane" value={this.state.address} onChange={(e)=>{
                                            this.setState({
                                                address : e.target.value
                                            })
                                        }} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                        <label className="label1" for="validation05">City</label>
                                        <input type="text" className="form-control" id="validation05" placeholder="City" value={this.state.city} onChange={(e)=>{
                                            this.setState({
                                                city : e.target.value
                                            })
                                        }} required/>
                                    </div>
                                    
                                    <div className="col-md-6 mb-3">
                                        <label className="label1" for="validation05">State</label>
                                        <input type="text" className="form-control" id="validation05" placeholder="State" value={this.state.state} onChange={(e)=>{
                                            this.setState({
                                                state : e.target.value
                                            })
                                        }}required/>
                                        
                                    </div>
                                    <div className="col-md-2 mb-3">
                                        <label className="label1" for="validation06">Zip</label>
                                        <input type="text" className="form-control" id="validation06" Placeholder="Zip" value={this.state.zip} onChange={(e)=>{
                                            this.setState({
                                                zip : e.target.value
                                            })
                                        }} required/>
                                        
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input is-valid" type="checkbox" value="" id="invalidcheck3"  value={this.state.terms} onChange={(e)=>{
                                            this.setState({
                                                terms : e.target.value
                                            })
                                        }}required/>
                                        <label className="label1" className="form-check-label" for="invalidcheck3">Agree to terms and conditions</label>
                                    </div>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                    </div>
    
                                </div>
                                <section id="header" className="text-center my-4">
                                    <button className="btn-get-started" type="submit" onClick={()=>{
                                        var postObj = { 
                                            firstname : this.state.firstName,
                                            lastName : this.state.lastName,
                                            email : this.state.email,
                                            password : this.state.password,
                                            address : this.state.address,
                                            city : this.state.city,
                                            state : this.state.state,
                                            zip : this.state.zip,
                                            terms : this.state.terms
                                        }
                                        axios.post(this.state.url, postObj, {
                                            headers: {
                                              'Content-Type': 'application/json',
                                            }
                                          }).then((response) => {
                                              console.log(response.data)
                                            this.setState({
                                                redirect : true
                                            })
                                      
                                          }).catch((err) => {
                                            console.log("error", err)
                                           
                                          })
                                    }}>Join Us</button>
                                </section>
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
// const Signup = () => {
//     return (
//         <>
//         <div className="my-4">
//             <h1 className="text-center">Sign-Up</h1>
//         </div>
//         <div className="container-fluid mb-4">
//             <div className="row">
//                 <div className="col-12 mx-auto">
//                     <div className="row">
//                         <div className="col-md-7 col-10 mx-auto">
//                         <div className="card ">
                    
//                     <div className="card-body">
//                     <form>
//                             <div className="form-row">
//                                 <div className="col-md-6 mb-3">
//                                     <label className="label1" for="validation01">First Name</label>
//                                     <input type="text" className="form-control" id="validation01" name="" placeholder="First Name" required/>
                                    
//                                 </div>
//                                 <div className="col-md-6 mb-3">
//                                     <label className="label1" for="validation02">Last Name</label>
//                                     <input type="text" className="form-control" id="validation02" name="" placeholder="Last Name" required/>
                                    
//                                 </div>
                                
//                             </div>
//                             <div className="form-row">
//                                 <div className="col-md-6 mb-3">
//                                     <label className="label1" for="validation03">Email</label>
//                                     <input type="text" className="form-control" id="validation03" name="" Placeholder="Email" required/>
                                    
//                                 </div>
//                                 <div className="col-md-6 mb-3">
//                                     <label className="label1" for="inputPassword1">Password</label>
//                                     <input type="password" className="form-control " id="validation04" name="" Placeholder="Password" aria-describedby="passwordHelpInline" required/>
//                                     <small id="passwordHelpInline" className="text-muted">
//                                          Must be 8-20 characters long.
//                                     </small>
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <div className="col-12 mb-3">
//                                     <label className="label1" for="validation03">Address</label>
//                                     <input type="text" className="form-control" id="validation03" name="" Placeholder="Lane" required/>
//                                 </div>
//                             </div>
//                             <div className="form-row">
//                                 <div className="col-md-4 mb-3">
//                                     <label className="label1" for="validation05">City</label>
//                                     <input type="text" className="form-control" id="validation05" placeholder="City" required/>
//                                 </div>
                                
//                                 <div className="col-md-6 mb-3">
//                                     <label className="label1" for="validation05">State</label>
//                                     <input type="text" className="form-control" id="validation05" placeholder="State" required/>
                                    
//                                 </div>
//                                 <div className="col-md-2 mb-3">
//                                     <label className="label1" for="validation06">Zip</label>
//                                     <input type="text" className="form-control" id="validation06" Placeholder="Zip" required/>
                                    
//                                 </div>
//                             </div>
                            
//                             <div className="form-group">
//                                 <div className="form-check">
//                                     <input className="form-check-input is-valid" type="checkbox" value="" id="invalidcheck3" required/>
//                                     <label className="label1" className="form-check-label" for="invalidcheck3">Agree to terms and conditions</label>
//                                 </div>
//                                 <div className="invalid-feedback">
//                                     You must agree before submitting.
//                                 </div>

//                             </div>
//                             <section id="header" className="text-center my-4">
//                                 <NavLink className="btn-get-started" type="submit" to="/signin">Join Us</NavLink>
//                             </section>
//                         </form>
//                     </div>
//                 </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
        
//         </>
//     )
// }

export default Signup;
