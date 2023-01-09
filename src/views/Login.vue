<template>
  <v-container
    class="mt-15"
  >
    <v-row class="mt-15">
      <v-spacer />

      <v-col
        cols="auto"
      >
        <v-img
          src="@/assets/img/icon/profile.png"
          style="width: 200px; height: 200px; margin:auto; opacity: 0.95;"
          class="rounded-circle mb-5"
        />
        <div
          class="text-h4 font-weight-regular mb-3"
          style="color: white; text-align: center"
        >
          Hyuna Yun
        </div>
        <div class="d-flex">
          <v-text-field
            v-model="password"
            class="text-h6"
            style="color: white; width: 200px"
            hint="hint : first name"
            filled
            rounded
            dense
            type="password"
            @keyup.enter="login()"
          />
          <v-icon
            style="color: white; height: 38px"
            class="text-h4 ml-1"
            @click="login()"
          >
            mdi-arrow-right-circle-outline
          </v-icon>
        </div>
      </v-col>

      <v-spacer />
    </v-row>
    <v-row />
  </v-container>
</template>

<script>
export default {
  name: 'Login',

  data() {
    return {
      password: ''
    };
  },

  computed: {
    getUserPassword() {
      return this.$store.getters.GET_USER_PW;
    }
  },

  mounted() {

  },

  methods: {
    login() {
      if (this.password !== '' && this.password == this.getUserPassword) {
        this.$store.commit("SET_IS_USER_LOGIN", true);
        this.$router.replace("/hyuna-yun/main");
      } else {
        alert("비밀번호를 확인해주세요.")
        return;
      }
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
