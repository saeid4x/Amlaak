import React ,{Component} from 'react';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
 
import StockList1 from './components/testsComp/StockList1';
import UserList1 from './components/testsComp/UserList1';
import Hoc from './components/testsComp/HOC';


import SendAds from './components/admin/SendAds'
import manageAds from './components/admin/manageAds';
import DetailAds from './components/DetailAds';
import EditAds from './components/admin/EditAds';
import editProfilej from './components/editProfilej';
import showProfile from './components/showProfile';
import ThemeContextProvider from './components/Contexts/themeContext';

import Counter from './components/testsComp/ReduxCounter';
import store from './components/testsComp/store/';
import Menu from './components/testsComp/menu';
import Menu1 from './components/testsComp/menu1';
import List1 from './components/testsComp/list1';

import Drawer1 from './components/testsComp/drawer';
import adminLayout from './components/layouts/adminLayout';
import SearchAds from './components/SearchAds';
import FavoriteAds from './components/FavoriteAds';
import Signup from './components/Signup';
import Signin from './components/Signin';
import AboutMe from './components/AboutMe';
import AboutSite from './components/AboutSite';
import AdminDashboard from './components/admin/AdminDashboard';

import Uploads from './components/PG/upload/upload3'
 
 
//===========  test components ============

 
class App extends Component {
  
  render() {
    return (
       <Router>
         <Switch>          
           <Route path='/user/sendAds' component={SendAds}/>
           <Route path='/user/manageAds' component={manageAds}/>
           <Route exact path='/user/ad/:id' component={DetailAds}/>
           <Route path='/user/ad/:id/edit' component={EditAds}/>
           <Route path='/search' component={SearchAds}/>
           
           <Route path='/user/profile/edit' component={editProfilej}/>       
           <Route path='/user/profile/' component={showProfile}/>      
           <Route path='/signup' component={Signup}/>      
           <Route path='/signin' component={Signin}/> 
           <Route path='/dashboard' component={AdminDashboard}/> 
          


          <Route path='/test/counter' render={()=><Counter store={store}/>}/>
          <Route path="/test/menu" component={Menu}/> 
          <Route path="/test/menu1" component={Menu1}/> 
       
          
          <Route  exact path="/test" component={adminLayout}/>
          <Route  exact path="/test/upload" component={Uploads}/>

          <Route path="/test2" component={SearchAds}/>
         </Switch>
       </Router>
    )
  }
}

export default App;