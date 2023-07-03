import Wrapper from "../assets/wrappers/ErrorPage";
import { Link, useRouteError } from "react-router-dom";
import img from '../assets/not-found.svg'

export const Error = () => {
    const error = useRouteError();
    if(error.status === 404){
        return (
          <Wrapper>
            <div>
                <img className="img" src={img} alt="Not found" />
                <h3>Ohh!</h3>
                <p>We can't weem to find page you are looking for </p>
                <Link to="/">Back home</Link>
            </div>
          </Wrapper>
        )
    }
    return <Wrapper>
        <div>
            <h3>Something went wrong...</h3>
        </div>
    </Wrapper>
}