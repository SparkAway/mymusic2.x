import request from '@/utils/request'
export default function phonelogin(phone,captcha){
    console.log(3);
    return request({
        url:'/login/cellphone',
        method:'post',
        params:{
            phone,
            captcha
        }
    })
}