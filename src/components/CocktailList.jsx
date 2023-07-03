import Wrapper from "../assets/wrappers/CocktailList";
import { CocktailCard } from "./CocktailCard";

export const CocktailList = ({drinks}) => {
    if(!drinks){
        return <h4 className={{textAlign: 'center'}}> No matching cocktails founds...</h4>
    }

    const formatedDrinks = drinks.map((item) => {
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item;
        return{id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
    })
    return <Wrapper> 
        {formatedDrinks.map((item) => {
            return <CocktailCard {...item} key={item.id} />
        })}
    </Wrapper>
}