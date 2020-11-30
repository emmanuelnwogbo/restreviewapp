<template>
  <div class="jumbotron">
    <div class="jumbotron__body">
      <h1 class="jumbotron__h1">LOGO</h1>
      <div class="jumbotron__search">
        <div class="jumbotron__search--top">
          <div class="jumbotron__search--find">
            <p>Find</p>
          </div>
          <input
            class="jumbotron__search--input"
            type="text"
            placeholder="Restaurant, Delivery, Club, Travel"
          />
          <div class="jumbotron__search--btnarea">
            <div class="jumbotron__search--btn">
              <button class="jumbotron__search--button">Search</button>
              <span class="jumbotron__search--magnify">
                <img src="~assets/svgs/magnify.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
        <div class="jumbotron__search--bottom">
          <p class="jumbotron__search--bottom-label">Advanced Filter</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
};
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 85vh;
  background-image: linear-gradient(
      24deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.2)
    ),
    url("https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2131&q=80");
  background-size: cover;
  background-position: top;
  padding-top: 20rem;
  background-attachment: fixed;

  &__body {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #000000;
  }

  &__h1 {
    font-size: 7.5rem;
    font-weight: 500;
    margin-bottom: 5rem;
    color: #fff;
  }

  &__search {
    &--top {
      flex-shrink: 0;
      background: #fff;
      display: flex;
      align-items: center;
      width: 85rem;
      height: 5rem;
      height: 7rem;
      padding: 2rem 3rem;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
      border-radius: 300rem;
      cursor: pointer;
    }

    &--find {
      font-weight: 500;
      font-size: 3.2rem;
      position: relative;
      padding-right: 1.8rem;

      &::before {
        content: "";
        background: #000000;
        position: absolute;
        right: 0;
        top: 0;
        width: 1.5px;
        height: 100%;
      }
    }

    &--input {
      outline: none;
      border: none;
      width: 60rem;
      height: 100%;
      padding: 1rem 3rem;
      background: transparent;
      display: block;
      font-size: 2rem;
    }

    &--btnarea {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      background: #fff;
      display: flex;
      align-items: center;
      color: #fff;
      border-radius: 3rem;
      padding-right: 1rem;
    }

    &--btn {
      background: $primary-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 17rem;
      border-radius: 3rem;
      overflow: hidden;
      padding: 1rem 2rem;
    }

    &--button {
      color: #fff;
      background: transparent;
      border: none;
      outline: none;
      font-size: 2.5rem;
    }

    &--magnify {
      display: flex;
      height: 2.6rem;
      width: 2.6rem;
      justify-content: center;
      align-items: center;
    }

    &--bottom {
      text-align: center;
      font-size: 2rem;

      &-label {
        text-decoration: underline;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>