<template>
  <div class="mobilebudget">
    <div
      class="mobilebudget__inputbody"
      v-for="(item, index) in inputs"
      :key="'input' + index"
    >
      <input class="mobilebudget__input" type="number" />
      <span class="mobilebudget__label">{{ item }}</span>
    </div>
    <button class="mobilebudget__button">Search</button>
  </div>
</template>

<script>
export default {
  name: "MobileBudget",
  data() {
    return {
      inputs: ["Min. Amount", "Max. Amount"],
    };
  },
};
</script>

<style lang="scss" scoped>
.mobilebudget {
  min-height: 35rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    ),
    url("https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80");
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__inputbody {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    margin: 1.8rem 0;
  }

  &__label {
    color: #fff;
    font-size: 1.5rem;
    position: absolute;
    right: 0;
    bottom: 1rem;
    padding-right: 1rem;
  }

  &__input {
    background: rgba(196, 196, 196, 0.8);
    border-radius: 1rem;
    border: none;
    height: 5.5rem;

    width: 72vw;
    padding: 1rem 2rem;
    outline: none;
  }

  &__button {
    margin-top: 3rem;
    background: #E22222;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    outline: none;
    border: navajowhite;
    border-radius: 3rem;
    color: #fff;
    padding: 0.8rem 3rem;
    width: 15rem;
    font-size: 2rem;
  }
}
</style>