<template>
  <div
    class="container__mobile--addbusiness"
    v-bind:class="{
      navbaropen: mobilesidenav,
      navbarclosed: !mobilesidenav,
    }"
  >
    <div class="container__mobile--addbusinessbtn">
      <button>Add a business</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBusinessMobile",
  props: {
    mobilesidenav: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  &__mobile {
    &--addbusiness {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 15rem;
      width: 100vw;
      z-index: 10;
      //background: rgba(#e5e5e5, 0.5);
      justify-content: center;
      align-items: center;

      background: transparent;

      /*-webkit-filter: blur(0.4rem);
      -moz-filter: blur(0.4rem);
      -o-filter: blur(0.4rem);
      -ms-filter: blur(0.4rem);
      filter: blur(0.4rem);*/

      transition: all 0.1s ease;

      display: none;

      @include respond(tab-land) {
        display: flex;
      }

      &.navbaropen {
        transform: translateY(30rem);
        opacity: 0;
      }

      &.navbarclosed {
        transform: translateY(0);
        opacity: 1;
      }
    }

    &--addbusinessbtn {
      & button {
        width: 28rem;
        background: #e22222;
        outline: none;
        color: #fff;
        border: none;
        border-radius: 3rem;
        padding: 1.5rem 3rem;
        font-size: 2.5rem;

        filter: blur(0);
      }
    }
  }

  &__seemore {
    padding-bottom: 4rem;
    padding-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    position: relative;
    display: flex;

    &--content {
      display: flex;
      position: absolute;
      right: 0;
      width: 16rem;
      align-items: center;
      justify-content: center;

      & span {
        display: inline-block;
        transform: translateY(0.5rem);
      }

      & svg {
        height: 2rem;
        width: 2rem;
      }
    }
  }
}
</style>