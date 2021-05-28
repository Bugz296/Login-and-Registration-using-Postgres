class Model{
    constructor(){
        var mysql = require('mysql');
        var db_config = require('../config');
        var pgp = require('pg-promise')();
        this.db = pgp(`${db_config.server}://${db_config.user}:${db_config.pass}@${db_config.host}:${db_config.port}/${db_config.database}`);
    }
    async query(statement){
        try{
            return await this.db.any(statement);
        }catch(err){
            console.log(err);
            return false;
        }
    }
}
module.exports = Model;