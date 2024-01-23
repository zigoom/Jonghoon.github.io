import axios from 'axios';
export default {
  methods: {
    async $api(url, data) { //post 형식으로 통신하기 위해 사용
      return (await axios({
        method: 'post',
        url,
        data
      }).catch(e => {
        console.log(e);
      })).data;
    }
  }
}