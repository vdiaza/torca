<template>
  <header id="hero">
    <div class="container">
      <div class="hero-large-block" data-aos="fade-left" data-aos-delay="800" data-aos-duration="2000"></div>
      <div class="col-md-6">
        <div class="hero-content" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="2000">
          <h1>Obras Civiles, Montajes Y Restauraciones</h1>
          <h4>Expertos en Construcción</h4>
        </div>
      </div>
      <div class="hero-image outlined">
        <g-image src="@/assets/images/hero.png" />
      </div>
    </div>
  </header>
</template>


<style lang="scss">
#hero {
  position: relative;
  min-height: 550px;
  @media (min-width: 768px) {
    min-height: 625px;
  }
  .hero-large-block {
    width: 100%;
    height: 300px;
    background-color: $primary;
    position: absolute;
    z-index: -1;
    background-image: url(~@/assets/images/LOGO-TORCA-GRIS-LETRAS.png);
    background-position: -5% 0;
    background-size: contain;
    background-repeat: no-repeat;
    @media (min-width: 768px) {
      height: 500px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      // background: #fff;
      // animation: enter 0.5s linear forwards;
    }
    @keyframes enter {
      0% {
        width: 100%;
      }
      100% {
        width: 0%;
      }
    }
  }
  .hero-content {
    padding: 1rem;
    color: $white;
    width: 100%;
    margin-top: 12rem;
    padding-top: 3rem;
    text-transform: uppercase;
    @media (min-width: 480px) {
      padding: 3rem;
    }
    @media (min-width: 768px) {
      height: 500px;
      margin-top: 8rem;
      padding-top: 10rem;
    }
    @media (max-width: 800px) {
      h1 {
        font-size: 2rem;
      }
    }
  }
  .hero-image {
    background-color: #1a5883;
    height: 600px;
    position: absolute;
    top: -10rem;
    right: 0;
    width: 90%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -5;
    @media (min-width: 768px) {
      z-index: 1;
      width: 50%;
    }
    img {
      object-fit: cover;
      min-width: 100%;
      min-height: 100%;
    }
  }
}
</style>