<template>
  <div class="form form__signup">
    <div class="form__body">
      <h2 class="form__signup--title">Sign in with</h2>

      <div class="form__socialareas">
        <div class="form__socialarea" @click="google_login">
          <span class="form__socialarea--google form__socialarea--social">
            <img src="~assets/svgs/google-btn.svg" alt="" />
          </span>
        </div>
        <div class="form__socialarea">
          <span class="form__socialarea--fb form__socialarea--social">
            <img src="~assets/svgs/fb-btn.svg" alt="" />
          </span>
        </div>
      </div>

      <div class="form__demarcation">
        <span></span>
        <span>or</span>
        <span></span>
      </div>

      <div class="form__inputareas form__inputareas--top">
        <div
          class="form__inputarea form__inputarea--top"
          v-for="(item, ind) in top_area"
          :key="'formitem' + ind"
        >
          <span class="form__inputarea--label">
            <label for="">{{ item.label }}</label>
          </span>
          <span class="form__inputarea--input">
            <input
              type="text"
              class="form__input"
              :placeholder="item.name"
              v-model="top_area_val[ind]"
            />
          </span>
        </div>
      </div>

      <div class="form__inputareas form__inputareas--bottom">
        <div
          class="form__inputarea form__inputarea--bottom"
          v-for="(item, ind) in bottom_area"
          :key="'formitem' + ind"
        >
          <span class="form__inputarea--label">
            <label for="">{{ item.label }}</label>
          </span>
          <span class="form__inputarea--input">
            <input
              type="text"
              class="form__input"
              :placeholder="return_placeholder(item.name)"
              v-model="bottom_area_val[ind]"
            />
          </span>
        </div>
      </div>

      <div class="form__body--buttonarea" @click="sign_up">
        <button class="form__body--button">Sign up</button>
      </div>
    </div>
    <div class="form__image"></div>
  </div>
</template>

<script>
import form_mixin from "@/mixins/form";
export default {
  name: "SignUpForm",
  data() {
    return {
      top_area_val: ["", ""],
      bottom_area_val: ["", "", ""],
    };
  },
  methods: {
    sign_up() {
      this.$store.dispatch("signUp");
    },
  },
  watch: {
    signup_input: function (new_val, old_val) {
      this.$store.dispatch("updateSignupInputAction", new_val);
    },
  },
  computed: {
    top_area() {
      return [
        {
          name: "First Name",
          label: "",
          model: this.first_name,
        },
        {
          name: "Last Name",
          label: "",
          model: this.last_name,
        },
      ];
    },
    bottom_area() {
      return [
        {
          name: "Email",
          label: "",
        },
        {
          name: "Password",
          label: "Password",
        },
        {
          name: "Confirm Password",
          label: "Confirm Password",
        },
      ];
    },
    signup_input() {
      return {
        username: `${this.top_area_val[0]} ${this.top_area_val[1]}`,
        email: `${this.bottom_area_val[0]}`,
        password: `${this.bottom_area_val[1]}`,
        confirmpassword: `${this.bottom_area_val[2]}`,
      };
    },
  },
  mixins: [form_mixin],
};
</script>

<style lang="scss" scoped>
.form {
  &__signup {
    &--title {
      font-weight: 500;
      font-size: 2.1rem;
      line-height: 2.8rem;
      color: #000000;
      opacity: 0.6;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
}
</style>