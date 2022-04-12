import request from '../utils/request'
export default function verifycaptcha(phone,captcha){
    console.log(phone,captcha)
    return request({
        url:'/captcha/verify',
        method:'post',
        params:{
            phone,
            captcha
        }
    })
}