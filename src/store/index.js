// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    projectList:[
      {
        id: 1,
        platform: 'unity',
        type: 'app',
        device:'Android, PC',
        etc: '',
        gitLink: 'https://github.com/zigoom/ShooterDefense',
        image: './images/img1.png',
        title: 'GearVR을 이용한 FPS 디펜스 게임 (ShooterDefense)',
        contents: 'Gear VR을 사용하여 총을 발사하는 3D 디팬스 슈팅게임 대전하는 콘텐츠'            
      },{
        id: 2,
        platform: 'unity',
        type: 'app',
        device:'Android, PC',
        etc: 'Photon',
        gitLink: 'https://github.com/zigoom/PotonAtteck',
        image: './images/img2.png',
        title: 'Photon을 이용한 FPS 게임 (PhotonAtteck)',
        contents: 'PC에서 Photon PUN2로 네트워크상에서 4명의 사용자들이 대전하는 온라인 FPS 콘텐츠'            
      },{
        id: 3,
        platform: 'unity',
        type: 'app',
        device:'Android, PC',
        etc: 'MAXST SDK, AR',
        gitLink: 'https://github.com/zigoom/ARQuiz',
        image: './images/img3.png',
        title: 'AR 퀴즈게임 (픽셀 동물원)',
        contents: 'MAXST를 이용하여 유니티 환경에 있는 이미지를 인식하여 휴대폰 AR에서 증강하여 문제를 푸는 프로젝트'            
      },{
        id: 4,
        platform: 'unity',
        type: 'app',
        device:'Oculus Quest(Android)',
        etc: '',
        gitLink: 'https://github.com/zigoom/BlockCoding',
        image: './images/img4.png',
        title: 'VR을 이용한 블록코딩 프로젝트 (두근두근 블록코딩)',
        contents: 'Unity에서 VR(Qculus Quest)을 사용하여 명령을 내릴 수 있는 작물 가지고 미션을 해결해 나가는 콘텐츠'            
      },{
        id: 5,
        platform: 'unity',
        type: 'app',
        device:'HTC VIVE Pro(PC)',
        etc: 'VR',
        gitLink: 'https://github.com/zigoom/DrawAndPainting',
        image: './images/img5.png',
        title: 'VR 기술과 머신러닝을 이용한 프로젝트 (DnP)',
        contents: '구글 퀵드로우 데이터를 이용한 훈련된 머신러닝 알고리즘을 통해 내가 그린 그림과 가장 비슷한 오브젝트를 가상공간에 생성하여 색칠하는 콘텐츠'
      },{
        id: 6,
        platform: 'spring',
        type: 'web',
        device:'PC',
        etc: 'sts 3.9.12, tomcat 9.0, Oracle 18c',
        gitLink: 'https://github.com/zigoom/Pilldex',
        image: './images/img6.png',
        title: '의약품 자료제공 서비스 (PillDex)',
        contents: '공공데이터를 사용해서 해당 조건에 맞는 의약품을 제공하고 지도 API를 활용해서 주변의 약국,병원 정보를 제공하는 서비스'
      },{
        id: 7,
        platform: 'spring',
        type: 'web',
        device:'PC',
        etc: 'sts 3.9.12, tomcat 9.0, Oracle 18c',
        gitLink: 'https://github.com/zigoom/BlueOcean',
        image: './images/img7.png',
        title: '주식 추천 서비스 (BLUEOCEAN)',
        contents: 'LSTM 모델을 사용하여 훈련하여, 다음날의 추천 주식을 예측하여 제공, 관심종목, 및 실시간 상하안가 종목 등을 제공하는 서비스'
      },{
        id: 8,
        platform: 'python',
        type: 'web',
        device:'PC',
        etc: 'Flask + Swagger, PyCharm 2023.1.3, keras, FinanceDataReader',
        gitLink: 'https://github.com/zigoom/BlueOceanPython',
        image: './images/img8.png',
        title: '주식 데이터 수집 AI 예측 RestApi 서버',
        contents: '주식 데이터를 수집 및 가공하여 REST API로 제공하는 파이썬 플라스크 서버'           
      }
      ,{
        id: 9,
        platform: 'vue',
        type: 'web',
        device:'PC',
        etc: '',
        gitLink: 'https://github.com/zigoom/PortfolioPage',
        image: './images/img9.png',
        title: 'Vue 를 사용한 Portfolio gitpage',
        contents: 'vue언어를 사용해서 gitpage에서 정적으로 프로젝트의 목록을 간략하게 보여주는 사이트 제작'
      },
    ]
  },
  mutations: {
    // 상태 데이터 변경을 위한 mutations 정의
  },
  actions: {
    // 비동기 로직을 처리하기 위한 actions 정의
  },
  modules: {
    // 필요한 경우에 모듈을 추가로 등록할 수 있습니다.
  }
});