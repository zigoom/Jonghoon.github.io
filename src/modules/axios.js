import { axios } from '@bundled-es-modules/axios'
import { ref } from 'vue'

export default () => {
    const commuicating = ref(false)
    const BASE_URL = 'http://localhost:8000'
    const creatURL = (url)=>{
        return  url.startsWith('http') ? url : BASE_URL + url
    }
    const checkResult = (resp, onSuccess,onFailed)=>{
        commuicating.value = false
        if(resp.status === 200 &&resp.data.rep === 'ok'){
            if (onSuccess){
                onSuccess(resp.data)
            }
        } else {
            if(onFailed){
                onFailed(resp.data)
            }
        }
    }
    /// 뒤에 이제 get, post, put 을 만들어~~

    return {
        commuicating,
    }
}