import request from '../utils/request'

export default function loginstatus(){
    return request({
        url:'/login/status',
        method:'get', 
    })
}