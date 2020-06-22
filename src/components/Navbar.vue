<template>
  <nav class="navbar">
    <div class="container">
      <g-link to="/" class="logo">
        <g-image src="@/assets/images/LOGO-TORCA-AMARILLO.png" />
      </g-link>
      <div
        class="menu-toggle"
        :class="{'is-active' : mobileMenu}"
        @click="mobileMenu = !mobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="nav-list" :class="{'is-active' : mobileMenu}">
        <a class="nav__link active" @click.prevent="scroll('#hero')" href="#hero">Inicio</a>
        <a class="nav__link" @click.prevent="scroll('#about')" href="#about">Nosotros</a>
        <a class="nav__link" @click.prevent="scroll('#projects')" href="#projects">Proyectos</a>
        <a class="nav__link" @click.prevent="scroll('#services')" href="#services">Servicios</a>
        <a class="nav__link" @click.prevent="scroll('#contact')" href="#contact">Contacto</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobileMenu: false,
      isMobile: false
    };
  },
  mounted(){
    this.checkWidth()
    window.addEventListener('resize', () => {
     this.checkWidth()
    })
  },
  methods: {
    checkWidth(){
       if(window.innerWidth < 768){
        this.isMobile = true
      }else{
        this.isMobile = false
      }
    },
    scroll(link) {
      this.mobileMenu = false;
      const element = document.querySelector(link);
      const headerOffset = this.isMobile ? -100 : 0;
      console.log(this.isMobile, headerOffset)
      if (element) {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        this.$router.push({ path: "/", hash: link });
      }
    }
  }
};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0px 3px 6px #00000029;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: $white;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      width: 150px;
      padding: 0.5rem;
      display: flex;
      align-items: center;
    }
    .nav-list {
      padding: 2rem 0;
      .nav__link {
        margin-right: 1rem;
        text-transform: uppercase;
        padding: 2rem 0;
        position: relative;
        height: 100%;
        &:last-child {
          margin-right: 0;
        }
        &::before {
          content: "";
          top: 0;
          left: -12.5%;
          right: -12.5%;
          margin: auto;
          height: 3px;
          background-color: $primary;
          position: absolute;
          width: 0%;
          transition: width 0.25s ease;
        }
        &:hover {
          &::before {
            width: 125%;
          }
        }
      }
    }
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
        position: relative;
        width: 30px;
        height: 20px;
        cursor: pointer;
        span {
          display: block;
          width: 30px;
          height: 3px;
          border-radius: 5px;
          background-color: $secondary;
          margin-bottom: 4px;
          transition: all 0.25s ease;
          &:last-child {
            margin-bottom: 0;
          }
        }
        &.is-active {
          span {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            display: none;
            left: 0;
            &:first-child {
              display: block;
              transform: rotate(-45deg);
            }
            &:last-child {
              display: block;
              transform: rotate(45deg);
            }
          }
        }
      }
      .nav-list {
        display: none;
        position: absolute;
        flex-direction: column;
        background-color: #fff;
        width: 100%;
        left: 0;
        top: 100%;
        padding: 0 1rem;
        text-align: center;
        border-bottom: 1px solid $secondary;
        .nav__link {
          padding: 0;
          margin: 0.75rem 0;
          &::before {
            display: none;
          }
        }
        &.is-active {
          display: flex;
        }
      }
    }
  }
}
</style>