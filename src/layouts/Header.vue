<template>
  <!-- Nav Bar 오른쪽 정렬 -->
  <nav class="navbar navbar-expand-sm bg-light ">
    <div class="container-fluid">
      <img src="../imgs/logo_low.png" width="30" height="30" class="d-inline-block align-top" alt="" href="#">
      &nbsp;&nbsp;<a class="navbar-brand" href="#">여기는 해더 부분에 최상단 입니다.</a> &nbsp;
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resiter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>    
  </nav>
  <div class="bg-warning text-white">
    <img  src="../imgs/banner.png" width ="100%" />
    <!-- <div :style="{'background-image': 'url(../imgs/banner.png)'}"></div> -->
    <!-- <div v-bind:style="{background: 'red', fontSize: '30px' }"><img  src="../imgs/banner.png" /></div> -->
    <!-- <div :style="{ backgroundColor: item.color }" /> -->
    <div class="outer">
        <p class="outer-text">Outer Text</p>
    </div>
    <!-- <form class="d-flex col-md-12">
    </form> -->
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'header',
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    kakaoLoin() {
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email, gender',
        success: this.getProfile
      });
    },
    getProfile(authObj) {
      console.log(authObj);
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakao_account = res.kakao_account;
          console.log(kakao_account);
          this.login(kakao_account);
          alert("로그인 성공!");
        }
      });
    },
    async login(kakao_account) {
      await this.$api("/api/login", {
        param: [
          { email: kakao_account.email, nickname: kakao_account.profile.nickname },
          { nickname: kakao_account.profile.nickname }
        ]
      });

      this.$store.commit("user", kakao_account);
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
        this.$store.commit("user", {});
        alert("로그아웃");
        this.$router.push({ path: '/' });
      });
    }
  }
}
</script>