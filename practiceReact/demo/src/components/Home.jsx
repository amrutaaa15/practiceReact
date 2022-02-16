import About  from "./About";
import Counter from "./Counter";

const Home=(props)=>{

    const pages=["Home","About"];
   return <>

   
    <h1>This is Home Page</h1>

      <ul>
        {
          props.technologies.map(t =>
            <li>{t}</li>
          )}
      </ul> 
    <About myProductData={props.productData} page={pages}/>
    <Counter/>
    </>
}
export default Home;
