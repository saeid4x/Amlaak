import React, { Component } from 'react'
import {Grid, TextField, Select, Paper,Divider, Button} from "@material-ui/core"
import "../css/searchAds.css";
import "../css/FavoriteAds.css"
import AdminLayout from './layouts/adminLayout'
export default class extends Component{


    render(){
        return(
            <section className="favoriteAds">
                <AdminLayout></AdminLayout>
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