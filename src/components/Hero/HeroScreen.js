import { useMemo } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {

const {heroeId} = useParams()
const navigate = useNavigate()
const hero = useMemo(()=> getHeroById(heroeId), [heroeId])

if(!hero){
  return <Navigate to="/" />
}

const handleReturn = ()=>{
  navigate(-1)
}

const {
  
  publisher,
  alter_ego,
  first_appearance,
  characters
} = hero;


const imgPath = `/assets/img/${hero.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img 
        src={ imgPath }
        alt={hero.superhero}
        className="img-thumbnail animate__animated animate__fadeInLeft"
        />

        <div className="col-8 animate__animated animate__fadeInLeft">
          <h3> {hero.superhero}</h3>
          <ul className="list-group ">
            <li className="list-group-item"> <b> Alter ego:</b>{ alter_ego } </li>
            <li className="list-group-item"> <b> Publisher:</b>{ publisher } </li>
            <li className="list-group-item"> <b> First Appearance:</b>{ first_appearance } </li>
            </ul>

            <h5 className="mt-5">Characters</h5>
            <p>{characters}</p>
            <button className="btn btn-outline-info"
            onClick={handleReturn}>Regresar</button>
        </div>
      </div>
    
    </div>
    ) 
};
