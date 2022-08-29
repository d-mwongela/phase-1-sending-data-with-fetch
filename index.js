function submitData (name,email) {
    const configObj = {
        method: "POST",
        headers : {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({name, email})
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(function (resp){
        return resp.json()
    })
    .then(function (data){
        return document.body.append(data.id)
    })
    .catch(function (error){
        return document.body.append("Unauthorized Access")
        
    })
}
submitData()