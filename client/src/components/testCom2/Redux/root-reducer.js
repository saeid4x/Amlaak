import {combineReducers} from 'redux'
import userReducer from './user/user.reducer'


/*

//main store
    {
        user:{// userReducer --> [state object]},
        anotherKey:{
            
        }
    }

*/
export default combineReducers({
    user:userReducer
});

