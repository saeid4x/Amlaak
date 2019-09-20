import React, { Component } from 'react'
import {Grid, TextField, Select, Paper,Divider, Button} from "@material-ui/core"
import "../css/searchAds.css";
import "../css/FavoriteAds.css"
import AdminLayout from './layouts/adminLayout'
import Axios from 'axios';
import keys from '../config/keys';
export default class extends Component{

    state={
        adsData:[],
        adsID:[],
        favoriteData: []

    }

    componentDidMount(){
        let userID=123;
        Axios.get(keys.backendUrl+'/api/users/getFavorites/'+userID)
            .then((data)=>{
                if(data.data){
                    this.setState({
                        adsData:data.data
                    })}
            }).then((data2)=>{
                    
                console.log((this.state.adsData).length)
                let adsID=[]
                this.state.adsData.map((item)=>{                   
                    adsID.push(item.adsID)
                })
                this.setState({
                    adsID
                })                

            }).then(()=>{
                // console.log('808080=',this.state.adsID);
                var myData=[]
                this.state.adsID.map((item)=>{
                    // console.log(item);
                   
                    // fetch all data
                    Axios.get(keys.backendUrl+'/api/users/getAd/'+item)
                        .then((data)=>{
                            if(data){
                                
                                myData.push(data.data)
                                // favoriteData
                            }
                        }) 
                })
              
                this.setState({
                    favoriteData:myData
                })

            }) 


    }

  

    render(){    
        console.log('$$100=',this.state.adsData)
        console.log('$$101=',this.state.favoriteData)
    //  let data=  this.state.favoriteData ?  this.state.favoriteData.map((item)=>(
         
    //    )) :null
        // console.log('9091 [render]=',this.state.adsData)
        // console.log('9092 [render]=',this.state.favoriteData)
        // let data=this.state.favoriteData ? this.state.favoriteData.map((item)=>(
        //     <Grid item sm={4}>
        //     <Paper style={{borderRadius:10}}>
        //     <section className="content-segment">
    
        //         <div>
        //             <h4>{item.title}  </h4>
        //             <hr/>                                    
        //         </div>
    
        //         <div>
        //             <div className="imgLabel">
        //                 <span></span>
        //             </div>
        //             <img src="/img/1.jpg" alt=""/>
        //         </div>
    
        //         <Grid container sm={12}>
        //             <Grid item sm={12}>
        //                 <Grid container sm={12}>
        //                     <Grid item sm={6}>
        //                             <span style={{marginLeft:10}}> 1398-10-2</span>
        //                     </Grid>
        //                     <Grid item sm={6}>
        //                         <span>خراسان شمالی / بجنورد </span>                                                
        //                     </Grid>                                            
        //                 </Grid>
                         
        //             </Grid>
    
        //             <Grid item sm={12}>
        //                 <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
        //                 <Button variant="outlined" color="primary">رهن: 100،000،000</Button>
        //             </Grid>
    
        //             <Grid item sm={12}>
        //                 <Grid container sm={12}>
        //                     <Grid item sm={7}>
        //                         <Button variant="outlined" color="secondary">مشاهده</Button>                                                
        //                     </Grid>
        //                     <Grid item sm={5}>
        //                         <span style={{marginLeft:60}}>آپارتمان</span>
        //                     </Grid>
        //                 </Grid>
    
        //             </Grid>
        //         </Grid>
                
        //     </section>
        //     </Paper>
        // </Grid>


        // )):null
         console.log('20000',(this.state.favoriteData).length)
        return(
            <section className="favoriteAds">
                <AdminLayout></AdminLayout>
                 <section className="content-area" style={{marginTop:100}}>

<Grid container sm={12} spacing={2}>
    {/* {data} */}

{/* <Grid item sm={4}>
        <Paper style={{borderRadius:10}}>
        <section className="content-segment">

            <div>
                <h4> عنوان آگهی من  </h4>
                <hr/>                                    
            </div>

            <div>
                <div className="imgLabel">
                    <span></span>
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
 */}


    {/* <Grid item sm={4}>
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
    </Grid> */}

</Grid>

</section>


            </section>
        )
    }
}