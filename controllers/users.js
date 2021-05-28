const user = require('../models/user');
const Controller = require('./Controller');
class Users extends Controller{
    constructor(){
        super();
    }
    index(req, res){
        res.render('index');
    }
    async login(req, res){
        let post_data = req.body;
        const user = require('../models/user');
        let result = await user.login_process(post_data);
        if(result){
            console.log("Login Successful");
        }else{
            console.log("Invalid Email or Password");
        }
        res.end();
    }
    async register(req, res){
        let post_data = req.body;
        const user = require('../models/user');
        /* Form Validation */
        let form_validation = require('./form_validation');
        form_validation.validate(post_data);
        let result = form_validation.run("Not Null, No Number");

        if(result.length == 0){
            result = await user.register(post_data);
            if(result){
                res.redirect('/home');
            }else{
                res.redirect('/');
            }
        }else{
            res.redirect('/');
        }
        res.end();
    }
    home(req, res){
        res.render('home');
    }
}
module.exports = new Users;