<template>
  <div
    class="pt-7"
  >
    <v-row
      class="mb-5 flex"
      style="height: 80vh"
      justify="space-between"
    >
      <v-spacer />

      <v-col
        cols="auto"
        class="px-md-5 pl-9"
      >
        <v-row>
          <v-col
            v-for="(icon, i) in iconList"
            :key="i"
            cols="auto"
            style="text-align: center; color: #FAFAFA"
            class="mr-1 mr-md-2"
          >
            <v-img
              :src="require(`../assets/img/icon/${icon}.png`)"
              style="width: 70px; height: 70px; cursor: pointer; background-color: white"
              class="mb-1 rounded-xl"
              @click="moveUrl(icon)"
            />
            <span>{{ icon }}</span>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        hidden
      >
        <v-row
          style="background-color: white; background-color: rgba( 255, 255, 255, 0.3 );"
          class="rounded-xl pa-4 justify-center"
        >
          widget
        </v-row>
      </v-col>

      <v-spacer />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Main',

  data() {
    return {
      iconList: ['profile', 'note', 'twitter', 'map', 'dashboard', 'app store', 'setting'],
    };
  },

  mounted() {

  },

  methods: {
    moveUrl(icon) {
      this.$router.push({path: `/hyuna-yun/${icon}`})
    }
  },
};
</script>

<style>
.v-img:hover {
  /* background-color: rgba( 255, 255, 255, 0.3 ); */
  opacity: 0.8;
}
</style>
