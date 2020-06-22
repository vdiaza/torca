<template>
  <section id="projects">
    <div class="container">
      <div class="headline">Nuestros Proyectos</div>
      <div
        class="row project"
        :class="{'justify-content-end': index%2==0}"
        v-for="(project, index) in projects"
        :key="index"
      >
        <div class="col-lg-1" v-if="index%2==0"></div>
        <div class="col-lg-5" :class="{'order-lg-2':index%2}">
          <g-link :to="project.slug">
            <div class="project-image outlined hover" ref="project_image" data-aos="fade-up">
              <g-image :src="image(project.images[0])" />
            </div>
          </g-link>
        </div>
        <div class="col-lg-5" :class="{'order-lg-1':index%2}">
          <div class="project-content" data-aos="fade-in">
            <h4 class="project-title">{{project.title}}</h4>
            <small class="project-location">{{project.location}}</small>
            <p class="project-description">{{project.description}}</p>
            <g-link
              @mouseover.native="mouseOver(index)"
              @mouseleave.native="mouseLeave(index)"
              class="project-link btn"
              :to="project.slug"
            >Ver más</g-link>
          </div>
        </div>
        <div class="col-lg-1 order-lg-3" v-if="index%2==1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    image(image) {
      return require("../assets/images/" + image);
    },
    mouseOver(index) {
      this.$refs.project_image[index].classList.add("hovered");
    },
    mouseLeave(index) {
      this.$refs.project_image[index].classList.remove("hovered");
    }
  },
  data() {
    return {
      projects: [
        {
          title: "Urbanización Residencial",
          slug: "urbanizacion-residencial",
          images: ["urbanizaciones.png"],
          location: "Chicureo, Región Metropolitana",
          description:
            "Contamos con todo lo necesario para desarrollar, por fin, el proyecto de la casa propia "
        },
        {
          title: "Galpones y Losas",
          slug: "galpones-y-losas",
          images: ["galpones.png"],
          location: "Galpón de Acopio, Camino a Lonquén.",
          description:
            "Trabajamos en todo tipo de Industrias, con los más altos estándares de seguridad y calidad. No existe estructura muy grande para nosotros."
        },
        {
          title: "Oficinas Administrativas y Comerciales",
          slug: "oficinas-administrativas-y-comerciales",
          images: ["oficinas.png"],
          location: "Oficina E2E, Cerrillos.",
          description:
            "Si buscas edificar tu lugar de trabajo, tenemos amplia experiencia en el desarrollo de oficinas administrativas siñiéndonos a un alto estándar de confort y comodidad para desarrollar tus labores."
        },
        {
          title: "Remodelaciones y Reparaciones",
          slug: "remodelaciones-y-reparaciones",
          images: ["remodelaciones.png"],
          location: "Lo Barnechea, Región Metropolitana.",
          description:
            "Dale a una casa deteriorada o con un mal diseño interior una nueva vida. Nosotros podemos mejorar los espacios interiores dándote el respaldo de una atención personalizada."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#projects {
  .project {
    margin: 4rem 0;
    .project-image {
      height: 300px;
      width: 100%;
      background-color: #000;
    }
    .project-location {
      color: $gray-light;
    }
  }
}
</style>