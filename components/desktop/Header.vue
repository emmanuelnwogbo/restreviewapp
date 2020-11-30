<template>
  <div
    class="header"
    v-bind:class="{
      orangered: scroll_value > 0,
    }"
  >
    <div class="header__left header__side">
      <div
        class="header__side--item"
        v-for="(menu, index) in left_menu"
        :key="index"
      >
        {{ menu }}
      </div>
    </div>
    <div class="header__right header__side">
      <div
        class="header__side--item"
        v-for="(menu, index) in right_menu"
        :key="index"
      >
        {{ menu }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      left_menu: ["Add business", "Write reviews"],
      right_menu: ["Login", "Sign up"],
    };
  },
  computed: {
    scroll_value() {
      const scroll_value = this.$store.getters.scroll_value;

      return scroll_value;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  transition: $transition-primary;
  display: flex;
  background: transparent;
  justify-content: space-between;
  padding: 1.5rem 30rem;
  color: #fff;
  font-size: 1.8rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 3;

  &.orangered {
    background: $primary-color !important;
  }

  &__side {
    display: flex;
    cursor: pointer;

    &--item {
      &:not(:nth-child(1)) {
        margin-left: 5rem;
      }
    }
  }
}
</style>