<template>
  <div class="container">
    <div class="mobile">
      <div class="container__mobile">
        <div class="container__mobile--section1">
          <Track
            v-if="currentTab === 'Top picks'"
            v-bind:track_items="top_picks"
          />
          <MobileNearby v-if="currentTab === 'Nearby'" />
          <MobileBudget v-if="currentTab === 'On a budget'" />
        </div>

        <div class="container__mobile--section2">
          <h2 class="container__mobile--h2">Recently reviewed</h2>
          <div class="container__mobile--recentlyreviewed">
            <MobileReviewedCard
              v-for="(item, index) in recentlyReviewedMobile"
              :key="'reviewedmobile' + index"
              v-bind:item="item"
            />
            <div class="container__seemore">
              <span class="container__seemore--content">
                <p>See more</p>
                <span>
                  <svg>
                    <use
                      xlink:href="~assets/svgs/sprite.svg#icon-keyboard_arrow_right"
                    />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script>
import MobileHeader from "@/components/mobile/MobileHeader";
import Track from "@/components/mobile/Track";
import MobileNearby from "@/components/mobile/MobileNearby";
import MobileBudget from "@/components/mobile/MobileBudget";
import MobileReviewedCard from "@/components/mobile/MobileReviewedCard";
import AddBusinessMobile from "@/components/mobile/AddBusinessMobile";

export default {
  components: {
    MobileHeader,
    Track,
    MobileNearby,
    MobileBudget,
    MobileReviewedCard,
    AddBusinessMobile,
  },
  computed: {
    top_picks() {
      const top_picks = this.$store.getters.top_picks;
      return top_picks;
    },
    currentTab() {
      const current_tab = this.$store.getters.current_tab;
      return current_tab;
    },
    recentlyReviewedMobile() {
      const recently_reviewed = this.$store.getters.recently_reviewed;
      const recently_reviewed_filter = this.$store.getters.recently_reviewed.filter(
        (item) => {
          return recently_reviewed.indexOf(item) <= 3;
        }
      );
      return recently_reviewed_filter;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  &__mobile {
    &--h2 {
      font-size: 2.9rem;
      font-weight: 600;
      color: #000000;
      padding: 3.5rem 2.5rem 1rem;
      background: #e5e5e5;
      margin-bottom: 1rem;
    }

    &--recentlyreviewed {
      padding-bottom: 15rem;
    }

    &--addbusiness {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 15rem;
      width: 100vw;
      z-index: 10;
      background: #e5e5e5;
      display: flex;
      justify-content: center;
      align-items: center;
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
