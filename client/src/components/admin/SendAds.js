import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../../config/keys';
import { Paper, Grid, Divider ,TextField,Select,Fab,Switch,Button} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import AdminLayout from  '../layouts/adminLayout';
import "../../css/sendAds.css";

class SendAds extends Component{

    componentDidMount(){

        //  get province and city 

        
    }

    handleChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.value
            
        })
    }
    handleSwitchChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.checked
        })
    }

    // [emkanatMelk,]
    state={
      
        title:null,
        category:null,
        type:null,
        province:null,
        city:null,
        address:null,
        content:null,
        images:'image1.jpg',
        date:'1398/10/5',
        time:'13:25',         
        mobile:null,
        telegram:null,
        whatsapp:null,
        email:null,
        emkanat:[],
        hoomeCity:false,
        metrazh:null,
        numTabaghe:null,
        nearMetro:false
    }
     
    
    handleSubmit=(e)=>{
        e.preventDefault();
        // let formData={
        //     title:this.state.title,
        //     category:this.adsCategory.value,
        //     type:this.adsType.value,
        //     userID:'user1',
        //      province:this.adsProvince.value,
        //      city:this.adsCity.value,
        //      address:this.adsAddress.value,
        //      content:this.adsContent.value,
        //      images:'image1.jpg',
        //      date:1398,
        //      time:'13:25',
        //      contactWay:{
        //          mobile:this.adsMobile.value,
        //          telegram:this.adsTelegram.value,
        //          whatsapp:this.adsWhatsapp.value,
        //          email:this.adsEmail.value
        //      },
        //      emkanat:this.adsEmkanat.value,
        //      features:{
        //          hoomeCity:true,
        //          metrazh:320,
        //          numTabaghe:0,
        //          nearMetro:true
        //      },
        //     //  deposit:this.adsDeposit.value,
        //     //  rent:this.adsRent.value,
        //     //  sale:this.adsSale.value


        // };

     

       axios.post(Keys.backendUrl+'/api/users/123/sendAds',this.state)
        .then((data)=>{
            if(data){
                // console.log(data.data)   
                this.props.history.push("/user/manageAds");
            }
        })

        


        

    }
    render(){
        return(

            <section className="sendAds">
<AdminLayout></AdminLayout>
                <div className="pageTitle">
                    <Paper>
                        <center>
                        <h2>ارسال آگهی </h2>
                        </center>                   
                    </Paper>
                </div>
               
               {/* <Divider/> */}
               <form onSubmit={this.handleSubmit}>
               <div className="gridLayout">
               
                                   <Grid container  sm={12} lg={12} spacing={2} className="g">   {/* main --> Grid.conatiner  */}   

                        
                        <Grid  container sm={5} >  {/* leftSide |   --> Grid.conatiner  */}
                          
                           <Paper style={{width:700}}>
                            <Grid container sm={12} >{/* leftSide 1| [house-feature]  --> Grid.conatiner  */}                                             
                                
                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                <Grid item sm={12}>
                                    <div>
                                        <center>
                                        <h5>ویژگی های ملک</h5>
                                        </center>
                                        <Divider/>
                                    </div>
                                </Grid>
                                    <Grid item sm={10}>
                                        <div>
                                        <Switch
                                            
                                            onChange={this.handleSwitchChanges('hoomeCity')}
                                            
                                            
                                        />
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span>حومه  شهر</span>
                                    </Grid> 
                                </Grid>

                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                
                                </Grid>

                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={9}>
                                        <div>
                                        <Switch
                                           
                                            onChange={this.handleSwitchChanges('nearMetro')}
                                             
                                            
                                        />
                                        </div>
                                    </Grid>

                                    <Grid item sm={3} > 
                                        <span className="featureHouse-lbl"> نزدیک مترو</span>
                                    </Grid> 
                                </Grid>


                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={10}>
                                        <div>
                                        <TextField
                                             margin="dense"
                                             variant="outlined"   
                                             className="featureHouse-field" 
                                             placeholder="متراژ"     
                                             onChange={this.handleChanges('metrazh')}                                   
                                        />
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span className="featureHouse-lbl">   متراژ</span>                                       
                                    </Grid>                                   
                                    
                                </Grid>
                            

                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={9}>
                                        <div>
                                        <TextField                                           
                                            margin="dense"
                                            variant="outlined" 
                                            className="featureHouse-field"  
                                            placeholder="تعداد طبقه"
                                            onChange={this.handleChanges('numTabaghe')}
                                                                                       
                                        />
                                        </div>
                                    </Grid>

                                    <Grid item sm={3} > 
                                        <span className="featureHouse-lbl">تعداد طبقه</span>
                                    </Grid> 
                                    
                                </Grid>
                                   
                            </Grid> {/* leftSide 1| [house-feature]  --> end Grid.conatiner  */}
                            </Paper>

                       <Paper style={{width:700,marginTop:10}}>
                        <Grid container sm={12}> {/* leftSide 2| [house-emkanat]  -->  Grid.conatiner  */}

                           <Grid item sm={12}>
                               <div>
                                   <center>
                                       <h5>امکانات ملک</h5>
                                   </center>
                                   <Divider/>
                               </div>
                               
                           </Grid>

                           <Grid item sm={12}>
                               <Grid container sm={12} direction=" "> 

                               <Grid item sm={12}>
                                  <Button color="default" variant="outlined" className="emkanatHouse-plusIcon">plus +</Button> 
                                  <TextField
                                       margin="dense"
                                       variant="outlined"
                                       className="emkanatHouse-field"
                                   />  
                                    <span className="emkanatHouse-lbl"> امکانات</span> 
                               </Grid>
                                 
                                 <Grid item>
                                     <ul>
                                         <li> item 1</li>
                                     </ul>
                                 </Grid>
                                        
                               </Grid> {/* end container*/}
                              
                           </Grid>


                        </Grid> {/* leftSide 2| [house-emkanat]  --> end Grid.conatiner  */}
                        </Paper>


                       <Paper style={{width:680,marginTop:10,marginLeft:10}}>
                        <Grid container sm={12}>  {/* leftSide 3| [contact-way]  -->   Grid.conatiner  */}

                            <Grid item sm={12}>
                                <span> راه های ارتباطی</span>
                            </Grid>

                            <Grid item sm={12}>
                                <Divider/>
                            </Grid>

                            <Grid item sm={12}>
                                <Grid container sm={12}>  

                                    <Grid item>
                                        <span> * </span>  {/*icon */}
                                    </Grid>

                                    <Grid item>
                                        <span>همراه</span>
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChanges('mobile')}
                                            />

                                    </Grid>

                                </Grid> {/*  end container */}
                            </Grid>

                            <Grid item sm={12}>
                                <Grid container sm={12}>  

                                    <Grid item>
                                        <span> * </span>  {/*icon */}
                                    </Grid>

                                    <Grid item>
                                        <span>ایمیل</span>
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChanges('email')}
                                            />

                                    </Grid>

                                </Grid> {/*  end container */}
                            </Grid>


                            <Grid item sm={12}>
                                <Grid container sm={12}>  

                                    <Grid item>
                                        <span> * </span>  {/*icon */}
                                    </Grid>

                                    <Grid item>
                                        <span>تلگرام</span>
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChanges('telegram')}
                                            />

                                    </Grid>

                                </Grid> {/*  end container */}
                            </Grid>


                            <Grid item sm={12}>
                                <Grid container sm={12}>  

                                    <Grid item>
                                        <span> * </span>  {/*icon */}
                                    </Grid>

                                    <Grid item>
                                        <span>واتساپ</span>
                                    </Grid>

                                    <Grid item>
                                        <TextField
                                            margin="normal"
                                            variant="outlined"
                                            onChange={this.handleChanges('whatsapp')}
                                            />

                                    </Grid>

                                </Grid> {/*  end container */}
                            </Grid>

                        </Grid> {/* leftSide 3| [contact-way]  --> end  Grid.conatiner  */}
                        </Paper>



                            
                        </Grid>    {/*eftSide |   --> end Grid.conatiner  */}
                                
                        
                        

                   
                  <Grid item sm={7} lg={7} md={7}>  {/*RgihtSide |   --> end Grid.conatiner  */}

                        <Paper >
                            <Grid container sm={12}> 

                                <Grid item sm={12} >
                                    <center>
                                    <h4>مشخصات پایه ای </h4>
                                    </center>

                                </Grid>

                                <Grid item sm={12} >
                                    <Divider/>
                                </Grid>

                                <Grid item sm={12}>                                   
                                 <div className="titleAds">
                                  <TextField
                                    id="standard-name" 
                                    margin="dense"
                                    variant="outlined"
                                    className="titleAds-field"
                                    onChange={this.handleChanges('title')}
                                    
                                     />

                                    <span className="titleAds-title">عنوان آگهی </span>
                                    </div>
                                </Grid>   


                                <Grid item sm={12}>
                               
                               <div className="adsCategory">
                                <Select  native 
                                      autoWidth='true'
                                      style={{width:500}}                                       
                                      className="adsType-field"
                                      onChange={this.handleChanges('category')}
                                  >
                                      <option value="" />
                                      <option value='villa'> ویلایی</option>
                                      <option value='apartment'>آپارتمان</option>                                       
                                      <option value='shop'>مغازه</option>                                       
                                      <option value='flat'>زمین</option>                                       
                                  </Select>  

                                       <span className="adsType-title">دسته بندی آگهی </span>
                                       </div>

                              </Grid>

                                <Grid item sm={12}>
                               
                                 <div className="adsType">
                                  <Select  native 
                                        autoWidth='true'
                                        style={{width:500}}                                       
                                        className="adsType-field"
                                        onChange={this.handleChanges('type')}
                                    >
                                        <option value="" />
                                        <option value='rent'>رهن و اجاره</option>
                                        <option value='sell'>فروش</option>                                       
                                    </Select>  

                                         <span className="adsType-title">نوع آگهی </span>
                                         </div>

                                </Grid>

                                <Grid item sm={12}>
                                    <div className="typeAds-content">  محتوای نوع آگهی  </div>
                                </Grid>

                                <Grid item sm={12}>
                                    <span className="adsContent-title">متن آگهی</span>
                                </Grid>

                                <Grid item sm={12}>

                                <TextField
                                    id="standard-name" 
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    className="adsContent-content"
                                    onChange={this.handleChanges('content')}
                                     />
                                </Grid>
                            </Grid>{/* 1-> end Grid.container  */}
                            </Paper>
 

                            <Paper style={{marginTop:10,height:250}}>
                            <Grid container sm={12}> {/* 2->  Grid.container  */}
                           

                                <Grid item sm={12}>
                                    <center>
                                   <h4>محل آگهی</h4>
                                   <Divider/>
                                   </center>
                                </Grid>

                                <Grid item sm={12}>
                                   <Grid container sm={12}> {/* 2|1 ->  Grid.container  */}

                                   <Grid item sm={5}>
                                          <Select
                                            native                                         
                                            className="city-field"
                                            onChange={this.handleChanges('city')}  
                                        
                                            >
                                            <option value="" />
                                            <option value="mashhad">مشهد</option>
                                            <option value="bojnourd"> بجنورد   </option>
                                            <option value="shiraz">شیراز</option>
                                           </Select>
                                       </Grid>

                                       <Grid item  sm={1}> 
                                           <span className="city-title"> شهرستان</span>
                                       </Grid>
                                      
                                       <Grid item  sm={4}>
                                         <Select
                                            native
                                            className="province-field"  
                                            onChange={this.handleChanges('province')}                                
                                           
                                            >
                                            <option value="" />
                                            <option value='nkh'>خراسان شمالی</option>
                                            <option value='kh-razavi'>خراسان رضوی </option>
                                            <option value='tehran'>تهران</option>
                                            </Select>
                                       </Grid>

                                       <Grid item>
                                           <span className="province-title"> استان</span>
                                       </Grid>  

                                   </Grid>{/* 2|1 ->  end Grid.container  */}
                                </Grid> 

                                <Grid item={12}>
                                       <span className="address-title">آدرس کامل</span>
                                   </Grid>
                                   <Grid item={12}>
                                    <TextField
                                        id="address-name" 
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        className="address-field"
                                        onChange={this.handleChanges('address')}                                        
                                        />
                                   </Grid>
                              
                            </Grid>{/* 2|[address-place] --> end Grid.container  */}
                            </Paper>

                            <Paper style={{marginTop:15}}>
                            <Grid container sm={12}>  {/* 3|upload-img --> Grid.container  */}

                                <Grid item sm={12}>
                                    <h4>تصاویر ملک</h4>
                                </Grid>

                                <Grid item sm={12}>
                                    <span>جای آپلود فایل</span>
                                </Grid>

                                
                        </Grid>
                        </Paper>


                    </Grid>
                    </Grid> {/*  main grid  */}

                    </div>  
                    
                   
                    <input type="submit" value="send" />
                </form>
             

            </section>

        )
    }
}
export default SendAds;