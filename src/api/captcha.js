import request from '@/utils/request'
// export function login(data){
//     return request({
//         url:'/login',
//         method:'post',
//     })
// }
export default function getCaptcha(phone){
    console.log(2)
    return request({
        url:'/captcha/sent',
        method:'post',
        params:{
            phone
        }
    })
}