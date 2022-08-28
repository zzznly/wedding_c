<template>
  <div class="main-contact">
    <h2 class="main-contact__title">연락처</h2>
    <div class="main-contact__content">
      <div class="content-row">
        <p class="content-row__name"><small>신부</small>&nbsp;&nbsp;유도진 (유진리)</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-3084-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-3084-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="toggleAccount(0)" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" :class="accountList[0].isActive === true ? 'isActive' : ''" id="account">
        <span>{{ accountList[0].account }}</span>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>부</small>&nbsp;&nbsp;유지황</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-2804-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-2804-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="toggleAccount(1)" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" :class="accountList[1].isActive === true ? 'isActive' : ''" id="account">
        <span>{{ accountList[1].account }}</span>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>모</small>&nbsp;&nbsp;김혜경</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-9694-2625"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-9694-2625"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="toggleAccount(2)" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" :class="accountList[2].isActive === true ? 'isActive' : ''" id="account">
        <span>{{ accountList[2].account }}</span>
      </div>
      <br/>
      <br/>
      <div class="content-row">
        <p class="content-row__name"><small>신랑</small>&nbsp;&nbsp;신명민</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-3902-9081"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-3902-9081"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="toggleAccount(3)" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" :class="accountList[3].isActive === true ? 'isActive' : ''" id="account">
        <span>{{ accountList[3].account }}</span>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>부</small>&nbsp;&nbsp;신종술</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-2252-9081"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-2252-9081"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="toggleAccount(4)" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" :class="accountList[4].isActive === true ? 'isActive' : ''" id="account">
        <span>{{ accountList[4].account }}</span>
      </div>
      <div class="content-row">
        <p class="content-row__name"><small>모</small>&nbsp;&nbsp;박혜숙</p>
        <div class="content-row__icons">
          <a class="icon call" href="tel:010-2303-9081"><img src="../../assets/icons/call.png" alt=""/></a>
          <a class="icon message" href="sms:010-2303-9081"><img src="../../assets/icons/message.png" alt=""/></a>
          <button @click="toggleAccount(5)" class="icon account" href="#"><img src="../../assets/icons/heart.png" alt=""/></button>
        </div>
      </div>
      <div class="content-row__account" :class="accountList[5].isActive === true ? 'isActive' : ''" id="account">
        <span>{{ accountList[5].account }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      accountList: [
        {
          account: '신한은행 110-529-374666 유진리',
          isActive: false,
        },
        {
          account: '제일은행 627-20-241841 유지황',
          isActive: false,
        },
        {
          account: '제일은행 627-20-241841 유지황',
          isActive: false,
        },
        {
          account: '국민은행 834702-04-132519 신명민',
          isActive: false,
        },
        {
          account: '국민은행 834240248307 박혜숙',
          isActive: false,
        },
        {
          account: '국민은행 834240248307 박혜숙',
          isActive: false,
        },
      ],
    }
  },
  methods: {
    toggleAccount(id) {
      this.accountList[id].isActive = !this.accountList[id].isActive;
      console.log('##', this.isActive)
    },
  }
}
</script>

<style scoped>

</style>