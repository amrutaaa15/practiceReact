import { Link ,Route} from "react-router-dom";

const Contact=({match})=>{
    return(
        <>
        <ul>
            <li><Link to={`${match.url}/mumbai`}>Mumbai</Link></li>
            <li><Link to={`${match.url}/gujrat`}>Gujrat</Link></li>
            <li><Link to={`${match.url}/pune`}>Pune</Link></li>
        </ul>

        <Route path={`${match.path}/:name`} render={(props)=>(
            <>
       {/* { console.log(match.params.name)} */}
        <h1>{props.match.params.name}</h1>
            { console.log(props.match.params.name)}
        </>
        )}/>
        </>
    )
}
export default Contact;