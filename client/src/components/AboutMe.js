import React , {Component} from 'react';
import "../css/Aboutme.css"
import {Grid, Paper ,Divider
            
                } from "@material-ui/core"
import AdminLayout from './layouts/adminLayout';

export default class extends Component{

    render(){
        return(
            <section className="Aboutme">
                <AdminLayout/>
                <section className="aboutme-content">
                    <Paper>
                <Grid container sm={12}>

                    <Grid item sm={12}>
                       
                         <Grid container sm={12}  direction="row-reverse">
                             <Grid item>
                                <img src="/img/1.jpg" style={{width:100,height:100}} alt="" className="about-image"/>
                             </Grid>
                             <Grid item>
                                 <div className="about-container">
                                     <p className="about-title"> سعید ایمانی </p>
                                     <p className="about-subtitle">برنامه نویس فول استک</p>
                                 </div>

                             </Grid>

                         </Grid>
                    </Grid>

                    <Grid item sm={12}>
                        <Divider/>
                        <p className="about-text">  
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                                روزنامه و مجله در ستون و سطرآنچنان
                                که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها 
                                شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این 
                                صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز 
                                شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم 
                                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه 
                                روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                                بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                                و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی 
                                و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود د
                                ر ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
                                اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. 
                        </p>
                        <Divider/>
                    </Grid>

                    <Grid item sm={12}>
                        <div>
                            <center>
                              <p>ارتباط با من</p>
                            </center>
                        </div>
                        <Grid container sm={12} spacing={2}>
                            <Grid item sm={3}>
                                <section className="about-contact-element">
                                    <ul>
                                        <li>
                                            <img src="/img/1.jpg" className="contact-element-img"/>
                                        </li>
                                        <li>
                                            <p className="txt1">تلگرام</p>
                                        </li>
                                        <li> 
                                            <p className="txt2">@saeid4x</p>
                                        </li>
                                    </ul>

                                </section>
                            </Grid>

                            <Grid item sm={3} >
                            <section className="about-contact-element">
                                    <ul>
                                        <li>
                                            <img src="/img/1.jpg" className="contact-element-img"/>
                                        </li>
                                        <li>
                                            <p className="txt1">تلگرام</p>
                                        </li>
                                        <li> 
                                            <p className="txt2">@saeid4x</p>
                                        </li>
                                    </ul>

                                </section>
                            </Grid>

                            <Grid item sm={3}>
                            <section className="about-contact-element">
                                    <ul>
                                        <li>
                                            <img src="/img/1.jpg" className="contact-element-img"/>
                                        </li>
                                        <li>
                                            <p className="txt1">تلگرام</p>
                                        </li>
                                        <li> 
                                            <p className="txt2">@saeid4x</p>
                                        </li>
                                    </ul>

                                </section>
                            </Grid>

                            <Grid item sm={3}>
                            <section className="about-contact-element">
                                    <ul>
                                        <li>
                                            <img src="/img/1.jpg" className="contact-element-img"/>
                                        </li>
                                        <li>
                                            <p className="txt1">تلگرام</p>
                                        </li>
                                        <li> 
                                            <p className="txt2">@saeid4x</p>
                                        </li>
                                    </ul>

                                </section>
                            </Grid>

                        </Grid>


                    </Grid>

                </Grid>
                </Paper>
                </section>
              



              
            </section>
        )
    }
}