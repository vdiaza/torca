<template>
  <GalleryPage title="Urbanización Residencial" :images="images" />
</template>

<script>
import GalleryPage from "@/layouts/GalleryPage";
export default {
  components: { GalleryPage },
  metaInfo: {
    title: "Urbanización Residencial"
  },
  data() {
    return {
      images: []
    };
  },
  beforeMount() {
    this.importAll(
      require.context("../assets/images/urbanizacion-residencial", true)
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => this.images.push({ href: r(key) }));
    }
  }
};
</script>
