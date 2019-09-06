import React, { Component } from 'react'
import axios from 'axios';
import Keys from '../../config/keys';
import {Link} from 'react-router-dom'
import AdminLayout from '../layouts/adminLayout';
import { Table ,Paper, TableHead,DialogTitle,Button,TableBody, TableRow,
        TableCell, Dialog, DialogActions,Slide,Snackbar,TablePagination

            } from '@material-ui/core';

import { mergeClasses, makeStyles } from '@material-ui/styles';
export default class extends Component{
    
        state={
            AdsData:[],
            openDialog:false,
            openSnackBar:false,
            tableRefresh:false
        
        }

    //   //for snackbar
    //  TransitionLeft(props) {
    //     return <Slide {...props} direction="left" />;
    //   }


    componentDidMount(){

        axios.get(Keys.backendUrl+'/api/users/123/getAds')
            .then((data)=>{
                if(data){
                    console.log(data.data);
                    this.setState({
                        AdsData:data.data
                    })
                    
                }
            })
        

    }
    
        // getProvivce(param){
        //     switch(param){
        //         case 'tehran':
        //             return "تهران"
        //             break;
        //         case 'nkh-razavi':
        //             return 'خراسان رضوی'
        //             break;
        //         case 'nkh':
        //             return 'خراسان شمالی'
        //             break;
                    
        //     }

        // }

        // getCity(city){
        //     switch(city){
        //         case 'bojnord':
        //             return 'بجنورد'
        //             break;
        //         case 'tehran':
        //             break
        //     }
        // }
    handleDialogOpen=()=>{
        this.setState({
            openDialog:true
        })

    }

    handleDialogClose=()=>{
        this.setState({
            openDialog:false
        })
    }

    getTypeAds(type){
        switch(type){
            case 'rent':
                return "اجاره"
                break
            case 'sell':
                return "فروش"

        }

    }
    getCategoryAds(cat){
        switch(cat){
            case 'apartment':
                return "آپارتمان"
                break;
            case 'villa':
                return "ویلا"
                break;
            case 'shop':
                return "مغازه"
                break;
            case 'flat':
                return 'زمین'
                break;

        }
    }

    handleDelete=(id)=>{
          

        axios.get(Keys.backendUrl+'/api/users/remove/'+id)
            .then((data)=>{
                console.log(data.data)
                if(data.data.remove){
                    this.setState({
                        AdsData:this.state.AdsData.push() 
                        
                    })
                }
                    else if(!data.data.remove){
                        alert('delete failed')

                    }

                });
 
           
    }
    setShowDialog=(show)=>{
        this.setState({
            openDialog:show

        })
    }
    handleDialogIgnore=()=>{

    }

    handleDialogAccept=()=>{

    }
    render(){
        //for dialog (delete ads)
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });



    

        let number=1;
        let data=this.state.AdsData.length>0 ? (
            this.state.AdsData.map((item)=>(
                <TableRow>
                <TableCell>{number++}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{this.getTypeAds(item.Type)}{"  "}{this.getCategoryAds(item.category)}</TableCell>
                <TableCell>{item.bazdid}</TableCell>
                 
                <TableCell>
                    <Link to={`/user/ad/${item._id}`} className="btn btn-primary">مشاهده</Link>
                   <Link onClick={(id)=>{this.handleDelete(item._id)}} className="btn btn-danger">حذف</Link>
                   {/* <Link className="btn btn-danger">حذف</Link> */}
                    <Link to={`/user/ad/${item._id}/edit`} className="btn btn-warning">ویرایش</Link>

                </TableCell>
            </TableRow>
            ))
           
        ):null
        return(
            <section className="manageAds">
                <AdminLayout></AdminLayout>
                <Paper style={{width:'82%',marginLeft:15}}>
                    <div>
                        <center>
                        <h2 >مدیریت آگهی </h2>
                        </center>
                    </div>

                </Paper>
            <Paper style={{width:900,width:'83%',marginLeft:10}}>
            
            <Table style={{border:'1px solid red',width:'100%',direction:'rtl'}} >
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>عنوان آگهی </TableCell>
                    <TableCell> تاریخ ارسال </TableCell>
                    <TableCell>نوع آگهی </TableCell>
                    <TableCell>بازدید آگهی </TableCell>
                    <TableCell> اقدامات  </TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {data}
                {/* <TableRow>
                    <TableCell>  1  </TableCell>
                    <TableCell>  عنوان آگهی یک  </TableCell>
                    <TableCell>    1398-5-30</TableCell>
                    <TableCell>  اجاره آپارتمان</TableCell>
                    <TableCell>  10یار  </TableCell>
                    <TableCell>
                        <Button color="primary"  variant="outlined">مشاهده</Button>
                        <Button color="secondary"  variant="outlined" onClick={this.handleDialogOpen}>حذف</Button>
                        <Button color="default"  variant="outlined">ویرایش</Button>
                     </TableCell>
                     
                </TableRow> */}

            </TableBody>
            </Table>
             
            </Paper>

            <Dialog
                open={this.state.openDialog}
                TransitionComponent={Transition}
                keepMounted
                onclose={this.handleDialogClose}                
            >
                <DialogTitle>
                    {"آیا از حذف آیتم مورد نظر اطمینان دارید؟"}

                </DialogTitle>
                <DialogActions>
                    <Button onClick={this.handleDialogIgnore} variant="outlined" color="secondary" >خیر</Button>
                    <Button onClick={this.handleDialogAccept} variant="outlined" color="primary" >بله</Button>
                </DialogActions>

            </Dialog>

          

{/* 
                <table className="table">
                  <tr>
                      <th>  #   </th>
                      <th>  عنوان آگهی    </th>
                      <th>  تاریخ ارسال     </th>
                      <th>   نوع آگهی   </th>
                      <th>   دسته بندی آگهی   </th>
                      <th>   بازدید  </th>
                      <th>    اقدامات </th>
                       
                  </tr>
                  {/* place body table.... */}
                  {/* {data} */}

                {/* </table> */}
                
            */}


            </section>
        )
    }
}