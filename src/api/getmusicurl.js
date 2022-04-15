import request from '../utils/request'

export default function(id){
    return request({
        url:'/song/url',
        method:'post',
        params:{
            id
        }
    })
}