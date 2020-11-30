<template>
  <div class="toppicks">
    <h1 class="toppicks__h1">Top picks</h1>
    <div class="toppicks__content">
      <div class="toppicks__content--body">
        <div
          v-for="(item, index) in top_picks"
          :key="index"
          class="toppicks__content--card"
        >
          <figure class="toppicks__content--figure">
            <img :src="item.image" alt="" />
          </figure>
          <h2 class="toppicks__content--h2">{{ item.title }}</h2>
        </div>
      </div>
    </div>
    <div class="toppicks__more">
      <button class="toppicks__more--btn">See more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopPicks",
  computed: {
    top_picks() {
      const top_picks = this.$store.getters.top_picks;
      top_picks.length = 3;

      return top_picks;
    },
  },
};
</script>

<style lang="scss" scoped>
.toppicks {
  background: rgba(196, 196, 196, 0.2);

  &__h1 {
    padding: 2.7rem 0 2.9rem;
    text-align: center;
    font-size: 2.8rem;
    text-transform: uppercase;
  }

  &__content {
    display: flex;
    justify-content: center;

    &--body {
      display: flex;
      justify-content: space-between;
      width: 105rem;
    }

    &--figure {
      height: 29rem;
      width: 31rem;
      overflow: hidden;
      border-radius: 3rem;

      margin-bottom: 2rem;
    }

    &--h2 {
      font-weight: 700;
      font-size: 3rem;
      width: 31rem;
      color: rgba(0, 0, 0, 0.7);

      /*white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding-bottom: 2rem;*/
    }
  }

  @include moreBtn;
}
</style>