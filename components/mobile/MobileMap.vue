<template>
  <div class="mobilemap">
    <figure class="mobilemap__img" v-if="placeholder">
      <img src="~assets/imgs/mapplaceholder.png" alt="" />
    </figure>
    <div class="mobilemap__expand">
      <p>Tap to expand</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileMap",
  data() {
    return {
      placeholder: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.mobilemap {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  &__img {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    &::before {
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        #1e1d1d 100%
      );
      z-index: 9;
    }
  }

  &__expand {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 700;
  }
}
</style>