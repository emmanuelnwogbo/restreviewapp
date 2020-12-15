<template>
  <div class="auth">{{ user_token }}</div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    const full_path = this.$route.fullPath;
    this.getGoogleUser(full_path);
  },
  methods: {
    getGoogleUser(full_path) {
      axios.get(`${this.api_base_url}${full_path}`).then(
        (res) => {
          const data = res.data;
          const jwt = data.jwt;
          const user = data.user;
          this.$store.dispatch("updateUserTokenAction", jwt);
          this.$store.dispatch("updateUserAction", user);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
  computed: {
    api_base_url() {
      const base_url = this.$store.getters.base_api_url;

      return base_url;
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>