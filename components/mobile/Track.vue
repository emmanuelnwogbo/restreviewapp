<template>
  <div class="track swiper-container">
    <div class="track__swiper-wrapper swiper-wrapper">
      <div
        class="track__swiper-slide swiper-slide"
        v-for="(item, index) in track_items"
        :key="'blurredcardsleft' + index"
      >
        <TopPickMobile v-bind:item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

import TopPickMobile from "@/components/mobile/TopPickMobile";

export default {
  name: "Track",
  components: {
    TopPickMobile,
  },
  props: {
    track_items: Array,
  },
  mounted() {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.track {
  overflow: hidden;
  &.swiper-container {
    width: 100%;
    height: 100%;
    padding: 2rem 0;
  }

  &__swiper-wrapper {
    display: flex;
  }

  &__swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    /*display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    flex-shrink: 0;
    width: 30rem !important;
    height: 30rem !important;
    border-radius: 2rem;*/
    text-align: center;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 24rem !important;
    height: 20rem !important;
    border-radius: 3rem;
    overflow: hidden;
    position: relative;
  }
}
</style>