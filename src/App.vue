<template>
  <div class="wedding">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header.vue';
import Footer from './components/common/Footer.vue';
// import axios from 'axios';

export default {
  components: {
    Header,
    Footer
  },
  // methods: {
  //   getAttendantList() {
  //     axios.get("https://92ec6253-a401-4618-a8d2-a2b382c16817.mock.pstmn.io/list").then((result) => {
  //       console.log(result.data).catch(()=>{});
  //     })
  //   }
  // },
  // created() {
  //   this.getAttendantList();
  // }
}
</script>

<style lang="scss">
@import 'assets/styles/common';
//@import 'assets/'

</style>
