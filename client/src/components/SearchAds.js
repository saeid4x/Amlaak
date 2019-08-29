import React ,{Component} from 'react';
import {Grid, TextField, Select, Paper,Divider, Button
        
        } from "@material-ui/core"
import "../css/searchAds.css"
import AdminLayout from './layouts/adminLayout'
export default class extends Component{

    
    render(){
     
        return(
            <section className="searchAds">
                <AdminLayout></AdminLayout>
                
                <section className="searchArea">
                <Paper>
                    <ul>
                        <li>
                            <span>جستجو</span>
                           
                            <TextField variant="outlined" margin="dense" className="search-field"/>
                            
                            
                            <Select native   className="typeAds">
                                        <option value="null" >نوع آگهی</option>
                                        <option value={'rent'}>رهن و اجاره</option>
                                        <option value={'sell'}>فروش </option>
                            </Select>

                            <Select native  className="adCategory"> 
                                        <option value="null">دسته بندی  </option>
                                         <Divider/>
                                        <option value={'apartment'}>آپارتمان</option>
                                        <option value={'villa'}>ویلا</option>
                                        <option value={'store'}>مغازه</option>
                                        <option value={'flat'}>زمین</option>                                   

                                    </Select>

                            
                        </li>
                        <li>
                            <Grid container sm={12} spacing={3}>
                                <Grid item>
                                <section className="search-segment">
                                 <ul>
                                     <li><center> <span className="title-field"> رهن</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>حداقل</span>
                                         <TextField margin="dense"  variant="outlined" className="min-field"/>
                                     </li>
                                     <li> 
                                     <span>حداکثر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"/>
                                     </li>
                                 </ul>
                             </section>
                                </Grid>

                                <Grid item>
                                <section className="search-segment">
                                 <ul>
                                     <li> <center><span className="title-field"> رهن</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>حداقل</span>
                                         <TextField margin="dense"  variant="outlined"  className="min-field"/>
                                     </li>
                                     <li> 
                                     <span>حداکثر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"/>
                                     </li>
                                 </ul>
                             </section>
                                </Grid>
                                <Grid item>
                                <section className="search-segment">
                                 <ul>
                                     <li><center> <span className="title-field"> مکان</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>استان</span>
                                         <TextField margin="dense"  variant="outlined" className="min-field"/>
                                     </li>
                                     <li> 
                                     <span> شهر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"/>
                                     </li>
                                 </ul>
                             </section>

                                </Grid>                              

                            </Grid>
                           
                        </li>  
                                                
                    </ul>
                 <div className="search-btn-holder">
                 <Button variant="outlined" color="primary" className="search-btn" >جستجو</Button>
                 </div>                 
                    </Paper>
                </section>

                <section className="filter-area">
                    <span>filter area</span>
                </section>
                
                <section className="content-area">

                    <Grid container sm={12} spacing={2}>
                        <Grid item sm={4}>
                            <Paper style={{borderRadius:10}}>
                            <section className="content-segment">

                                <div>
                                    <h4> عنوان آگهی من  </h4>
                                    <hr/>                                    
                                </div>

                                <div>
                                    <div className="imgLabel">
                                        <span>10 image</span>
                                    </div>
                                    <img src="/img/1.jpg" alt=""/>
                                </div>

                                <Grid container sm={12}>
                                    <Grid item sm={12}>
                                        <Grid container sm={12}>
                                            <Grid item sm={6}>
                                                    <span style={{marginLeft:10}}> 1398-10-2</span>
                                            </Grid>
                                            <Grid item sm={6}>
                                                <span>خراسان شمالی / بجنورد </span>                                                
                                            </Grid>                                            
                                        </Grid>
                                         
                                    </Grid>

                                    <Grid item sm={12}>
                                        <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
                                        <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
                                    </Grid>

                                    <Grid item sm={12}>
                                        <Grid container sm={12}>
                                            <Grid item sm={7}>
                                                <Button variant="outlined" color="secondary">مشاهده</Button>                                                
                                            </Grid>
                                            <Grid item sm={5}>
                                                <span style={{marginLeft:60}}>آپارتمان</span>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                
                            </section>
                            </Paper>
                        </Grid>

                        <Grid item sm={4}>
                        <Paper style={{borderRadius:10}}>
                            <section className="content-segment">

                                <div>
                                    <h4> عنوان آگهی من  </h4>
                                    <hr/>                                    
                                </div>

                                <div>
                                    <div className="imgLabel">
                                        <span>10 image</span>
                                    </div>
                                    <img src="/img/1.jpg" alt=""/>
                                </div>

                                <Grid container sm={12}>
                                    <Grid item sm={12}>
                                        <Grid container sm={12}>
                                            <Grid item sm={6}>
                                                    <span style={{marginLeft:10}}> 1398-10-2</span>
                                            </Grid>
                                            <Grid item sm={6}>
                                                <span>خراسان شمالی / بجنورد </span>                                                
                                            </Grid>                                            
                                        </Grid>
                                         
                                    </Grid>

                                    <Grid item sm={12}>
                                        <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
                                        <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
                                    </Grid>

                                    <Grid item sm={12}>
                                        <Grid container sm={12}>
                                            <Grid item sm={7}>
                                                <Button variant="outlined" color="secondary">مشاهده</Button>                                                
                                            </Grid>
                                            <Grid item sm={5}>
                                                <span style={{marginLeft:60}}>آپارتمان</span>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                
                            </section>
                            </Paper>
                        </Grid>

                        <Grid item sm={4}>
                        <Paper style={{borderRadius:10}}>
                            <section className="content-segment">

                                <div>
                                    <h4> عنوان آگهی من  </h4>
                                    <hr/>                                    
                                </div>

                                <div>
                                    <div className="imgLabel">
                                        <span>10 image</span>
                                    </div>
                                    <img src="/img/1.jpg" alt=""/>
                                </div>

                                <Grid container sm={12}>
                                    <Grid item sm={12}>
                                        <Grid container sm={12}>
                                            <Grid item sm={6}>
                                                    <span style={{marginLeft:10}}> 1398-10-2</span>
                                            </Grid>
                                            <Grid item sm={6}>
                                                <span>خراسان شمالی / بجنورد </span>                                                
                                            </Grid>                                            
                                        </Grid>
                                         
                                    </Grid>

                                    <Grid item sm={12}>
                                        <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
                                        <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
                                    </Grid>

                                    <Grid item sm={12}>
                                        <Grid container sm={12}>
                                            <Grid item sm={7}>
                                                <Button variant="outlined" color="secondary">مشاهده</Button>                                                
                                            </Grid>
                                            <Grid item sm={5}>
                                                <span style={{marginLeft:60}}>آپارتمان</span>
                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                
                            </section>
                            </Paper>
                        </Grid>

                    </Grid>
                    
                </section>

           
            </section>
        )
    }
}