<template>
  <div>
    <div class="mobile-sidemenu" id="menu"></div>
    <div id="panel">
      <MobileHeader />
      <Nuxt />
    </div>
    <AddBusinessMobile v-bind:mobilesidenav="mobilesidenav" />
  </div>
</template>

<script>
import AddBusinessMobile from "@/components/mobile/AddBusinessMobile";

export default {
  data() {
    return {
      mobilesidenav: false,
    };
  },
  mounted() {
    import("slideout").then((result) => {
      const Slideout = result.default;
      var slideout = new Slideout({
        panel: document.getElementById("panel"),
        menu: document.getElementById("menu"),
        padding: 256,
        tolerance: 70,
      });

      slideout.on("beforeopen", () => {
        this.mobilesidenav = true;
      });

      slideout.on("beforeclose", () => {
        this.mobilesidenav = false;
      });

      // Toggle button
      document
        .querySelector(".toggle-button")
        .addEventListener("click", function () {
          slideout.toggle();
        });
    });
  },
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;

  @include respond(tab-land) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @include respond(tab-port) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @include respond(big-desktop) {
    font-size: 75%; //1rem = 12, 12/16
  }
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.mobile {
  display: none;

  @include respond(tab-land) {
    display: block;
    //position: relative;
  }
}

.slideout-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 256px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: none;
}

.slideout-panel {
  //position: relative;
  z-index: 1;
  will-change: transform;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}
</style>
