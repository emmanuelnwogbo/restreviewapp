<template>
  <div class="mobilereviewedcard">
    <div class="mobilereviewedcard__left">
      <figure class="mobilereviewedcard__left--img">
        <img :src="item.image" alt="" />
      </figure>
    </div>
    <div class="mobilereviewedcard__right">
      <div class="mobilereviewedcard__right--title">
        <p>{{ item.title }}</p>
      </div>
      <div class="mobilereviewedcard__review">
        <div class="mobilereviewedcard__review--stars">
          <span
            class="mobilereviewedcard__review--star"
            v-for="(n, ind) in item.stars"
            :key="'star' + ind"
          >
            <img src="~assets/svgs/goldstar.svg" alt="" />
          </span>
        </div>
        <div class="mobilereviewedcard__review--reviews">
          <p>{{ item.reviews.length }} reviews</p>
        </div>
      </div>
      <div class="mobilereviewedcard__right--tags">
        <span v-for="(tag, index) in item.tags" :key="'nav' + index">{{
          item.tags.indexOf(tag) === item.tags.length - 1
            ? `${tag}`
            : `${tag}, `
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileReviewedCard",
  props: {
    item: Object,
  }
};
</script>

<style lang="scss" scoped>
.mobilereviewedcard {
  overflow: hidden;
  display: flex;
  height: 15rem;
  align-items: center;
  padding: 3rem 0 3rem 2.5rem;
  border-bottom: solid 0.1rem rgba(0, 0, 0, 0.2);

  &:nth-child(4) {
    border-bottom: solid 0.1rem transparent;
  }

  &__left {
    width: 14rem;
    overflow: hidden;

    &--img {
      border-radius: 2rem;
      overflow: hidden;
      height: 12rem;
    }
  }

  &__right {
    height: 12rem;
    padding-left: 2rem;
    padding-top: 0.5rem;

    &--title {
      font-weight: 500;
      font-size: 2.3rem;
      line-height: 2.1rem;
      margin-bottom: 1rem;
      color: #2D5FAA;
    }

    &--tags {
      font-size: 1.5rem;
      line-height: 1.4rem;
      font-weight: 500;
      color: #000000;
    }
  }

  &__review {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: flex-start;

    &--reviews {
      font-size: 1.5rem;
      font-weight: 500;
    }

    &--stars {
      display: flex;
      margin-right: 1rem;
    }

    &--star {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
}
</style>