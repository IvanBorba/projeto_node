import express, { response } from "express"
const app = express()


const users = []


app.post("/user", (req, res) => {
 const {email, name} = req.body
 const userArealdyExists =  users.find((user) => user.email === email)

 if(userArealdyExists) {
  return response.status(400).json({error: "This email address is already being used"})
 }
 
 users.push({
  email,
  name,
  id: uuidv4()
  
 })

 return response.status(201).send()



})

app.get("/", (request, response) => { 
 return response.json({
  message: "Hello World Kenzie"
 })
})




app.listen(3333)