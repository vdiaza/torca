<template>
  <section id="services">
    <div class="container">
      <div class="headline right">Servicios</div>
      <div
        class="row"
        v-for="(service, index) in services"
        :key="service.title"
        :class="{'justify-content-end':index%2}"
      >
        <div class="col-lg-9">
          <div class="service-block" data-aos="fade-up">
            <div class="service-image outlined hover">
              <g-image :src="image(service.image)" />
              <div class="overlay"></div>
            </div>
            <div class="service-title">{{service.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#services {
  .justify-content-end .service-block {
    justify-content: flex-end;
    .service-image {
      .overlay {
        background-color: $secondary;
      }
    }
  }
  .service-block {
    position: relative;
    height: 200px;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    padding: 3rem;
    .service-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      .overlay {
        background-color: $primary;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.8;
      }
      img {
        width: 100%;
      }
    }
    .service-title {
      position: relative;
      color: #fff;
      font-size: 2rem;
      font-weight: 600;
      z-index: 5;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      services: [
        { title: "Obras Civiles", image: "obras-civiles.png" },
        { title: "Edificación", image: "edificacion.png" },
        { title: "Montajes", image: "montajes.png" },
        { title: "Reparaciones y Mantención", image: "reparaciones.png" }
      ]
    };
  },
  methods: {
    image(image) {
      return require(`../assets/images/${image}`);
    }
  }
};
</script>