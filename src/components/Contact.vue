<template>
  <section id="contact">
    <div class="container">
    <div class="headline">Contáctanos</div>
      <div class="row">
        <div class="col-lg-6">
          <div class="content" data-aos="fade-in">
            <h3>Ponte en <span class="primary">contacto</span> con nosotros!</h3>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <form class="contact-form">
              <input type="text" placeholder="Nombre">
              <input type="text" placeholder="Teléfono">
              <input type="text" placeholder="Email">
              <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
              <button class="btn">Contactar</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
#contact{
    .contact-form{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        input, textarea{
            width: 100%;
            padding: .5rem;
            // font-size: 1.1rem;
            margin-bottom: 1rem;
            border: 1px solid $secondary;
            font-family: 'Montserrat';
            &::placeholder{
                color: $gray-light;
            }
            button{
                display: inline-block;
            }
        }
    }
}
</style>