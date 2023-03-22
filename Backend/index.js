const app = require('./app');
const connectDB = require('./config/db')
const UserModel = require('./model/user')

const port = 9916;

connectDB();

app.get('/', (req, res)=>{
    res.send("Hi Afie")
})

app.listen(port, ()=>{
    console.log('Server running on port',port);

})