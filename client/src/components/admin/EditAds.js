import React, { Component } from 'react'
import axios from 'axios';
import Keys from '../../config/keys';
import { Paper, Grid, Divider ,TextField,Select,Fab} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import AdminLayout from  '../layouts/adminLayout'
export default class extends Component{

    state={
        title:null
    }


   
    componentDidMount(){
        let adsID=this.props.match.params.id;
            axios.get(Keys.backendUrl+'/api/users/getAd/'+adsID)
            .then((data)=>{
                if(data){
                    // let data=this.state.adsData[data]=data.data;
                    this.setState({
                       title:data.data.title
                    })
    
                }
            }) 
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let formData={
            title:this.adsTitle.value,
            category:this.adsCategory.value,
            type:this.adsType.value,
            userID:'user1',
             province:this.adsProvince.value,
             city:this.adsCity.value,
             address:this.adsAddress.value,
             content:this.adsContent.value,
             images:'image1.jpg',
             date:1398,
             time:'13:25',
             contactWay:{
                 mobile:this.adsMobile.value,
                 telegram:this.adsTelegram.value,
                 whatsapp:this.adsWhatsapp.value,
                 email:this.adsEmail.value
             },
             emkanat:this.adsEmkanat.value,
             features:{
                 hoomeCity:true,
                 metrazh:320,
                 numTabaghe:0,
                 nearMetro:true
             },
             deposit:this.adsDeposit.value,
             rent:this.adsRent.value,
             sale:this.adsSale.value


        };
        let adsID=this.props.match.params.id;
        axios.post(Keys.backendUrl+'/api/users/modify/'+adsID,formData)
            .then((data)=>{
                if(data.data){
                    console.log('edited',data.data)
                    
                }
            })

    }

    render(){
        return(
            <section className="EditAds">


<AdminLayout></AdminLayout>

                <h2>ویرایش آگهی </h2>
               <Divider/>
                    <Grid container  sm={12} lg={12} spacing={2} >   {/* main --> Grid.conatiner  */}   

                        
                        <Grid  container sm={5} >  {/* leftSide |   --> Grid.conatiner  */}
                          
                           <Paper style={{width:700}}>
                            <Grid container sm={12} >{/* leftSide 1| [house-feature]  --> Grid.conatiner  */}                                             
                                
                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={10}>
                                        <div>
                                            جا باری سوئیچ
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span>حومه  شهر</span>
                                    </Grid> 
                                </Grid>

                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={10}>
                                        <div>
                                            جا باری سوئیچ
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span>حومه  شهر</span>
                                    </Grid> 
                                </Grid>

                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={10}>
                                        <div>
                                            جا باری سوئیچ
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span>حومه  شهر</span>
                                    </Grid> 
                                </Grid>


                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={10}>
                                        <div>
                                            جا باری سوئیچ
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span>حومه  شهر</span>
                                    </Grid> 
                                </Grid>

                                <Grid container sm={12}> {/* leftSide 1|2 [house-feature]  --> Grid.conatiner  */}
                                    <Grid item sm={10}>
                                        <div>
                                            جا باری سوئیچ
                                        </div>
                                    </Grid>

                                    <Grid item sm={2} > 
                                        <span>حومه  شهر</span>
                                    </Grid> 
                                </Grid>
                                   
                            </Grid> {/* leftSide 1| [house-feature]  --> end Grid.conatiner  */}
                            </Paper>

                       <Paper style={{width:700,marginTop:10}}>
                        <Grid container sm={12}> {/* leftSide 2| [house-emkanat]  -->  Grid.conatiner  */}

                           <Grid item sm={12}>
                               <span>امکانات ملک</span>
                           </Grid>

                           <Grid item sm={12}>
                               <Grid container sm={12}> 
                                   <Grid item>
                                       <span> امکانات</span>                                       
                                   </Grid>

                                   <Grid item>
                                   <TextField
                                        margin="normal"
                                        variant="outlined"
                                    />                                    
                                   </Grid>

                                   <Grid item>
                                       <span>plus +</span>
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
                                            />

                                    </Grid>

                                </Grid> {/*  end container */}
                            </Grid>

                        </Grid> {/* leftSide 3| [contact-way]  --> end  Grid.conatiner  */}
                        </Paper>



                            
                        </Grid>   {/* leftSide |   --> end Grid.conatiner  */}
                                
                        
                        

                   
                  <Grid item sm={7} lg={7} md={7}> 

                        <Paper >
                            <Grid container sm={12}> 

                                <Grid item sm={12} >
                                    <h1>مشخصات پایه ای </h1>

                                </Grid>

                                <Grid item sm={12} >
                                    <Divider/>
                                </Grid>

                                <Grid item sm={12}>                                   
                                 
                                  <TextField
                                    id="standard-name" 
                                    margin="normal"
                                    variant="outlined"
                                     />

                                    <span>عنوان آگهی </span>
                                </Grid>                          

                                <Grid item sm={12}>
                                 
                                    <Select
                                        native 
                                          autoWidth='true'
                                          style={{width:500}}
                                        inputProps={{
                                            name: 'age',
                                            id: 'age-native-simple',
                                        }}
                                        >
                                        <option value="" />
                                        <option value={10}>Ten dk;kf dkflk</option>
                                        <option value={20}>Twenty</option>
                                        <option value={30}>Thirty</option>
                                        </Select>  
                                         <span>نوع آگهی </span>

                                </Grid>

                                <Grid item sm={12}>
                                    <span>  محتوای نوع آگهی  </span>
                                </Grid>

                                <Grid item sm={12}>
                                    <span>متن آگهی</span>
                                </Grid>

                                <Grid item sm={12}>
                                <TextField
                                    id="standard-name" 
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                     />
                                </Grid>
                            </Grid>{/* 1-> end Grid.container  */}
                            </Paper>
 

                            <Paper style={{marginTop:10}}>
                            <Grid container sm={12}> {/* 2->  Grid.container  */}
                           

                                <Grid item sm={12}>
                                   <h3>محل آگهی</h3>
                                </Grid>

                                <Grid item sm={12}>
                                   <Grid container sm={12}> {/* 2|1 ->  Grid.container  */}

                                   <Grid item sm={5}>
                                          <Select
                                            native
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-simple',
                                            }}
                                            style={{width:280}}
                                            >
                                            <option value="" />
                                            <option value={10}>مشهد</option>
                                            <option value={20}> بجنورد   </option>
                                            <option value={30}>شیراز</option>
                                           </Select>
                                       </Grid>

