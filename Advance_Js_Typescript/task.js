let fe=(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{console.log(res.json().then(()=>{console.log(fe(data))})
        )})
})

fe()