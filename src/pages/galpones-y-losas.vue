<template>
  <GalleryPage title="Galpones y Losas" :images="images" />
</template>

<script>
import GalleryPage from "@/layouts/GalleryPage";
export default {
  components: { GalleryPage },
  metaInfo: {
    title: "Galpones y Losas"
  },
  data() {
    return {
      images: []
    };
  },
  beforeMount() {
    this.importAll(
      require.context("../assets/images/galpones-y-losas", true)
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => this.images.push({ href: r(key) }));
    }
  }
};
</script>
