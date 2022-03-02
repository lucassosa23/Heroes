import {firebase} from "../firebase/firebaseConfig"
import { useEffect } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { useDispatch } from "react-redux";
import { login } from "../components/actions/auth";


export const AppRouters = () => {
     const dispatch = useDispatch()
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user)=>{
        if ( user?.uid) {
          dispatch ( login(user.uid, user.displayName));
        }
      });
    }, [dispatch])
    
  return (
    <BrowserRouter>
    <Routes>
    <Route path="login" element={<LoginScreen/>} />     
    <Route path="/*"element={<DashboardRoutes/>}/>

    </Routes>
    </BrowserRouter>
     )
    

    
  };
