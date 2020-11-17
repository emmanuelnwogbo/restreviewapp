<template>
  <div class="mobilenearby">
    <div class="mobilenearby__body">
      <MobileMap />
    </div>
  </div>
</template>

<script>
import MobileMap from "@/components/mobile/MobileMap";
export default {
  name: "MobileNearby",
  components: {
    MobileMap,
  },
};
</script>

<style lang="scss" scoped>
.mobilenearby {
  height: 27rem;
  border-radius: 1.5rem;
  padding: 2rem 2.5rem;
  position: relative;

  &__body {
    border-radius: 1.5rem;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>