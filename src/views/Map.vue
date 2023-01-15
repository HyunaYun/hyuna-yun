<template>
  <div class="pt-7">
    <v-row
      class="mb-5 py-3 flex"
      style="height: 80vh"
      justify="space-between"
    >
      <v-spacer
        hidden
        class="d-sm-flex"
      />

      <v-col
        cols="12"
        sm="8"
        class="white rounded-lg mx-sm-0 mx-3"
      >
        <v-row
          class="grey lighten-4 rounded-t-lg pl-2"
        >
          <v-col
            class="d-flex align-self-center"
          >
            <div
              class="red accent-3 rounded-xl mr-2"
              style="width: 15px; height: 15px; cursor: pointer;"
              @click="close()"
            />
            <div
              class="grey lighten-2 rounded-xl mr-2"
              style="width: 15px; height: 15px"
            />
            <div
              class="grey lighten-2 rounded-xl"
              style="width: 15px; height: 15px"
            />
          </v-col>

          <v-col
            class="font-weight-medium pl-0"
          >
            Profile
          </v-col>
        </v-row>

        <v-row class="py-3 px-5">
          Map Page
        </v-row>
      </v-col>

      <v-spacer
        hidden
        class="d-sm-flex"
      />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Profile',

  data() {
    return {

    };
  },

  mounted() {

  },

  methods: {
    close() {
      this.$router.push('/hyuna-yun/main')
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
