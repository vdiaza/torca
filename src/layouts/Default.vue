<template>
  <div class="layout">
    <Navbar />
    <slot/>
    <footer>
      © 2019 Constructora Torca Limitada, Lo Barnechea, Santiago, Chile.
    </footer>
  </div>
</template>

<script>
import "@/assets/sass/main.scss";
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
footer{
  background-color: $secondary;
  color: $white;
  padding: 1.5rem;
  text-align: center;
  margin-top: 6rem;;
  font-size: 14px;
}
</style>
