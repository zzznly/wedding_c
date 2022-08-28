<template>

  <div class="main-survey" v-if="$route.query.target === 'family'">
    <h2 class="main-survey__title">참석인원통계</h2>
    <div class="main-survey__data">
      <div class="data-search">
        <select>
          <option>전체</option>
          <option>신랑</option>
          <option>신부</option>
        </select>
        <input class="data-search__input" type="text">
        <button class="data-search__btn">검색</button>
      </div>
      <table class="data-table">
        <tbody>
          <tr>
            <th>이름</th>
            <th>참석 여부</th>
            <th>신랑측/신부측</th>
          </tr>
          <tr v-for="item in attendantList" :key="item">
            <td>{{ item.name }}</td>
            <td>{{ item.attendance }}</td>
            <td>{{ item.brideOrGroom }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="main-survey" v-else-if="$route.query.target === 'guest'">
    <h2 class="main-survey__title">참석여부조사</h2>
    <p class="main-survey__msg">
      정확한 인원수 파악을 위해 잠시 1분만 시간내셔서 <br/>
      참석여부를 작성해주시면 감사하겠습니다 :) <br/>
    </p>
    <form class="main-survey__form" action="">
      <div class="form-row">
        <p>이름</p>
        <input type="text">
      </div>
      <br/>
      <div class="form-row">
        <p>참석여부 </p>
        <div>
          <label for="Y">
            <input type="radio" name="attendance" value="Y" id="Y">
            <a></a>
            <span>참석</span>
          </label>
          <label for="N">
            <input type="radio" name="attendance" value="N" id="N">
            <a></a>
            <span>불참</span>
          </label>
        </div>
      </div>
      <br/>
      <div class="form-row">
        <p>신랑측/신부측 </p>
        <div>
          <label for="groom">
            <input type="radio" name="groomOrBride" value="G" id="groom">
            <a></a>
            <span>신랑</span>
          </label>
          <label for="bride">
            <input type="radio" name="groomOrBride" value="B" id="bride">
            <a></a>
            <span>신부</span>
          </label>
        </div>
      </div>
      <button class="form__btn" @click="postAttendantList">제출하기</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: 'test',
      attendance: 'Y',
      brideOrGroom: 'B',

      attendantList: [],
    }
  },
  methods: {
    getAttendantList() {
      axios.get("https://0d11bd76-3e2d-4a4e-9168-8fec3671195e.mock.pstmn.io/attendants")
          .then((res) => {
            this.attendantList = res.data;
            // console.log('##참석명단', this.attendantList)
          })
          .catch(() => {
          });
    },
    postAttendantList() {
      let params = {
        name: this.name,
        attendance: this.attendance,
        brideOrGroom: this.brideOrGroom,
      }

      axios.post("https://0d11bd76-3e2d-4a4e-9168-8fec3671195e.mock.pstmn.io/attendants", params)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
    }
  },
  created() {
    this.getAttendantList();
  }
}
</script>

<style scoped>

</style>