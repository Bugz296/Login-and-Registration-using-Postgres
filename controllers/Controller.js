class Controller{
    constructor(){
        this.session = require('express-session');
    }
    hello(){
        console.log("Hello");
    }
}
module.exports = Controller;