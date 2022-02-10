import { Navigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
const {heroeId} = useParams()

const hero = getHeroById(heroeId)
if(!hero){
  return <Navigate to="/" />
}

  return (
    <div>
    <h1> 
      <p>{hero.superhero}</p>
      </h1>
    </div>
    ) 
};
