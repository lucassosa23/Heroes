
import { firebase, googleAuthProvider } from "../../firebase/firebaseConfig";
import { types } from "../../Types/types"
import { finishLoading, startLoading } from "./ui";
    
    
export const startLoginEmailPassword = ( email, password) => {
    return (dispatch) => {
        dispatch(startLoading());

    firebase.auth().signInWithEmailAndPassword(email, password )
        .then(({user}) => {
          dispatch(
            login(user.uid, user.displayName));
            dispatch( finishLoading() );
        })
        .catch( e => {
            console.log(e)
            dispatch(finishLoading());
          })  
    }
}   

    export const startGoogleLogin = () =>{
        return(dispatch) => {
            firebase.auth().signInWithPopup(googleAuthProvider)
                .then(({user}) => {
                    dispatch(
                        login(user.uid, user.displayName)
                    )
                });
        }
        

    }

    export const login = (uid, displayName) => ({
        type: types.login,
        payload: {
            uid,
            displayName,
        }            
    }
    )
        
         
   