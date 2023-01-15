<template>
  <div
    class="pt-7"
  >
    <v-row
      class="mb-5 flex mx-5 mx-xs-0"
      style="height: 80vh"
      justify="space-between"
    >
      <v-spacer class="d-lg-none" />

      <v-col
        cols="auto"
        lg="8"
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
              :src="require(`../assets/img/icon/main/${icon}.png`)"
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
        class="d-lg-block"
      >
        <v-row
          style="background-color: white; background-color: rgba( 255, 255, 255, 0.3 );"
          class="rounded-xl pa-2 justify-center"
        >
          <v-col
            style="background-color: white; background-color: rgba( 255, 255, 255, 0.8 );"
            class="rounded-xl py-3 px-5"
          >
            <v-row
              class="rounded-t-xl mb-1"
            >
              <v-col cols="auto">
                <v-img
                  src="@/assets/img/icon/main/todo.png"
                  style="width: 30px; height: 30px;"
                />
              </v-col>

              <v-col
                align-self="center"
              >
                <span style="font-size: 18px; padding-top: 5px">To Do List</span>
              </v-col>

              <v-spacer />

              <v-col
                cols="1"
                align-self="center"
              >
                <i
                  class="fa-solid fa-arrow-up-right-from-square"
                  style="cursor: pointer;"
                  @click="moveUrl('todo')"
                />
              </v-col>
            </v-row>

            <v-divider />

            <v-row class="mt-1">
              <v-col
                class="px-5 py-10 text-center"
                style="font-size: 30px"
                cols="4"
              >
                {{ new Date().getMonth() + 1 }}월 {{ new Date().getDate() }}일
              </v-col>
              <v-col align-self="center">
                <div>
                  <div>
                    list
                  </div>
                  <!-- 마지막 인덱스일때 hidden -->
                  <v-divider class="my-2" />
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer class="d-lg-none" />
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Main',

  data() {
    return {
      iconList: ['profile', 'note', 'twitter', 'map', 'dashboard', 'todo', 'App Store', 'setting'],
    };
  },

  computed: {
    getBreakpoint() {
      return this.$vuetify.breakpoint.name;
    }
  },

  watch: {
    getBreakpoint(data) {
      console.log(data);
    }
  },

  mounted() {

  },

  methods: {
    moveUrl(icon) {
      this.$router.push({path: `/hyuna-yun/${icon}`})
    }
  }
};
</script>

<style>
.v-img:hover {
  /* background-color: rgba( 255, 255, 255, 0.3 ); */
  opacity: 0.8;
}
</style>
