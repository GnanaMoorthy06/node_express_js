import { DB } from "../db/config.js";
import { loginCheck } from "./loginModel.js";
import bcrypt from 'bcrypt'

export const loginService = async(email,password)=>{
    const checkLogin = await DB.query(loginCheck, [email])
    console.log(checkLogin.rows[0].password);
    // if(checkLogin.rows.length === 0){

    // }else{

    // }
    const check = bcrypt.compareSync(password, checkLogin.rows[0].password);
    console.log(check);
    if (check) {
    return checkLogin.rows
        
    } else {
        res.
    }
    
    
}
