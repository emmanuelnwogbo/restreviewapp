<template>
  <div class="signup">
    <SignUpForm />
  </div>
</template>

<script>
import SignUpForm from "@/components/desktop/SignUpForm";

export default {
  name: "SignUp",
};
</script>

<style lang="scss" scoped>
.signup {
  min-height: 100vh;
  padding: 10rem 9rem 0rem 9rem;
}
</style>