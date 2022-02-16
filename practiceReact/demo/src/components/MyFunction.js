const MyFunction = (props) => {
    return <>
    {
    props.pageData.map(k=>
        <h4>{k}</h4>
    )}
     </>
}

export default MyFunction;