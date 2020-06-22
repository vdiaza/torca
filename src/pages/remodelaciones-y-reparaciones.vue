<template>
  <GalleryPage title="Remodelaciones y Reparaciones" :images="images" />
</template>

<script>
import GalleryPage from "@/layouts/GalleryPage";
export default {
  components: { GalleryPage },
  metaInfo: {
    title: "Remodelaciones y Reparaciones"
  },
  data() {
    return {
      images: []
    };
  },
  beforeMount() {
    this.importAll(
      require.context("../assets/images/remodelaciones-y-reparaciones", true)
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => this.images.push({ href: r(key) }));
    }
  }
};
</script>
