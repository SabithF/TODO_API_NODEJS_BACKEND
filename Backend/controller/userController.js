const UserService = require('../services/userService');


exports.register= async (req, res, next)=>{
try {
    // getting input
    const {name, email, password} = req.body;

    const isSuccess = await UserService.registerUser(name, email, password);

    res.json({
        status: true,
        success:"User registered successfully"
    });   
} catch (error) {
    
}
}