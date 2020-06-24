<template>
  <section id="gallery">
    <div class="container">
      <div class="headline right">
        <span data-aos="fade-left">Galería</span>
      </div>
      <div class="gallery-slider" data-aos="fade-up">
        <ClientOnly>
          <VueSlickCarousel ref="carousel" v-bind="settings">
            <div class="slide outlined hover" v-for="(image, key) in images" :key="key">
              <img :src="image.pathLong" />
            </div>
          </VueSlickCarousel>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  data() {
    return {
      images: [],
      settings: {
        dots: true,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        centerPadding: "0px",
        centerMode: true,
        responsive: [
          {
            breakpoint: 824,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 548,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  beforeMount() {
    this.importAll(require.context("../assets/images/slides/", true, /\.jpg$/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach(key =>
        this.images.push({ pathLong: r(key), pathShort: key })
      );
    }
  }
};
</script>

<style lang="scss">
#gallery {
  position: relative;
  .slick-slider {
    width: calc(100% - 50px);
    margin-left: auto;
    margin-right: auto;
    .slick-slide {
      & > div {
        margin: 0 0.25rem;
      }
      .slide {
        height: 300px;
      }
    }
    .slick-dots {
      bottom: -3rem;
      @media (max-width: 548px) {
        li {
          width: 10px;
        }
      }
    }
    .slick-prev,
    .slick-next {
      background-color: $primary;
      height: 40px;
      width: 40px;
      z-index: 1;
      &.slick-next::before {
        content: "\276F";
      }
      &::before {
        color: $secondary;
        content: "\276E";
        font-size: 1.2rem;
        // line-height: px;
        font-family: unset;
        color: #fff;
      }
    }
  }
}
</style>