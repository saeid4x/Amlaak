import React, { Component } from 'react'
import axios from 'axios';
import Keys from '../../config/keys';
import {Link} from 'react-router-dom'
import AdminLayout from '../layouts/adminLayout';
import { Table ,Paper, TableHead,DialogTitle,Button,TableBody, TableRow,
        TableCell, Dialog, DialogActions,Slide,Snackbar

            } from '@material-ui/core';

import { mergeClasses, makeStyles } from '@material-ui/styles';
export default class extends Component{
    
        state={
            AdsData:[],
            openDialog:false,
            openSnackBar:false
        }

    //   //for snackbar
    //  TransitionLeft(props) {
    //     return <Slide {...props} direction="left" />;
    //   }


    componentDidMount(){

        axios.get(Keys.backendUrl+'/api/users/user1/getAds')
            .then((data)=>{
                if(data){
                    console.log(data.data);
                    this.setState({
                        AdsData:data.data
                    })
                    
                }
            })
        

    }

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


    handleDelete=(id)=>{
         
        axios.get(Keys.backendUrl+'/api/users/remove/'+id)
            .then((data)=>{
                console.log(data.data)
                if(data.data.remove){
                    this.setState({
                        AdsData:this.state.AdsData.push({refresh:true})
                    })
                }
                    else if(!data.data.remove){
                        alert('delete failed')

                    }

                });
 
           
    }
    render(){
        //for dialog
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    

        let number=1;
        let data=this.state.AdsData.length>0 ? (
            this.state.AdsData.map((item)=>(
                <tr>
                <td>{number++}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
                <td>{item.Type}</td>
                <td>{item.category}</td>
                <td>{item.bazdid}</td>
                <td>
                    <Link to={`/user/ad/${item._id}`} className="btn btn-primary">مشاهده</Link>
                    <Link onClick={(id)=>{this.handleDelete(item._id)}} className="btn btn-danger">حذف</Link>
                    <Link to={`/user/ad/${item._id}/edit`} className="btn btn-warning">ویرایش</Link>

                </td>
            </tr>
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
            <Table style={{border:'1px solid red',width:'100%',direction:'rtl'}}>
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
                <TableRow>
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
                     
                </TableRow>

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
                    <Button onClick={this.handleDialogClose} variant="outlined" color="secondary" >خیر</Button>
                    <Button onClick={this.handleDialogClose} variant="outlined" color="primary" >بله</Button>
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