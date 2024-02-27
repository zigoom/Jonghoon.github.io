const setCookie =(key, value, days =1)=>{
    const date = new Date() // 날짜,시간값
    date.setHours(24*days - date.getTimezoneOffset() / 60, 0, 0, 0)
    // 1. `date.setHours()`: JavaScript의 내장 함수 중 하나로, 날짜 객체의 시간을 설정
    // 2. `24 * days`: `days` 변수에 저장된 일 수를 시간으로 변환합니다. 하루는 24시간이므로, `days`에 저장된 일 수를 24로 곱하여 시간으로 변환
    // 3. `date.getTimezoneOffset() / 60`: 현재 시스템의 시간대 오프셋을 분 단위로 가져옵니다. 이 값을 시간으로 변환하여 현재 시스템의 시간대 오프셋을 고려합니다. 일반적으로 시간대 오프셋은 시간으로 표현됩니다.
    // 4. `0, 0, 0`: 시, 분, 초를 0으로 설정하여 날짜 객체의 시간 부분을 0으로 초기화합니다.
    // 따라서 주어진 코드는 현재 날짜에 일정한 일 수(`days`)를 더하거나 빼고, 시간 부분을 0으로 설정하여 해당 날짜의 자정으로 만들어서 쿠키의 만료 일자를 설정한다.
    const expires = date.toUTCString()
    // 쿠키는 기본으로 UTC 포멧으로 해야함 (toUTCString은 Time zone을 0을 기준으로 해서 대한민국 시간은 +9가 되어있다)
    // const expires = date.toUTCString(): 설정된 날짜를 UTC 형식의 문자열로 변환하여 expires 변수에 저장합니다. 이 문자열은 쿠키의 만료 날짜를 나타내며, 쿠키가 만료되는 시간을 설정하는 데 사용됩니다.
    document.cookie = `${key}=${value};expires=${expires};path=/`
    // document.cookie = ${key}=${value};expires=${expires};path=/``: 최종적으로 쿠키를 설정합니다. 이 부분은 쿠키의 키-값 쌍을 설정하고, 만료 날짜를 지정하며, 쿠키의 경로를 지정합니다. 설정된 쿠키는 현재 문서(document)에 적용됨

    // 따라서 이 함수를 호출하면 지정된 키와 값으로 쿠키가 설정되며, 해당 쿠키는 days 매개변수에 지정된 일 수 후에 만료됩니다.
}
const getCookie =(key)=> {
    const value = document.cookie.split(';').find((i)=>i.trim().startsWith(key+'='))
    // 1. `document.cookie`: 현재 문서(document)의 모든 쿠키를 나타내는 문자열을 가져옵니다.
    // 2. `.split(';')`: 가져온 쿠키 문자열을 세미콜론(`;`)을 기준으로 분할하여 배열로 만듭니다.
    // 3. `.find((i) => i.trim().startsWith(key + '='))`: 분할된 배열에서 해당 쿠키의 값을 찾습니다. 이 때, 각 쿠키 문자열의 앞뒤 공백을 제거한 후, 현재 반복 중인 요소가 지정된 키(`key`)로 시작하는지 확인합니다.
    if(!!value){
        return value.trim().substring(key.length+1)
    } 
    // 4. `if (!!value) { ... }`: 찾은 값이 존재하는 경우, 해당 값을 반환합니다. 그렇지 않으면 `null`을 반환합니다.
    // 5. `return value.trim().substring(key.length + 1)`: 값을 반환하기 전에 앞뒤 공백을 제거하고, 키와 값 사이의 문자열만 추출하여 반환합니다.
    return null
    // 따라서 이 함수를 호출하면 지정된 키에 해당하는 쿠키의 값을 반환하게 됩니다. 만약 해당하는 쿠키가 없으면 `null`을 반환합니다.
}

export {setCookie, getCookie}