<template>
  <div class="mobileheader">
    <div class="mobileheader__top">
      <div class="mobileheader__burger toggle-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mobileheader__search">
        <span class="mobileheader__search--magnify">
          <span class="mobileheader__search--magnifybody">
            <img src="~assets/svgs/magnify.svg" alt="" />
          </span>
        </span>
        <input
          class="mobileheader__search--input"
          type="text"
          placeholder="Search"
        />
      </div>
    </div>
    <div class="mobileheader__nav">
      <span
        class="mobileheader__nav--btn"
        v-for="(item, index) in menu"
        :key="'nav' + index"
        v-bind:class="{
          current: item === currentTab,
        }"
        @click="toggle_tabs(item)"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileHeader",
  data() {
    return {};
  },
  methods: {
    toggle_tabs(val) {
      this.$store.dispatch("setCurrentTabAction", val);
    },
  },
  computed: {
    menu() {
      const menu = this.$store.getters.tab_menu;
      return menu;
    },
    currentTab() {
      const current_tab = this.$store.getters.current_tab;
      return current_tab;
    },
  },
};
</script>

<style lang="scss" scoped>
.mobileheader {
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  min-height: 20rem;

  &__top {
    display: flex;
    align-items: center;
    margin-top: 4rem;
  }

  &__burger {
    display: flex;
    flex-direction: column;
    margin-right: 4rem;

    & span {
      background: #000000;
      display: inline-block;
      height: 0.2rem;
      width: 3rem;
      margin: 0.4rem 0;
    }
  }

  &__search {
    position: relative;
    border-radius: 3rem;
    background: rgba(196, 196, 196, 0.5);
    overflow: hidden;

    &--magnify {
      position: absolute;
      top: 0;
      left: 0;
      height: 5.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
    }

    &--magnifybody {
      height: 2.5rem;
      padding-left: 1.3rem;
    }

    &--input {
      background: transparent;
      border: none;
      padding: 1.3rem 1.5rem;
      padding-left: 4.6rem;
      width: 34rem;
      height: 5.5rem;
      outline: none;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  &__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4rem;

    &--btn {
      color: #000000;
      font-size: 1.5rem;
      font-weight: 400;
      background: #fff;
      border-radius: 3rem;
      padding: 0.9rem 1.2rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease-in;

      &.current {
        background: #e22222;
        color: #fff;
      }
    }
  }
}
</style>