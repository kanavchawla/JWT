const express = require('express');
const app = express();
const posts = [
    {
        username:'jima',
        title:'post1'
    },
    {
        username:'tom',
        title:'post2'
    }
]
app.use(express.json());
const jwt = require('jsonwebtoken');
app.get('/posts',(req,res)=>{
    res.json(posts);
})
app.post('/login', (req, res) => {
    //authenticate user

  const username = req.body.username;
  const user= {name:username} 
  jwt.sign(user,process.env.ACESS_TOKEN_SECRET)
});
app.listen(3000);