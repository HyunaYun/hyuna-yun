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

    <v-main class="px-lg-15 px-10">
      <router-view />

      <v-row
        style="height: 75px; background-color: white; background-color: rgba( 255, 255, 255, 0.3 );"
        class="rounded-xl"
      >
        <v-col
          class="align-self-center d-flex justify-center px-5 ml-2"
        >
          <div
            v-for="(icon, i) in iconList"
            :key="i"
            class="mr-4"
          >
            <v-img
              :src="require(`@/assets/img/icon/${icon}.png`)"
              class="rounded-lg"
              style="width: 50px; height: 50px; cursor: pointer;"
              @click="showDialog(icon)"
            />
          </div>
        </v-col>
      </v-row>

      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="text-h5">
            Contact
          </v-card-title>

          <v-card-text>
            <v-row>
              <v-col
                style="padding: 0;"
                class="ml-3 my-3"
                cols="3"
              >
                <v-img
                  :src="require(`./assets/img/icon/${contactTitle}.png`)"
                  style="width: 70%;"
                />
              </v-col>

              <v-col
                class="my-3 align-self-center"
                style="padding: 0"
              >
                <div
                  v-if="contactTitle == 'email' || contactTitle == 'phone' || contactTitle == 'message'"
                  class="text-h6 font-weight-bold"
                >
                  {{ contactTitle }}
                </div>
                <div v-else>
                  <a
                    :href="contactLink"
                    target="_blank"
                    class="text-h6"
                    style="color: #393939; text-decoration: none;"
                  >{{ contactTitle }}
                    <i class="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
                <div class="text-h6 font-weight-regular">
                  {{ contactMessage }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
// import Main from './views/Main.vue'

export default {
  name: 'App',

  components: {
    // Main
  },

  data: () => ({
    time: '',
    date: '',

    backgroundImg: require('@/assets/img/background-img.png'),

    iconList: ['email', 'phone', 'message', 'instagram', 'twitter', 'github'],

    dialog: false,
    contactTitle: 'email',
    contactMessage: '',
    contactLink: '',
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
    },

    showDialog(icon) {
      console.log(icon);
      this.dialog = true;

      this.contactTitle = icon;

      switch (icon) {
      case 'email':
        this.contactMessage = 'hyunayun71@gmail.com'
        break;
      case 'phone':
      case 'message':
        this.contactMessage = '+82 01 3658 2924'
        break;
      case 'instagram':
        this.contactMessage = ''
        this.contactLink = 'https://www.instagram.com/a__a0ah/'
        break;
      case 'twitter':
        this.contactMessage = ''
        this.contactLink = 'https://twitter.com/yunhyeona20'
        break;
      case 'github':
        this.contactMessage = ''
        this.contactLink = 'https://github.com/HyunaYun'
        break;
      }
    },
  }
};
</script>

<style>
html {
  overflow: hidden;
}

a:hover {
  color: #2D7AC4 !important;
}

.link:hover {
  color: #2D7AC4 !important;
}
</style>
