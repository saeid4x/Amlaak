import React , {Component} from 'react';
import "../css/Signin.css";
import {Link} from "react-router-dom"
import AdminLayout from './layouts/adminLayout';
import {Paper,Divider,Grid,TextField, Button
                
                } from "@material-ui/core";
import axios from 'axios'
import keys from '../config/keys'



export default class extends Component{

    state={
        username:null,
        email:null,
        password:null
    }
    handleChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.value
        })
       
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(keys.backendUrl+'/api/users/signin',this.state)
            .then((data)=>{
                if(data){
                    console.log(data.data.msg)
                    console.log(data.data)
                }
            })

    }
    render(){

      return  (
            <section className="signin">
                <AdminLayout/>
                <form onSubmit={this.handleSubmit}>
                <section className="signin-content" style={{marginTop:80}}>
                    <Paper>
                    <div>
                        <center>
                        <h3>ورود به  حساب</h3>
                        <Divider/>
                        </center>
                    </div>

                    <Grid container sm={12}>

                        <Grid container sm={12} direction="row-reverse">
                            <Grid item sm={2}>
                            
                                <p className="signin-lbl">نام کاربری</p>
                            </Grid>

                            <Grid item sm={9}>
                                <div className="signin-field-holder">
                                    <TextField
                                    margin="dense"
                                    variant="outlined"
                                    className="signin-fields"
                                    onChange={this.handleChanges('username')}
                                        />
                                </div>
                                

                            </Grid>
                        </Grid>

                        
                        <Grid container sm={12} direction="row-reverse">
                            <Grid item sm={2}>
                                <p className="signin-lbl">کلمه عبور</p>
                            </Grid>

                            <Grid item sm={9}>
                                <div className="signin-field-holder">
                                    <TextField
                                    margin="dense"
                                    variant="outlined"
                                    className="signin-fields"
                                    onChange={this.handleChanges('password')}
                                        />
                                </div>
                                

                             </Grid>
                        </Grid>

                        <Grid item sm={12}>
                            <center>
                            <Button variant="outlined" type="submit" color="primary" style={{marginTop:15}}>ورود به حساب</Button>
                            </center>
                        </Grid>
                        <Grid item sm={12}>
                            <p style={{textAlign:'right',marginRight:20}}>
                                <Link to="">فراموشی کلمه عبور 
                                </Link>
                            </p>
                            <p style={{textAlign:'right',marginRight:20}}>
                                هنوز عضو نیستید؟ <Link to="/signup">ثبت نام در سایت</Link>
                            </p>
                        </Grid>
                        <Grid item sm={12}>
                            <Divider></Divider>
                        </Grid>
                        <Grid item sm={12}>
                            <div>
                                <center>
                                <p>ورود با</p>
                                </center>
                            </div>                            
                        </Grid>

                        <Grid item sm={12}>
                            <center>
                        <Button color="primary" variant="outlined">google</Button>
                         <Button color="secondary" variant="outlined">LinkedIn</Button>
                         </center>
                        </Grid>


                        

                    </Grid>
                    </Paper>
                </section>
                </form>
                
            </section>
        )
    }
}