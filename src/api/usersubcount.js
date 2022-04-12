import request from '../utils/request'

export default function usersubcount(){
    return request({
        url:'/user/subcount',
        method:'get'
    })
}