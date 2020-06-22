<template>
  <layout>
    <header>
      <div class="container">
        <h1>{{title}}</h1>
      </div>
    </header>

    <div class="container">
      <div class="image-layout">
        <div
          class="image-single outlined hover"
          v-for="(image, index) in images"
          :key="index"
          @click="showImg(index)"
       
        >
          <g-image :src="image.href"    data-aos="fade-up" />
        </div>
      </div>
      <vue-easy-lightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
    </div>
  </layout>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'
export default {
  components: {  'vue-easy-lightbox' : VueEasyLightbox },
  props: ["title", "images"],
  data() {
    return {
      index: 0,
      visible: false
    };
  },
  computed: {
      imgs(){
          return this.images.map(img => {
              return img.href
          })
      }
  },
  methods: {
    getImageUrl(img) {
      return require(img);
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
  &::after {
    content: "";
    width: 70%;
    height: 3px;
    background-color: $primary;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}

.image-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .image-single {
    width: calc(33% - 0.5rem);
    min-width: 260px;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
}
</style>