import MyFunction from "./MyFunction";
const About=(props)=>{

    return <>
     <h1>This is About Page</h1>
     <table border="3">
            <thead>

                <th>Product ID</th>
                <th>Product name</th>
                <th>Product price</th>
                <th>Product quantity</th>
                <th>Product features</th>
            </thead>
            {
                props.myProductData.map(p =>
                    <tbody>
                        <tr>
                            <td>{p.pid}</td>
                            <td>{p.pname}</td>
                            <td>{p.price}</td>
                            <td>{p.quantity}</td>
                            <td>{p.features}</td>
                        </tr>
                    </tbody>
                )
            }
        </table>
        <MyFunction pageData={props.page}/>
    </>

 }
 export default About;
 