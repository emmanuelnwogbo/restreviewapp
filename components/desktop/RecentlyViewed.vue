<template>
  <div class="recentlyviewed">
    <h1 class="recentlyviewed__h1">Recently reviewed</h1>
    <div class="recentlyviewed__content">
      <div class="recentlyviewed__content--body">
        <div
          v-for="(item, index) in recently_reviewed"
          :key="index"
          class="recentlyviewed__content--card"
        >
          <figure class="recentlyviewed__content--figure">
            <img :src="item.image" alt="" />
          </figure>
          <div class="recentlyviewed__content--bio">
            <div class="recentlyviewed__content--title">
              <p>{{ item.title }}</p>
            </div>
            <div class="recentlyviewed__content--reviews">
              <div class="recentlyviewed__content--stars">
                <span
                  class="recentlyviewed__content--star"
                  v-for="(n, ind) in item.stars"
                  :key="'star' + ind"
                >
                  <img src="~assets/svgs/goldstar.svg" alt="" />
                </span>
              </div>
              <div class="recentlyviewed__content--reviewcount">
                <p>{{ item.reviews.length }} reviews</p>
              </div>
            </div>
            <div class="recentlyviewed__content--tags">
              <span
                class="recentlyviewed__content--tag"
                v-for="(tag, index) in item.tags"
                :key="'nav' + index"
                >{{
                  item.tags.indexOf(tag) === item.tags.length - 1
                    ? `${tag}`
                    : `${tag}, `
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="recentlyviewed__more">
      <!--<button class="recentlyviewed__more--btn">See more</button>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "RecentlyViewed",
  computed: {
    recently_reviewed() {
      const recently_reviewed = this.$store.getters.recently_reviewed;
      recently_reviewed.length = 3;

      return recently_reviewed;
    },
  },
};
</script>

<style lang="scss" scoped>
.recentlyviewed {
  background: #e5e5e5;

  &__h1 {
    @include sectionHeader;
  }

  &__content {
    display: flex;
    justify-content: center;

    &--body {
      display: flex;
      justify-content: space-between;
      width: 105rem;
    }

    &--card {
      background: #fff;
      border-radius: 3rem 3rem;
    }

    &--figure {
      height: 29rem;
      width: 31rem;
      overflow: hidden;
      border-radius: 3rem 3rem 0 0;
      margin-bottom: 2rem;
    }

    &--h2 {
      font-weight: 700;
      font-size: 3rem;
      width: 31rem;
      color: rgba(0, 0, 0, 0.7);
    }

    &--bio {
      display: flex;
      flex-direction: column;
      height: 13rem;
      padding: 0 2rem;
      color: #000000;
      padding-bottom: 1rem;
    }

    &--title {
      color: $primary-color-blue;
      font-weight: 700;
      font-size: 2.3rem;
    }

    &--reviews {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 1rem 0;
    }

    &--stars {
      margin-right: 1.6rem;
    }

    &--star {
      display: inline-block;
      height: 2.5rem;
      width: 2.5rem;

      &:not(:nth-child(1)) {
        margin-left: 0.9rem;
      }
    }

    &--reviewcount {
      font-weight: 500;
      font-size: 1.3rem;
    }

    &--tags {
      font-weight: 500;
      font-size: 1.3rem;
    }
  }

  @include moreBtn;
}
</style>