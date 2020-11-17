<template>
  <div class="toppickmobile" data-slideout-ignore>
    <figure class="toppickmobile__img">
      <img :src="item.image" alt="" />
    </figure>
    <div class="toppickmobile__bottom">
      <p class="toppickmobile__bottom--title">
        The 10 best hang out spots right now
      </p>
      <button class="toppickmobile__bottom--see">See more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPickMobile",
  props: {
    item: Object,
  },
};
</script>

<style lang="scss" scoped>
.toppickmobile {
  height: 16rem;
  flex-shrink: 0;
  margin: 0 1rem;
  border-radius: 1.7rem;
  overflow: hidden;
  position: relative;

  height: 100%;
  width: 100%;

  &__img {
    height: 100%;
    width: 100%;
  }

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

  &__bottom {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #fff;
    z-index: 10;
    font-size: 1.9rem;
    width: 23rem;
    text-align: left;

    &--title {
      width: 21rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 2rem;
    }

    &--see {
      border: none;
      border-radius: 3rem;
      transform: translate(10rem, -1rem);
      display: inline-block;
      padding: 0.5rem 1rem;
      font-weight: 500;
      outline: none;
    }
  }
}
</style>