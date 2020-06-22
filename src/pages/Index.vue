<template>
  <Layout>
    <Hero />

    <About />

    <Projects />

    <Services />

    <Contact />

    <Gallery />
  </Layout>
</template>

<script>
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
export default {
  components: {
    Hero,
    About,
    Projects,
    Services,
    Contact,
    Gallery
  },
  metaInfo: {
    title: "Inicio"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
