<template>
  <div class="main">
    <main-intro/>
    <main-greeting/>
    <main-date :propsData="{ monthDaysArr }"/>
    <main-location/>
    <main-contact/>
    <main-gallery/>
    <main-survey/>
  </div>
</template>

<script>
// import { ref } from 'vue';
import MainIntro from '@/components/main/MainIntro'
import MainGreeting from "@/components/main/MainGreeting";
import MainDate from "@/components/main/MainDate";
import MainLocation from "@/components/main/MainLocation";
import MainContact from "@/components/main/MainContact";
import MainGallery from "@/components/main/MainGallery";
import MainSurvey from "@/components/main/MainSurvey";
export default {
  components: {
    MainSurvey,
    MainContact,
    MainGallery,
    MainLocation,
    MainDate,
    MainGreeting,
    MainIntro
  },
  setup() {
    let monthDaysArr = Array(30).fill().map((arr, i) => { return i + 1 });

    function initMap() {
      const container = document.getElementById('map')
      container.addEventListener('click', function(){
        location.href='https://map.kakao.com/link/map/예한교회,37.5203981368124, 127.113885300836'
      })

      const options = {
        // 처음 지도의 위치를 lat, lng(위도, 경도) 값으로 설정한다.
        center: new kakao.maps.LatLng(37.5203981368124, 127.113885300836),
        level: 5
      }

      this.map = new kakao.maps.Map(container, options);

      // 마커 생성후 표시
      // 마커가 표시될 위치
      const markerPosition = options.center;
      // 마커를 생성
      const marker = new kakao.maps.Marker({
        position: markerPosition
      });
      // 마커가 지도위에 표시되도록 설정
      marker.setMap(this.map);
    }

    return {
      monthDaysArr,
      initMap,
    }
  },

  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3f1959401f782b27f4aba3c934eca4e0&libraries=clusterer,drawing,services'
      /* eslint를 사용한다면 kakao 변수가 선언되지 않았다고
       * 오류를 내기 때문에 아래 줄과 같이 전역변수임을
       * 알려주어야 한다. */
      /* global kakao */
      script.addEventListener('load', () => {
        kakao.maps.load(() => {
          // 카카오맵 API가 로딩이 완료된 후 지도의 기본적인 세팅을 시작해야 한다.
          this.initMap()
        })
      })
      document.head.appendChild(script)
    } else {
      // 이미 카카오맵 API가 로딩되어 있다면 바로 지도를 생성한다.
      this.initMap()
    }
  },

  created() {
    console.log('###query', this.$route.query.target);
  },
}
</script>

<style lang="scss">

</style>