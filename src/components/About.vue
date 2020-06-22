<template>
  <section id="about">
    <div class="container">
    <div class="headline right">Sobre Nosotros</div>
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="content" data-aos="fade-up">
            <h3>Somos <span class="primary">lideres</span> en<br>construcción</h3>
            <p>Con 31 años de trayectoria, contamos con el respaldo necesario para realizar todo tipo de proyectos. No dudes en trabajar con nosotros.</p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="bg-block outlined hover">
              <div class="bg-image">
                  <g-image src="@/assets/images/31.png"/>
              </div>
              <div class="overlay"></div>
            <span class="big-number" data-aos="fade-up">31
                <span class="big-number clone">31</span>
            </span>
            <span data-aos="fade-up">años de<br>trayectoria</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#about{
    .bg-block{
        height: 250px;
        color: $white;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            .clone{
                    transform: translate(0px, 0px)!important;
            }
        }
        .overlay{
            background-color: $primary;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: .8;
        }
        .big-number{
            font-size: 120px;
            position: relative;
            .clone{
                color: rgba(0,0,0,0)!important;
                position: absolute;
                top: 0;;
                left: 0;
                -webkit-text-stroke: 1px $white;
                transform: translate(5px, 5px);
                transition: transform .15s ease-in;
            }
        }
        .bg-image{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        span{
            position: relative;
            color: $white;z-index: 10;
            font-size: 18px;
        }
    }
}
</style>