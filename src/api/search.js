import request from '../utils/request'

export default function search(keywords,offset){
    let limit = 100;
    return request({
        url:'/search',
        method:'post',
        params:{
            keywords,
            limit,
            offset
        }
    })
}