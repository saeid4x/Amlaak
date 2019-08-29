import React,{Component} from 'react';
import AdminLayout from './layouts/adminLayout';
import "../css/signup.css";
import {Grid,Button,Paper, TextField,Checkbox,Divider
            
            } from '@material-ui/core'

export default class extends Component{

    state={
        chackboxChecked:false
    }
    handleChackbox=()=>{
        
        this.setState({
            chackboxChecked:!this.state.chackboxChecked
        })
        setTimeout(() => {
            console.log(this.state.chackboxChecked)
            if(this.state.chackboxChecked === false){
                console.log('chackbox unChecked!')
    
            }else{
                console.log('chackbox Checked!')
            }
            
        }, 1000);
       
        
    }
    render(){
        return(
            <section className="signup">
                <AdminLayout/>

                
                <section className="signup-content">
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
                                                />
                                    </Grid>
                                </Grid>


                                {/* === aggrement checkbox======= */}
                                <div className="signup-aggrement">
                                <span>با قوانین موافقم</span>
                                 <Checkbox
                                    checked={this.state.chackboxChecked}
                                    onChange={this.handleChackbox}
                                    value="checkedA"
                                    inputProps={{
                                    'aria-label': 'primary checkbox',
                                    }}
                                />
                               
                                </div>

                                {/* ======= signup button========= */}
                                <div className="signup-btn">
                                    <Button variant="outlined" color="primary"> ثبت نام</Button>
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

                        </Grid>

                    </Grid>
                    </Paper>
                </section>
              
            </section>
        )
    }
}