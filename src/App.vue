<template>
  <v-app
    :style="{ backgroundImage : `url(${backgroundImg})`}"
    style="background-repeat: no-repeat; background-size: 100% 100%; overflow: hidden;"
  >
    <v-system-bar
      style="background-color: rgba( 255, 255, 255, 0.4 );"
    >
      <span
        style="font-size: 18px;"
      >{{ time }}</span>
      <span
        class="ml-4"
        style="font-size: 17px; padding-top: 4px"
      >{{ date }}</span>

      <v-spacer />

      <i
        class="fa-solid fa-wifi"
        style="font-size: 17px; padding-bottom: 1px; margin-right: 3px"
      />
      <span
        class="mx-1"
        style="font-size: 18px;"
      > 100%</span>
      <i
        class="fa-solid fa-battery-full"
        style="font-size: 20px; padding-bottom: 1px;"
      />
    </v-system-bar>

    <v-main class="px-sm-15">
      <router-view />

      <v-row
        v-if="getIsUserLogin"
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
              :src="require(`@/assets/img/icon/bottom/${icon}.png`)"
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
          <v-card-title style="font-size: 25px; font-family: apple-bold">
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
                  :src="require(`./assets/img/icon/bottom/${contactTitle}.png`)"
                  style="width: 70%;"
                />
              </v-col>

              <v-col
                class="my-3 align-self-center"
                style="padding: 0"
              >
                <div
                  v-if="contactTitle == 'email' || contactTitle == 'phone' || contactTitle == 'message'"
                  style="font-size: 21px; font-family: apple-bold; color: #393939"
                  class="mb-2"
                >
                  {{ contactTitle }}
                </div>
                <div v-else>
                  <a
                    :href="contactLink"
                    target="_blank"
                    style="color: #393939; text-decoration: none; font-size: 21px; font-family: apple-bold"
                  >{{ contactTitle }}
                    <i class="fa-solid fa-arrow-up-right-from-square" />
                  </a>
                </div>
                <div style="font-size: 19px;">
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

  computed: {
    getIsUserLogin() {
      return this.$store.getters.GET_IS_USER_LOGIN;
    }
  },

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
        this.contactMessage = '+82 10 3658 2924'
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

.v-application {
  font-family: 'apple-basic', sans-serif !important;
}

@font-face {
  font-family: 'apple-basic';
  src: url('./assets/fonts/AppleSDGothicNeoSB.ttf');
}

@font-face {
  font-family: 'apple-bold';
  src: url('./assets/fonts/AppleSDGothicNeoB.ttf');
}

@font-face {
  font-family: 'apple-x-bold';
  src: url('./assets/fonts/AppleSDGothicNeoEB.ttf');
}

</style>
