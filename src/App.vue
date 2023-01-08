<template>
  <v-app
    :style="{ backgroundImage : `url(${backgroundImg})`}"
    style="background-repeat: no-repeat; background-size: 100% 100%; overflow: hidden"
  >
    <v-system-bar
      lights-out
      style="opacity: 0.3"
    >
      <span
        class="text-h6"
        style="color: black"
      >{{ time }}</span>
      <span
        class="ml-4"
        style="color: black; font-size: 18px; font-weight: 550; padding-top: 2px"
      >{{ date }}</span>

      <v-spacer />

      <v-icon style="font-size: 23px; color: black;">
        mdi-wifi
      </v-icon>
      <!-- <v-icon style="font-size: 23px; color: black;">
        mdi-signal-cellular-3
      </v-icon> -->
      <span
        class="text-h6 mx-1"
        style="color: black"
      > 100%</span>
      <v-icon
        style="transform: rotate(90deg); font-size: 27px;  color: black;"
      >
        mdi-battery-charging
      </v-icon>
    </v-system-bar>

    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from './views/Main.vue'

export default {
  name: 'App',

  components: {
    Main
  },

  data: () => ({
    time: '',
    date: '',

    backgroundImg: require('@/assets/img/background-img.png'),

    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Github', icon: 'mdi-github' },
    ],
  }),

  mounted() {
    setInterval(() => {
      let date = new Date();
      let month = date.getMonth() + 1
      let day = date.getDate();
      let d = this.getText(date.getDay())
      let hour = date.getHours();
      let minute = date.getMinutes();

      this.date = `${month}월 ${day}일 ${d}`
      this.time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`
    }, 1000)
  },

  methods: {
    getText(d) {
      switch (d) {
      case 0: return "일요일"
      case 1: return "월요일"
      case 2: return "화요일"
      case 3: return "수요일"
      case 4: return "목요일"
      case 5: return "금요일"
      case 6: return "토요일"
      }
    }
  }
};
</script>

<style>
html {
  overflow: hidden;
}
</style>
