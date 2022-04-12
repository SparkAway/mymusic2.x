import request from '../utils/request'

export default function userinfo(uid){
    return request({
        url:'/user/detail',
        method:'post',
        params:{
            uid
        }
    })
}