import React ,{Component} from 'react';
import {Grid, TextField, Select, Paper,Divider, Button
        
        } from "@material-ui/core"
import "../css/searchAds.css"
import AdminLayout from './layouts/adminLayout'
import axios from 'axios'
import keya from '../config/keys'


export default class extends Component{

    // state2={
    //     profile:{
    //         name:"saeid",
    //         eamil:"saeid@email"
    //     }
    // }
    state={
        minRent:null,
        maxRent:null,
        minDeposit:null,
        maxDeposit:null,
        minSellPrice:null,
        maxSellPrice:null,
        city:null,
        province:null,
        Type:null,
        category:null,
        textSearch:null,

        sellStatus:'none',
        rentStatus:'none',
        
        adsData:[],
        adsTitle:null,
        adsCity:null,
        adsProvince:null,
        adsDate:null,
        adsSellPrice:null,
        adsDepositPrice:null,
        adsRentPrice:null,
        adsCategory:null
       

    }

    handleChanges=(name)=>event=>{
        this.setState({
            [name]:event.target.value
            

        })
        if(event.target.value === 'sell'){
            this.setState({
                sellStatus:'block',
                rentStatus:'none',
            })
        }
        if(event.target.value === 'rent'){
            this.setState({
                sellStatus:'none',
                rentStatus:'block',
            })
        }
        
    }

    componentDidMount(){
      
        
    }
    handleSubmit=(e)=>{
        e.preventDefault();
    console.log('form submitted')
    console.log(this.state)


        axios.post(keya.backendUrl+'/api/users/search',this.state)
        .then((data)=>{
            if(data){
                console.log(data.data)
                this.setState({
                    adsData:data.data
                })
            }

        })



    }
    
    render(){
        let data=this.state.adsData ? this.state.adsData.map((item)=>(
            <Grid item sm={4}>
            <Paper style={{borderRadius:10}}>
            <section className="content-segment">

                <div>
                    <h4>{item.title}  </h4>
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
                                <span> {item.province} / {item.city}</span>                                                
                            </Grid>                                            
                        </Grid>
                         
                    </Grid>

                    <Grid item sm={12}>
                        <section className="rentPrice" style={{display:`${this.state.rentStatus}`}}>
                        <Button variant="outlined" color="primary">رهن:  {item.depositPrice} </Button>
                        <Button variant="outlined" color="primary">اجاره:  {item.rentPrice} </Button>
                        </section>
                        <section className="sellPrice" style={{display:`${this.state.sellStatus}`}}>
                        <Button variant="outlined" color="primary">فروش: {item.sellPrice} </Button>
                        </section>
                    </Grid>

                    <Grid item sm={12}>
                        <Grid container sm={12}>
                            <Grid item sm={7}>
                                <Button variant="outlined" color="secondary">مشاهده</Button>                                                
                            </Grid>
                            <Grid item sm={5}>
                                <span style={{marginLeft:60}}>{item.category}</span>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                
            </section>
            </Paper>
        </Grid>
        )) : null
        return(
            <section className="searchAds" style={{marginTop:100}}>
                <AdminLayout></AdminLayout>
                
                <section className="searchArea">
                    <form onSubmit={this.handleSubmit}>
                <Paper>
                    <ul>
                        <li>
                            <span>جستجو</span>
                           
                            <TextField variant="outlined" margin="dense" className="search-field"
                                    />
                            
                            
                            <Select native   className="typeAds"
                               onChange={this.handleChanges('Type')} >
                                        <option value="null" >نوع آگهی</option>
                                        <option value={'rent'}>رهن و اجاره</option>
                                        <option value={'sell'}>فروش </option>

                            </Select>

                            <Select native  className="adCategory" 
                                  onChange={this.handleChanges('category')}  > 
                                        <option value="null">دسته بندی  </option>
                                         <Divider/>
                                        <option value={'apartment'}>آپارتمان</option>
                                        <option value={'villa'}>ویلا</option>
                                        <option value={'shop'}>مغازه</option>
                                        <option value={'flat'}>زمین</option>                                   

                             </Select>

                            
                        </li>
                        <li>
                            <Grid container sm={12} spacing={3}>
                                <Grid item>
                        <section className="search-segment" >
                            <section className="rentSection" style={{display:`${this.state.rentStatus}`}}>
                                 <ul>
                                     <li><center> <span className="title-field"> رهن</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>حداقل</span>
                                         <TextField margin="dense"  variant="outlined" className="min-field"
                                           onChange={this.handleChanges('minDeposit')} />
                                     </li>
                                     <li> 
                                     <span>حداکثر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"
                                            onChange={this.handleChanges('maxDeposit')} />
                                     </li>
                                 </ul>
                            </section>
                        </section>
                                </Grid>

                                <Grid item>
                                <section className="search-segment">
                                    <section className="rentSection" style={{display:`${this.state.rentStatus}`}}>
                                 <ul>
                                     <li> <center><span className="title-field"> اجاره</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>حداقل</span>
                                         <TextField margin="dense"  variant="outlined"  className="min-field"
                                             onChange={this.handleChanges('minRent')} />
                                     </li>
                                     <li> 
                                     <span>حداکثر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"
                                           onChange={this.handleChanges('maxRent')}/>
                                     </li>
                                 </ul>
                                 </section>
                             </section>
                                </Grid>
                                <Grid item>
                                <section className="search-segment">
                                    <section className="sellSection" style={{display:`${this.state.sellStatus}`}}>
                                 <ul>
                                     <li> <center><span className="title-field">فروش</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>حداقل</span>
                                         <TextField margin="dense"  variant="outlined"  className="min-field"
                                             onChange={this.handleChanges('minSellPrice')} />
                                     </li>
                                     <li> 
                                     <span>حداکثر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"
                                           onChange={this.handleChanges('maxSellPrice')}/>
                                     </li>
                                 </ul>
                                 </section>
                             </section>
                                </Grid>
                                <Grid item>
                                <section className="search-segment">
                                 <ul>
                                     <li><center> <span className="title-field"> مکان</span></center></li>
                                     <li><Divider /></li>
                                     <li> 
                                         <span>استان</span>
                                         <TextField margin="dense"  variant="outlined" className="min-field"
                                            onChange={this.handleChanges('province')}/>
                                     </li>
                                     <li> 
                                     <span> شهر</span>
                                         <TextField margin="dense"  variant="outlined" className="max-field"
                                         onChange={this.handleChanges('city')}/>
                                     </li>
                                 </ul>
                             </section>

                                </Grid>                              

                            </Grid>
                           
                        </li>  
                                                
                    </ul>
                 <div className="search-btn-holder">
                 <input type="submit"  value="جستجو" /> 
                 </div>                 
                    </Paper>
                    </form>
                </section>

                <section className="filter-area">
                    <span>filter area</span>
                </section>
                
                <section className="content-area">

                    <Grid container sm={12} spacing={2}>
                        {data}
                       
                    </Grid>
                    
                </section>

           
            </section>
        )
    }
}