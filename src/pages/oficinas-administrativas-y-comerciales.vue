<template>
  <GalleryPage title="Oficinas Administrativas y Comerciales" :images="images" />
</template>

<script>
import GalleryPage from "@/layouts/GalleryPage";
export default {
  components: { GalleryPage },
  metaInfo: {
    title: "Oficinas Administrativas y Comerciales"
  },
  data() {
    return {
      images: []
    };
  },
  beforeMount() {
    this.importAll(
      require.context("../assets/images/oficinas-administrativas-y-comerciales", true)
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach(key => this.images.push({ href: r(key) }));
    }
  }
};
</script>
