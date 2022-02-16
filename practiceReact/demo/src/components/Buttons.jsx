
const Buttons=(({action,label})=>{
    return <button onClick={()=>action()}>{label}</button>
  
})
export default Buttons;