import React, { Component } from 'react';
import axios from 'axios';
import Keys from '../../config/keys';
import { Paper, Grid, Divider ,TextField,Select,Fab,Switch,Button} from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';
import AdminLayout from  '../layouts/adminLayout';
import "../../css/sendAds.css";
import Dropzone from 'react-dropzone'
 

class EditAds extends Component{

    state={      
        title:null,
        category:null,
        type:null,
        province:null,
        city:null,
        address:null,
        content:null,
        images:[],
        date:'1398/10/5',
        time:'13:25',         
        mobile:null,
        telegram:null,
        whatsapp:null,
        email:null,
        emkanat:[],
        hoomeCity:false,
        metrazh:null,
        numTanaghe:null,
        nearMetro:false,
        rentPrice:null,
        depositPrice:null,
        sellPrice:null,
        sell_field_selected:'none',
        rent_field_selected:'none',
        userID:localStorage.getItem('userID'),
        provinceData:[],
        citiesData:[]
    }
    componentWillMount(){
        
         //--- check if user neither do login or not
         let userID=localStorage.getItem('userID');
         let token=localStorage.getItem('token');
         if(!userID || !token){
             this.props.history.push('/signin')
         }
         if(token || userID){
             this.setState({
                 userID:localStorage.getItem('userID'),
                 token:localStorage.getItem('token'),
               
             })

         }
         //--- 



    }
    componentDidMount(){

  


        let adsID=this.props.match.params.id;
        let config={
            headers:{
                token:localStorage.getItem('token')
            }
        }
         //get province 
         axios.get(Keys.backendUrl+'/api/users/getProvince') 
         .then((data)=>{
             if(data){
                 console.log('@data',data.data)
                 this.setState({
                     provinceData:data.data
                 })
             }
         })
         //----

         axios.get(Keys.backendUrl+'/api/users/getAd/'+adsID,config)
            .then((data)=>{
                if(data.data){
                    this.setState({
                        title:data.data.title,
                        category:data.data.category,
                        type:data.data.Type,
                        province:data.data.province,
                        city:data.data.city,
                        address:data.data.address,
                        content:data.data.content,
                        images:data.data.images,
                        date:'1398/10/5',
                        time:'13:25',         
                        mobile:data.data.contactWay.mobile,
                        telegram:data.data.contactWay.telegram,
                        whatsapp:data.data.contactWay.whatsapp,
                        email:data.data.contactWay.email,
                       
                        hoomeCity:data.data.features.hoomeCity,
                        metrazh:data.data.features.metrazh,
                        numTanaghe:data.data.features.numTanaghe,
                        nearMetro:data.data.features.nearMetro,
                        rentPrice:data.data.rent,
                        depositPrice:data.data.deposit,
                        sellPrice:data.data.sale,
                        sell_field_selected:'none',
                        rent_field_selected:'none'

                    })
                    console.log('contact=',data.data.contactWay)
                }
            })

       

        
    }
    handleProvinceChange=(name)=>event=>{
        //  get cities by province selected 
        
        this.state.provinceData.map((item)=>{
            if(item.provinceName === event.target.value){
                this.setState({
                    citiesData:item.cities,
                    province:item.provinceName

                })
              
            }
        })
         

    }
    handleCityChange=(city)=>event=>{
        this.setState({
            city:event.target.value
        })
         

    }

    handleChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.value
            
        })  

        if(event.target.value == 'rent')      {
            this.setState({
                 rent_field_selected:'block',
                 sell_field_selected:'none'

            })
        }

        if(event.target.value == 'sell')      {
            this.setState({
                 sell_field_selected:'block',
                 rent_field_selected:'none',
            })
        }
       

        console.log('name=',event.target.value)
    }
    handleSwitchChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.checked
        })
    }


     
    
    handleSubmit=(e)=>{
        e.preventDefault();
   


     console.log('adsID=',this.props.match.params.id)
     let config={
        headers:{
            token:localStorage.getItem('token')
        }
    }
       axios.post(Keys.backendUrl+'/api/users/modify/'+this.props.match.params.id,this.state,config)
        .then((data)=>{
            console.log('submit accured',data)
            if(data.data){
                // console.log(data.data)   
                this.props.history.push("/user/manageAds");
            }
            
            
        }).catch((err)=>{
            if(err){
                console.log(err)
            }
        })

        


        

    }
    
    componentWillMount(){
        //--- check if user neither do login or not
        let userID=localStorage.getItem('userID');
        let token=localStorage.getItem('token');
        if(!userID || !token){
            this.props.history.push('/signin')
        }
        //--- 

  }
    render(){
        var provinceList= this.state.provinceData.map((item)=>(
            <option value={item.provinceName}>{item.provinceName}</option>
        ))
         var cities= this.state.citiesData.map((city)=>(
            <option value={city.name}>{city.name}</option>
         ))
        return(

            <section className="sendAds">
<AdminLayout></AdminLayout>
                <div className="pageTitle">
                    <Paper>
                        <center>
                        <h2>ویرایش آگهی </h2>
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
                                           checked={this.state.hoomeCity}
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
                                            checked={this.state.nearMetro}                                           
                                            
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
                                             value={this.state.metrazh}                                
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
                                            onChange={this.handleChanges('numTanaghe')}
                                            value={this.state.numTanaghe}
                                                                                       
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
                                            value={this.state.mobile}
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
                                            value={this.state.email}
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
                                            value={this.state.telegram}
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
                                            value={this.state.whatsapp}
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
                                   value={this.state.title}
                                    
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
                                      value={this.state.category}
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
                                        value={this.state.type}
                                        
                                    >
                                        <option value="" />
                                        <option value='rent'>رهن و اجاره</option>
                                        <option value='sell'>فروش</option>                                       
                                    </Select>  

                                         <span className="adsType-title">نوع آگهی </span>
                                         </div>

                                </Grid>

                                <Grid item sm={12}>
                                    <div className="typeAds-content"> 
                                       <section className="sell" style={{display:`${this.state.sell_field_selected}`}}>
                                           <input type="text" placeholder="sell-price" onChange={this.handleChanges('sellPrice')}/>                                           
                                        </section> 

                                       <section className="rent" style={{display:`${this.state.rent_field_selected}`}}>
                                           <input type="text" placeholder="رهن" onChange={this.handleChanges('depositPrice')}/>                                           
                                           <input type="text" placeholder="اجاره" onChange={this.handleChanges('rentPrice')}/>                                           
                                        </section>                                     


                                     
                                     </div>
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
                                    value={this.state.content}
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
                                            onChange={this.handleCityChange('city')}  
                                            value={this.state.city}
                                           
                                        
                                            >
                                            <option value="" />
                                            {cities}
                                           </Select>
                                       </Grid>

                                       <Grid item  sm={1}> 
                                           <span className="city-title"> شهرستان</span>
                                       </Grid>
                                      
                                       <Grid item  sm={4}>
                                         <Select
                                            native
                                            className="province-field"  
                                            onChange={this.handleProvinceChange('province')}  
                                            value={this.state.province} 
                                                                       
                                           
                                            >
                                            <option value="" />
                                          {provinceList}
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
                                        value={this.state.address}                                       
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
                                    <Dropzone onDrop={this.onDrop} >
                                        {({getRootProps, getInputProps}) => (
                                        <section className="container">
                                            <div {...getRootProps({className: 'dropzone'})}>
                                            <input {...getInputProps()}  name="avatar"/>
                                            <p>عکس های تان را اینجا درگ دراپ  کرده و یا کلیک کنید</p>
                                            </div>
                                            {/* <aside>
                                            <h4>Files</h4>
                                            <ul>{files}</ul>
                                            </aside> */}
                                        </section>
                                        )}
                                    </Dropzone>
                                </Grid>

                                <Grid item sm={12}>
                                    {/* <div className="imagesPreview"> 
                                        {this.state.images? this.state.images.map((image)=>
                                        <img className="imagePreview" src={URL.createObjectURL(image)}/>):null}
                                    </div>  */}
                                   
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
export default EditAds;