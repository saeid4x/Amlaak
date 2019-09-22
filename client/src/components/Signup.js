import React,{Component} from 'react';
import AdminLayout from './layouts/adminLayout';
import "../css/signup.css";
import {Grid,Button,Paper, TextField,Checkbox,Divider
            
            } from '@material-ui/core'
import axios from 'axios'
import keys from '../config/keys';

export default class extends Component{

    state={
        chackboxChecked:true,
        username:null,
        email:null,
        password:null,
        confirmPassword:null,
     
    }
    handleChackbox=()=>{
        
        this.setState({
            chackboxChecked:!this.state.chackboxChecked
        }) 
       
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log('signup occured')
        axios.post(keys.backendUrl+"/api/users/signup",this.state)
            .then((data)=>{
                if(data.data.msg === "blank-field"){
                    console.log(data.data.fullMsg)
                }
                if(data.data.msg === 'user-exist'){                      
                    console.log("user already exist")
                }
                else if(data.data.isValid){
                  localStorage.clear()
                    localStorage.setItem('userID',data.data.id)
                    localStorage.setItem('token',data.data.token)

                    this.props.history.push('/dashboard')


                }
                
            })
       
        
         
    }

    handleChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.value
        })
        
    }
componentDidMount(){

}
    render(){
       
        return(
            <section className="signup">
                <AdminLayout display="none"/>
 
                
                <section className="signup-content" style={{marginTop:80}}>
                <Paper>
                    <Grid container sm={12} direction="row-reverse">
                        <Grid item sm={4}>
                            <div className="signup-info">                           
                            <ul>
                                <li>
                                    <h4>اطلاعات</h4>
                                </li>
                                <li>
                                    <p>
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                     چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردها
                                     ی متنون صورت می توان  و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </p>
                                </li>
                                <li>
                                    <p>قبلا عضو بودید؟</p>
                                </li>
                                <li>
                                    <Button variant="outlined" color="primary">ورود به حساب</Button>
                                </li>
                            </ul>
                            </div>

                        </Grid>
                
                        <Grid item sm={8}>
                        <form onSubmit={this.handleSubmit}>
                            <div className="signup-fields">
                                <div className="signup-header">
                                    <center>
                                        <p>ورود به حساب</p>
                                    </center>
                                </div>
                                <Grid container sm={12} direction="row-reverse">
                                    
                                    <Grid item sm={2}>
                                        <div className="signup-lbl">                                         
                                               <p> نام کاربری </p>                                      
 
                                        </div>
                                    </Grid>

                                    <Grid item sm={8}>
                                        <TextField
                                            margin="dense"
                                            variant="outlined"
                                            className="signup-inputs"
                                            onChange={this.handleChanges('username')}
                                                />
                                    </Grid>
                                    
                                </Grid>
                                
                                {/* ====  email field */}
                                <Grid container sm={12} direction="row-reverse">
                                    <Grid item sm={2}>
                                        <div className="signup-lbl">                                         
                                               <p>ایمیل </p>                                      
 
                                        </div>
                                    </Grid>

                                    <Grid item sm={8}>
                                        <TextField
                                            margin="dense"
                                            variant="outlined"
                                            className="signup-inputs"
                                            onChange={this.handleChanges('email')}
                                                />
                                    </Grid>
                                </Grid>

                                {/* === password field==== */}
                                <Grid container sm={12} direction="row-reverse">
                                    <Grid item sm={2}>
                                        <div className="signup-lbl">                                         
                                               <p>کلمه عبور </p>                                      
 
                                        </div>
                                    </Grid>

                                    <Grid item sm={8}>
                                        <TextField
                                            margin="dense"
                                            variant="outlined"
                                            className="signup-inputs"
                                            onChange={this.handleChanges('password')}
                                                />
                                    </Grid>
                                </Grid>

                                {/*  ======= confirm password field========= */}
                                <Grid container sm={12} direction="row-reverse">
                                    <Grid item sm={2}>
                                        <div className="signup-lbl">                                         
                                               <p style={{fontSize:15}}>     تکرار کلمه عبور   </p>                                      
 
                                        </div>
                                    </Grid>

                                    <Grid item sm={8}>
                                        <TextField
                                            margin="dense"
                                            variant="outlined"
                                            className="signup-inputs"
                                            onChange={this.handleChanges('confirmPassword')}
                                                />
                                    </Grid>
                                </Grid>


                                {/* === aggrement checkbox======= */}
                                <div className="signup-aggrement">
                                <span>با قوانین موافقم</span>
                                 <Checkbox
                                    // checked={this.state.chackboxChecked}
                                    onChange={this.handleChackbox}
                                    value="checkedA"                                    
                                />
                               
                                </div>

                                {/* ======= signup button========= */}
                                <div className="signup-btn">
                                    <Button variant="outlined" type="submit" color="primary" disabled={this.state.chackboxChecked} > ثبت نام</Button>
                                </div>
                                
                                {/* =====  signup with social area=========== */}
                                <Divider style={{marginTop:10}}/>
                              <div>
                                  <center>
                                      ثبت نام با 
                                  </center>
                              </div>
                              <div> 
                                  <center>
                                  <Button variant="outlined" color="primary">Google</Button>
                                  <Button variant="outlined" color="secondary">LinkedIn</Button>
                                  </center>
                              </div>

                               



                            </div>
                            </form>
                        </Grid>
                        
                    </Grid>
                    </Paper>
                </section>
              
            </section>
        )
    }
}