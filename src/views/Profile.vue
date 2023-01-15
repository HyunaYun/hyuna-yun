<template>
  <div
    class="pt-7"
    style="height: 780px"
  >
    <v-row
      class="mb-5 py-3 flex"
      style="height: 80vh"
      justify="space-between"
    >
      <v-spacer
        hidden
        class="d-md-flex"
      />

      <v-col
        cols="12"
        md="8"
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

        <v-row
          class="py-3 px-5"
        >
          <v-col
            cols="4"
            align="center"
          >
            <v-img
              src="@/assets/img/hyuna.jpg"
              class="rounded-lg"
              style="width: 50vw"
            />
          </v-col>
          <v-col class="d-flex align-self-center">
            <div
              style="text-align: right"
              class="mr-5"
            >
              <div>이름</div>
              <div>생년월일</div>
              <div>전화번호</div>
              <div>주소</div>
            </div>

            <div>
              <div>윤 현아</div>
              <div>1997. 07. 01</div>
              <div>+82 10 3658 2924</div>
              <div>경기도 안산시 상록구</div>
            </div>
          </v-col>
        </v-row>

        <v-row class="px-5">
          <v-col cols="12">
            <v-card
              class="overflow-y-auto"
              max-height="350"
              flat
            >
              <div>
                <div
                  style="font-family: apple-x-bold"
                  class="mb-1"
                >
                  학력사항
                </div>
                <div
                  style="border: 1px solid #DADADA"
                  class="rounded-lg px-3 py-2"
                >
                  text
                </div>
              </div>
              <div class="mt-5">
                <div
                  style="font-family: apple-x-bold"
                  class="mb-1"
                >
                  경력사항
                </div>
                <div
                  style="border: 1px solid #DADADA"
                  class="rounded-lg px-3 py-2"
                >
                  text
                </div>
              </div>
              <div class="mt-5">
                <div
                  style="font-family: apple-x-bold"
                  class="mb-1"
                >
                  보유기술
                </div>
                <div
                  style="border: 1px solid #DADADA"
                  class="rounded-lg px-3 py-2"
                >
                  text
                </div>
              </div>
              <div class="mt-5">
                <div
                  style="font-family: apple-x-bold"
                  class="mb-1"
                >
                  자기소개서
                </div>
                <div
                  style="border: 1px solid #DADADA"
                  class="rounded-lg px-3 py-2"
                >
                  text
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-spacer
        hidden
        class="d-md-flex"
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
