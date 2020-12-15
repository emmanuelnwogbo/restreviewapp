export default {
  methods: {
    return_placeholder(val) {
      if (val === "Password") {
        return this.$route.name === "signup"
          ? "At least 6 characters"
          : "Password";
      } else if (val === "Confirm Password") {
        return "";
      } else {
        return "Email";
      }
    },
    google_login() {
      window.location = `${this.api_base_url}/connect/google`;
    }
  },
  computed: {
    api_base_url() {
      const base_url = this.$store.getters.base_api_url;

      return base_url;
    }
  }
};
