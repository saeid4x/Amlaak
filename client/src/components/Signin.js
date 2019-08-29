import React , {Component} from 'react';
import "../css/Signin.css";
import {Link} from "react-router-dom"
import AdminLayout from './layouts/adminLayout';
import {Paper,Divider,Grid,TextField, Button
                
                } from "@material-ui/core";


export default class extends Component{

    render(){

      return  (
            <section className="signin">
                <AdminLayout/>
                
                <section className="signin-content">
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
                                        />
                                </div>
                                

                             </Grid>
                        </Grid>

                        <Grid item sm={12}>
                            <center>
                            <Button variant="outlined" color="primary" style={{marginTop:15}}>ورود به حساب</Button>
                            </center>
                        </Grid>
                        <Grid item sm={12}>
                            <p style={{textAlign:'right',marginRight:20}}>
                                <Link to="">فراموشی کلمه عبور 
                                </Link>
                            </p>
                            <p style={{textAlign:'right',marginRight:20}}>
                                هنوز عضو نیستید؟ <Link to="">ثبت نام در سایت</Link>
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

                
            </section>
        )
    }
}