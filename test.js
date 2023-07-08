const res = await axios.post("/login", {
    email: email,
    password: password
})

console.log(res)
if(res.status === 200){
    alert("Login success....")
}