<template>
  <div class="login">
    <SignInForm />
  </div>
</template>

<script>
import SignInForm from "@/components/desktop/SignInForm";

export default {
  name: "SignIn",
};
</script>

<style lan="scss" scoped>
.login {
  min-height: 100vh;
  padding: 10rem 9rem 0rem 9rem;
}
</style>