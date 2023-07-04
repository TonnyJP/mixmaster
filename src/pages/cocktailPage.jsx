const singleCocktailUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
import axios from 'axios';
import {Link, Navigate, useLoaderData} from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';

export const loader =  async ({params}) => {
    const {id} = params;
    const response = await axios.get(`${singleCocktailUrl}${id}`)
    return {data: response.data, id}
}
export const Cocktails = () => {
    const {id, data} = useLoaderData();

    //if(!data) return <h2>Something went wrong...</h2>;

    if(!data.drinks) return <Navigate to="/" />

    const singelDrink = data.drinks[0];
    const {strDrink: name, 
        strDrinkThumb: image, 
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions
    } = singelDrink;
    
    const validIngredients = Object.keys(singelDrink).filter((key) =>key.startsWith('strIngredient') &&
     singelDrink[key] !== null).map((key) => singelDrink[key])
    console.log(validIngredients)

    return <Wrapper>
        <header>
            <Link to="/" className='btn'> Back home</Link>
            <h3>{name}</h3>
        </header>
        <div className="drink">
            <img src={image} alt={name} className='img' />
            <div className="drink-info">
                <p>
                    <span className='drink-data'> name :</span>{name}
                </p>
                 <p>
                    <span className='drink-data'> category :</span>{category}
                </p>
                 <p>
                    <span className='drink-data'> info :</span>{info}
                </p>
                 <p>
                    <span className='drink-data'> glass :</span>{glass}
                </p>
                <p>
                    <span className='drink-data'> ingredients :</span>{validIngredients.map((item, index) => {
                        return <span className='ing' key={index}>
                            {item}{index < validIngredients.length -1? ", ": ""}
                        </span>
                    })}
                </p>
                 <p>
                    <span className='drink-data'> instruction :</span>{instructions}
                </p>
            </div>
        </div>
    </Wrapper>

}