<template>
  <div class="form form__signin">
    <div class="form__body">
      <h2 class="form__signin--title">Login to your account</h2>
      <div class="form__inputareas form__inputareas--bottom">
        <div
          class="form__inputarea form__inputarea--bottom"
          v-for="(item, ind) in area"
          :key="'formitem' + ind"
          v-bind:class="{
            signinpassword: item.label === 'Password',
          }"
        >
          <span class="form__inputarea--label">
            <label for="">{{ item.label }}</label>
          </span>
          <span class="form__inputarea--input">
            <input
              :type="item.label === 'Password' ? 'password' : 'email'"
              class="form__input"
              :placeholder="return_placeholder(item.name)"
              v-model="form_val[ind]"
            />
          </span>
        </div>
      </div>

      <div class="form__signin--forgot">
        <p>Forgot password?</p>
      </div>

      <div class="form__body--buttonarea form__signin--login">
        <button class="form__body--button" @click="sign_in">Login</button>
      </div>

      <div class="form__continuewith">
        <span>or continue with</span>
      </div>

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
    </div>

    <div class="form__right">
      <figure class="form__right--figure">
        <img src="~assets/imgs/login-page.png" alt="" />
      </figure>
    </div>
  </div>
</template>

<script>
import form_mixin from "@/mixins/form";

export default {
  name: "SignInForm",
  data() {
    return {
      form_val: ["", ""],
    };
  },
  watch: {
    signin_input: function (new_val, old_val) {
      this.$store.dispatch("updateSigninInputAction", new_val);
    },
  },
  computed: {
    area() {
      return [
        {
          name: "Email",
          label: "",
        },
        {
          name: "Password",
          label: "Password",
        },
      ];
    },
    signin_input() {
      return {
        identifier: `${this.form_val[0]}`,
        password: `${this.form_val[1]}`,
      };
    },
  },
  methods: {
    sign_in() {
      this.$store.dispatch("signIn");
    },
  },
  mixins: [form_mixin],
};
</script>

<style lang="scss" scoped>
.form {
  &__signin {
    &--title {
      text-align: center;
      font-size: 3.4rem;
      font-weight: 500;
      margin-bottom: 3.2rem;
    }

    &--forgot {
      color: #1b69b1;
      font-size: 1.5rem;
      cursor: pointer;
      text-align: right;
      padding: 0.5rem 0;
    }

    &--login {
      margin-top: 1.4rem;
    }
  }
  &__continuewith {
    font-size: 2rem;
    padding: 2.5rem 0;
    text-align: center;
  }
}
</style>