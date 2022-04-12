import request from '../utils/request'

export default function search(keywords){
    console.log(keywords);
    return request({
        url:'/search',
        method:'post',
        params:{
            keywords
        }
    })
}