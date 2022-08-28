<template>
  <div class="main-gallery">
    <h2 class="main-gallery__title">포토갤러리</h2>
    <div class="main-gallery__content">
      <router-link class="main-gallery__photos" to ="galleryMore">
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {
    }
  }
}
</script>

<style scoped>

</style>