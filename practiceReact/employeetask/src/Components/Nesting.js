import { Route } from "react-router";
import { Link } from "react-router-dom";

const Nesting=({match})=>{
    return(
        <>
        <ul>
            <li><Link to={`${match.url}/Mumbai`}>Mumbai</Link></li>
            <li><Link to={`${match.url}/Gujrat`}>Mumbai</Link></li>
            <li><Link to={`${match.url}/Indore`}>Mumbai</Link></li>
        </ul>

        <Route path={`${match.url}:/name`} render={(props)=>
        <>
        <h1>{props.match.params.name}</h1>
        </>
        }/>
        </>
    )
}
export default Nesting;