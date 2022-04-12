import request from '../utils/request'

export default function pwdlogin(phone,password){
    return request({
        url:'/login/cellphone',
        method:'post',
        params:{
            phone,
            password
        }
    })
}