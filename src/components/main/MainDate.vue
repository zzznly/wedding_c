<template>
  <div class="main-date">
    <div class="main-date__calendar">
      <div class="main-date__header">
        <p class="date--day">9월 24일</p>
        <p class="date--time">토요일, 낮 12:00</p>
      </div>
      <div class="main-date__month">
        <div class="main-date__week">
          <div class="main-date__day red">일</div>
          <div class="main-date__day">월</div>
          <div class="main-date__day">화</div>
          <div class="main-date__day">수</div>
          <div class="main-date__day">목</div>
          <div class="main-date__day">금</div>
          <div class="main-date__day">토</div>
        </div>
        <div class="main-date__week">
          <div class="main-date__day empty"></div>
          <div class="main-date__day empty"></div>
          <div class="main-date__day empty"></div>
          <div class="main-date__day empty"></div>
          <div
              class="main-date__day"
              v-for="(item, idx) in propsData.monthDaysArr"
              :key="`monthDaysArr-${idx}`"
              :class="item % 7 == 4 ? 'red' : ''"
          >
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    propsData: Object,
  }
}
</script>

<style scoped>

</style>