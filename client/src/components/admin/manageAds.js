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
            tableRefresh:false,
            tempID:null,
            userID:null,
            token:null
        
        }




    
    componentWillMount(){
        //--- check if user neither do login or not
        let userID=localStorage.getItem('userID');
        let token=localStorage.getItem('token');
        if(!userID || !token){
            this.props.history.push('/signin')
        }
        if(userID && token){
            this.setState({
                userID,token
            })
        }


      
   

       

  }
    componentDidMount(){
        axios.get("http://127.0.0.1:8010/api/users/getAds/"+localStorage.getItem('userID'))
        .then((data)=>{
            if(data){
                console.log(data.data)
                this.setState({
                    AdsData:data.data
                })
            }
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
           default:
                  return null

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
            default:
                return null

        }
    }

    handleDelete=(id)=>{
          this.setState({
              tempID:id,
              openDialog:true

          })


       
           
    }
    // setShowDialog=(show)=>{
    //     this.setState({
    //         openDialog:show

    //     })
    // }
    handleDialogIgnore=()=>{
        console.log('you ignored this dialog');
       
        this.setState({
            openDialog:false
        })

    }

    handleDialogAccept=()=>{
        console.log('you accepted this dialog')
        let config={
            headers:{
                token:localStorage.getItem('token')
            }
        }
 axios.get(Keys.backendUrl+'/api/users/remove/'+this.state.tempID,config)
            .then((data)=>{
                console.log(data.data)
                if(data.data.remove){
                
                    
                    window.location.reload();
                }
                   
                });
 

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
                   <Link onClick={()=>{this.handleDelete(item._id)}} className="btn btn-danger">حذف</Link>
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
                // onclose={this.handleDialogClose}                
            >
                <DialogTitle>
                    {"آیا از حذف آیتم مورد نظر اطمینان دارید؟"}

                </DialogTitle>
                <DialogActions>
                    <Button onClick={this.handleDialogIgnore} variant="outlined" color="secondary" >خیر</Button>
                    <Button onClick={this.handleDialogAccept} variant="outlined" color="primary" >بله</Button>
                </DialogActions>

            </Dialog>

            </section>
        )
    }
}