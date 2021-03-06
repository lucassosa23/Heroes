
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/NavBar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/Hero/HeroScreen";





export const DashboardRoutes = () => {
  return (
    <>
    <Navbar/>
    <div className="container">
    <Routes>
            <Route path="marvel" element={<MarvelScreen/>} />
            <Route path="dc" element={<DcScreen/>} /> 
            <Route path="search" element={<SearchScreen/>} />
            <Route path="*" element={<MarvelScreen/>} />
            <Route path="hero/:heroeId" element= {<HeroScreen/>} />
        
    </Routes>
    </div>
   
    
    
  
  </>
  ) 
};
