
const Person=(props)=>{

   
   return <>
    <h1 onClick={props.action}>My name is {props.name} and my age is {props.age} and this are childrens{props.children}</h1>
   
    </>
}
export default Person;