                                       <Grid item  sm={1}> 
                                           <span> شهرستان</span>
                                       </Grid>
                                      
                                       <Grid item  sm={5}>
                                         <Select
                                            native
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-simple',
                                            }}
                                            style={{width:280}}
                                            >
                                            <option value="" />
                                            <option value={10}>خراسان شمالی</option>
                                            <option value={20}>خراسان رضوی </option>
                                            <option value={30}>تهران</option>
                                            </Select>
                                       </Grid>

                                       <Grid item  sm={1}>
                                           <span> استان</span>
                                       </Grid>  

                                   </Grid>{/* 2|1 ->  end Grid.container  */}
                                </Grid> 

                                <Grid item={12}>
                                       <span>آدرس کامل</span>
                                   </Grid>
                                   <Grid item={12}>
                                    <TextField
                                        id="address-name" 
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        style={{width:500}}
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

                    <Fab
                        variant="extended"
                        size="medium"
                        color="primary"
                        aria-label="add"
                         
                    >
                       <h5>ویرایش آگهی</h5>  
                      <NavigationIcon />
                             
                </Fab>
                   












               {/* <form onSubmit={this.handleSubmit}>
        <h1>ارسال آگهی </h1>
        <hr/>
        <h4>مشخصات پایه ای</h4>
        <div className="form-group">
       <span> عنوان:</span>
         <input className="form-control" type="text" defaultValue={this.state.title}  name="adsTitle" id="adsTitle" ref={(input)=>{this.adsTitle=input}}/> <br/>
        </div>
        نوع آگهی :
        <select ref={(val)=>this.adsType=val} >
            <option value='rent'> رهن و اجاره </option> 
            <option value='sale'> فروش </option> 
        </select>
        <br/> <br/>
        دسته بندی آگهی:
        <select ref={(val)=>this.adsCategory=val} >
            <option value='apartement'>آپارتمان</option>
            <option value='home'>خانه ویلایی</option>
            <option value='zamin'>ژمین</option>
            <option value='shop'>فروشگاه</option>
        </select>   
        <br/> <br/>
        رهن:<input type="text"  ref={(val)=>this.adsDeposit=val} /> <br/>
        اجاره: <input type='text' ref={(val)=>this.adsRent=val}  /> <br/>
        فروش :<input type='text' ref={(val)=>this.adsSale=val}  /> <br/>
        <br/> <br/>
        متن آگهی :
        <textarea rows='10' cols='50' name='adsContent' ref={(val)=>this.adsContent=val}></textarea>
        <hr/>
        <h4>محل آگهی</h4>
        استان:
        <select name="province" id="" ref={(val)=>this.adsProvince=val}>
            <option value='-1'>انتخاب کنید</option>
            <option value="tehran">تهران</option>
        </select>
        <br/> <br/>
        شهر:
        <select name="city" id="" ref={(val)=>this.adsCity=val} >
        <option value='-1'>انتخاب کنید</option>
            <option value="city">city</option>
        </select>
<br/>    <br/>
        آدرس:
        <textarea name="address" id="" cols="30" rows="10" ref={(val)=>this.adsAddress=val}></textarea>
        <br/>
        <hr/>
        <h4>تصاویر آگهی</h4>
        عکس:  <input type="file" ref={(val)=>this.adsImages=val}/>
        <br/>
        <hr/>
        <h4>  ویژگی های ملک</h4>
        <div>
            <span> حومه شهر:هست  </span> <br/> <br/>
            <span>  متراژ:10000  </span> <br/> <br/>
            <span>   نزدیک مترو:هست </span> <br/> <br/>
            <span>  تعداد طبقه:3  </span> <br/> <br/>
        </div>
    <hr/>
    <h4>امکانات های ملک</h4>
    امکانات:  <input type="text" ref={(val)=>this.adsEmkanat=val}/>
    <ul>
        <li>  فلان چیز</li>
    </ul> 
    <br/>
    <hr/>

    <h4> راه های ارتباطی </h4>
    همراه: <input type="text" ref={(val)=>this.adsMobile=val}/>
    <br/>
    ایمیل: <input type="text" ref={(val)=>this.adsEmail=val}/>
    <br/>
    تلگرام: <input type="text" ref={(val)=>this.adsTelegram=val}/>
    <br/>
    whatsapp: <input type="text" ref={(val)=>this.adsWhatsapp=val}/>
    <br/>

        <button type='submit' className='btn btn-primary'>  ارسال  </button>
        </form> */}
            </section>
        )
    }
}