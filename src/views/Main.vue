<template>
  <div class="pt-7 px-10 px-lg-15">
    <v-row
      class="mb-5 flex"
      style="height: 80vh"
      justify="space-between"
    >
      <v-col
        cols="12"
        lg="8"
        class="px-md-5"
      >
        <v-row>
          <v-col
            v-for="(icon, i) in iconList"
            :key="i"
            cols="auto"
            style="text-align: center"
          >
            <v-img
              :src="require(`../assets/img/icon/${icon}.png`)"
              style="width: 70px; height: 70px;"
              class="mb-1"
              @click="showTooltip(icon)"
            />
            <span>{{ icon }}</span>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        hidden
        lg="d-flex"
      >
        <v-row
          style="background-color: white; background-color: rgba( 255, 255, 255, 0.3 );"
          class="rounded-xl pa-4 justify-center"
        >
          widget
        </v-row>
      </v-col>
    </v-row>



    <v-row
      style="height: 75px; background-color: white; background-color: rgba( 255, 255, 255, 0.3 );"
      class="rounded-xl"
    >
      <v-col
        class="align-self-center d-flex justify-center px-5"
      >
        <div
          v-for="(icon, i) in iconList"
          :key="i"
          class="mr-4"
        >
          <v-img
            :src="require(`../assets/img/icon/${icon}.png`)"
            style="width: 50px; height: 50px;"
            @click="showTooltip(icon)"
          />
        </div>
        <!--<div class="mr-4">
          <v-img
            src="../assets/img/icon/email.png"
            style="width: 50px; height: 50px;"
          />
        </div>
        <div class="mr-4">
          <v-img
            src="../assets/img/icon/phone.png"
            style="width: 50px; height: 50px;"
          />
        </div>
        <div class="mr-4">
          <v-img
            src="../assets/img/icon/message.png"
            style="width: 50px; height: 50px;"
          />
        </div>
        <div class="mr-4">
          <v-img
            src="../assets/img/icon/skill-app-store.png"
            style="width: 50px; height: 50px;"
          />
        </div>
        <div class="mr-4">
          <v-img
            src="../assets/img/icon/instagram.png"
            style="width: 50px; height: 50px;"
          />
        </div>
        <div class="mr-4">
          <v-img
            src="../assets/img/icon/tweeter-1.png"
            style="width: 50px; height: 50px;"
            class="rounded-lg"
          />
        </div>-->
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Main',

  data() {
    return {
      iconList: ['setting', 'email', 'phone', 'message', 'app store', 'instagram', 'twitter'], 
    };
  },

  mounted() {

  },

  methods: {
    showTooltip(icon) {
      console.log(icon);
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
