const UserModel = require('../model/user')

class UserService{
    static async registerUser(name, email, password){
        try {
            const createUser = new UserModel({name,email,password});
            return await createUser.save();
        } catch (error) {
            throw error;
            
        }
    }
}

module.exports = UserService;