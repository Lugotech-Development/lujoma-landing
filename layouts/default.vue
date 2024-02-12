<template>
  <v-app dark>
    <div class="d-flex d-sm-none">
    <v-navigation-drawer
    disable-resize-watcher
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
           <strong><v-icon>{{ item.icon }}</v-icon></strong>
          </v-list-item-action>
          <v-list-item-content>
            <strong><v-list-item-title v-text="item.title" /></strong>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    </div>
    <v-app-bar
    fixed
      app
        elevate-on-scroll
        class="navBar"
      :class="{'vavWihte': scrollPosition > 20}"
    >
    <div class="navImg d-none d-sm-flex" style="max-height: 55px" @click="toTop">
      <img v-if="scrollPosition > 20" src="../static/LujomaFinal.png" />
      <img v-if="scrollPosition < 20" src="../static/white.png" />
    </div>
    <div class="d-flex d-sm-none">
        <v-icon @click="drawer = true" :class="{'colorMenu': scrollPosition > 20}" style="color: white; font-size: 1">mdi-menu</v-icon>
    </div>
    <div class="d-flex d-sm-none center">
      <div class="navImg2" style="max-height: 80px" @click="toTop">
       <img v-if="scrollPosition > 20" src="../static/LujomaFinal.png" />
       <img v-if="scrollPosition < 20" src="../static/white.png" />
    </div>
    </div>
    <v-spacer />
      <v-col md="1" class="d-none d-sm-flex">
        <h3 class="navText"><a href="#inicio">Inicio</a></h3>
      </v-col>
      <v-col md="1" class="d-none d-sm-flex">
        <h3 class="navText"><a href="#servicios">Servicios</a></h3>
      </v-col>
      <v-col md="1" class="d-none d-sm-flex">
         <h3 class="navText"><a href="#contacto">Contacto</a></h3>
      </v-col>
      <v-col md="1" class="d-none d-sm-flex">
        <h3 class="navText"><a href="#nosotros">Mapa</a></h3>
      </v-col>
    </v-app-bar>
     <div id="inicio"></div>
    <v-main>

          <div class="d-none d-xl-flex" style="position: relative; margin-top: -70px;">
          <v-carousel  height="1025" hide-delimiters show-arrows-on-hover cycle  :show-arrows="true">
            <div class="heroText pt-15" style="width: 100%;height: 1025px;">
              <div class="textContainer mt-15 pt-15 pl-15" style="width:70%;">
                <div class="title mb-15" style="font-size: 64px!important;line-height: 74px!important;">
                  ¡Descubre todo lo que tu vehículo necesita en Multiservicios Lujoma!
                </div>
                <div class="description" style="font-size: 28px!important;line-height: 38px!important;">
                  Somos tu destino para el cuidado automotriz, ofreciendo una amplia selección de piezas de calidad, incluso opciones de segunda mano para aquellos que buscan precios más accesibles.
                  <br><br>
                  Además de productos de alta gama, brindamos servicios de productos de alta gama, brindamos servicios de mantenimiento, asesoramiento experto y envío rápido.
                </div>
              </div>
            </div>
          <v-carousel-item 
          >
          <img src="/carusel/slice1.jpg" style="width:100%;height:1025px;"/>
          </v-carousel-item>
            <v-carousel-item 
              >
              <img src="/carusel/slice8.jpg" style="width:100%;height:1025px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice7.jpg" style="width:100%;height:1025px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice10.jpg" style="width:100%;height:1025px;"/>
          </v-carousel-item>
        </v-carousel>
        </div>

        <div class="d-none d-lg-flex d-xl-none" style="position: relative; margin-top: -70px;">
          <v-carousel  height="615" hide-delimiters show-arrows-on-hover cycle  :show-arrows="true">
          <div class="heroText pt-15" style="width: 100%;height: 800px;">
            <div class="textContainer mt-15 pt-15 pl-15" style="width:70%;">
              <div class="title mb-10" style="font-size: 43px!important;line-height: 50px!important;">
                ¡Descubre todo lo que tu vehículo necesita en Multiservicios Lujoma!
              </div>
              <div class="description" style="font-size: 18px!important;line-height: 21px!important;">
                Somos tu destino para el cuidado automotriz, ofreciendo una amplia selección de piezas de calidad, incluso opciones de segunda mano para aquellos que buscan precios más accesibles.
                <br><br>
                Además de productos de alta gama, brindamos servicios de productos de alta gama, brindamos servicios de mantenimiento, asesoramiento experto y envío rápido.
              </div>
            </div>
          </div>
          <v-carousel-item 
          >
          <img src="/carusel/slice1.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
            <v-carousel-item 
              >
              <img src="/carusel/slice8.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice7.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice10.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
        </v-carousel>
        </div>

        <div class="d-none d-md-flex d-lg-none" style="position: relative; margin-top: -70px;">
          <v-carousel  height="615" hide-delimiters show-arrows-on-hover cycle  :show-arrows="true">
            <div class="heroText pt-15" style="width: 100%;height: 800px;">
            <div class="textContainer mt-15 pt-15 pl-15" style="width:70%;">
              <div class="title mb-10" style="font-size: 43px!important;line-height: 50px!important;">
                ¡Descubre todo lo que tu vehículo necesita en Multiservicios Lujoma!
              </div>
              <div class="description" style="font-size: 18px!important;line-height: 21px!important;">
                Somos tu destino para el cuidado automotriz, ofreciendo una amplia selección de piezas de calidad, incluso opciones de segunda mano para aquellos que buscan precios más accesibles.
                <br><br>
                Además de productos de alta gama, brindamos servicios de productos de alta gama, brindamos servicios de mantenimiento, asesoramiento experto y envío rápido.
              </div>
            </div>
          </div>
          <v-carousel-item 
          >
          <img src="/carusel/slice1.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
            <v-carousel-item 
              >
              <img src="/carusel/slice8.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice7.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice10.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
        </v-carousel>
        </div>

       

        <div class="d-none d-sm-flex d-md-none" style="position: relative; margin-top: -70px;">
          <v-carousel  height="615" hide-delimiters show-arrows-on-hover :show-arrows="true">
          <div class="heroText pt-15" style="width: 100%;height:615px;background-size: cover;">
            <div class="textContainer mt-15 pt-10 px-4" style="width:90%;">
              <div class="title mb-10" style="font-size: 32px!important;line-height:42px!important;">
                ¡Descubre todo lo que tu vehículo necesita en Multiservicios Lujoma!
              </div>
              <div class="description" style="font-size: 20px!important;line-height: 22px!important;">
                Somos tu destino para el cuidado automotriz, ofreciendo una amplia selección de piezas de calidad, incluso opciones de segunda mano para aquellos que buscan precios más accesibles.
                <br><br>
                Además de productos de alta gama, brindamos servicios de productos de alta gama, brindamos servicios de mantenimiento, asesoramiento experto y envío rápido.
              </div>
            </div>
          </div>
          <v-carousel-item 
          >
          <img src="/carusel/slice1.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
            <v-carousel-item 
              >
              <img src="/carusel/slice8.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice7.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice10.jpg" style="width:100%;height:800px;"/>
          </v-carousel-item>
        </v-carousel>
        </div>


        <div class="d-flex d-sm-none" style="position: relative; margin-top: -70px;">
          <!-- cycle -->
          <v-carousel  height="400" hide-delimiters show-arrows-on-hover :show-arrows="true">
          <!-- <div class="imgCenter d-none d-sm-flex" :class="{'imgCenterGo': scrollPosition > 20}">
            <img src="/LujomaFinal.png" />
          </div> -->
          <div class="heroText pt-15" style="width: 100%;height:400px;background-size: cover;">
            <div class="textContainer mt-15 pt-0 px-4" style="width:100%;">
              <div class="title mb-4" style="font-size: 16px!important;line-height:26px!important;">
                ¡Descubre todo lo que tu vehículo necesita en Multiservicios Lujoma!
              </div>
              <div class="description" style="font-size: 12px!important;line-height: 14px!important;">
                Somos tu destino para el cuidado automotriz, ofreciendo una amplia selección de piezas de calidad, incluso opciones de segunda mano para aquellos que buscan precios más accesibles.
                <br><br>
                Además de productos de alta gama, brindamos servicios de productos de alta gama, brindamos servicios de mantenimiento, asesoramiento experto y envío rápido.
              </div>
            </div>
          </div>
          <v-carousel-item 
          >
          <img src="/carusel/slice1.jpg" style="width:100%;height:400px;"/>
          </v-carousel-item>
            <v-carousel-item 
              >
              <img src="/carusel/slice8.jpg" style="width:100%;height:400px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice7.jpg" style="width:100%;height:400px;"/>
          </v-carousel-item>
          <v-carousel-item 
              >
              <img src="/carusel/slice10.jpg" style="width:100%;height:400px;"/>
          </v-carousel-item>
        </v-carousel>
        </div>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  components: {
    Flickity
  },
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
       itemss: [
          {
            src: '/carusel/slice10.jpg',
          },
          {
             src: '/carusel/slice8.jpg',
          },
          {
             src: '/carusel/slice7.jpg',
          },
          {
              src: '/carusel/slice1.jpg',
          },
        ],
      items: [
        {
          icon: 'mdi-home',
          title: 'Inicio',
          to: '#inicio'
        },
        {
          icon: 'mdi-handshake-outline',
          title: 'Servicios',
          to: '#servicios'
        },
         {
          icon: 'mdi-cellphone',
          title: 'Contacto',
          to: '#contacto'
        },
         {
          icon: 'mdi-map-marker',
          title: 'Mapa',
          to: '#nosotros'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      scrollPosition: null
    }
  },
  mounted(){
    window.addEventListener('scroll', this.updateScroll);
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    toTop(){
      window.location = '#inicio';
    }
}
}
</script>

<style lang="scss">
.v-window__next{
  z-index: 99!important;
}
.v-window__prev{
  z-index: 99!important;
}

.v-navigation-drawer{
  z-index: 999!important;
}

.navBar{
  z-index: 999!important;
}
</style>

<style lang="scss" scoped>
@keyframes off{
  from{ opacity: 1;}
  to{ opacity: 0;}
}
.colorMenu{
  color: black !important;
}
.center{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgCenter{
    transition: .2s all;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top: 50%;
    margin-top: -100px;
    width: 200px;
    height: 200px;
    background-color: rgba(2555,255,255,1);
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 15px;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
  .imgCenterGo{
    animation: off .3s forwards;
    transition: .2s all;
    position: absolute;
    top: -2%; left: -2%;
    width: 250px;
    height: 100px;
    background-color: rgba(2555,255,255,1);
    z-index: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    opacity: .3;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
   .textoFlotante{
      position: absolute;
      top: 50px; left: 50px;
   }
   .textoFlotante1{
     position: absolute;
     color: white;
     left: 180px;
     top: 150px;
     width: 550px;
     background-color: rgba(0, 0, 0, 0.3);
     backdrop-filter: saturate(180%) blur(20px);
     padding: 20px;
     border-top-right-radius: 10px;
     border-top-left-radius: 10px;
     border-bottom-right-radius: 10px;
     border-bottom-left-radius: 10px;
   }
   .textoFlotante2{
     position: absolute;
     color: white;
     right: 130px;
     top: 170px;
     width: 500px;
     background-color: rgba(0, 0, 0, 0.3);
     backdrop-filter: saturate(180%) blur(20px);
     padding: 20px;
     border-top-right-radius: 10px;
     border-top-left-radius: 10px;
     border-bottom-right-radius: 10px;
     border-bottom-left-radius: 10px;
   }
   .textoFlotante3{
     position: absolute;
     color: white;
     right: 280px;
     top: 190px;
     width: 700px;
     background-color: rgba(0, 0, 0, 0.3);
     backdrop-filter: saturate(180%) blur(20px);
     padding: 20px;
     border-top-right-radius: 10px;
     border-top-left-radius: 10px;
     border-bottom-right-radius: 10px;
     border-bottom-left-radius: 10px;
   }
   .textoFlotante4{
     position: absolute;
     color: white;
     right: 180px;
     top: 150px;
     width: 600px;
     background-color: rgba(0, 0, 0, 0.3);
     backdrop-filter: saturate(180%) blur(20px);
     padding: 20px;
     border-top-right-radius: 10px;
     border-top-left-radius: 10px;
     border-bottom-right-radius: 10px;
     border-bottom-left-radius: 10px;
   }
   .navImg2{
     width: 130px;
     img{
       max-width: 100%;
     }
   }
   .navImg{
     width: 140px;
     img{
       max-width: 100%;
     }
   }
   .navText{
     cursor: pointer;
     color: white;
     text-align: center;
   }
    .navBar{
      width: 100%;
      height: 70px;
      background-color: rgba(255, 255, 255, .2) !important;
      // background-color: rgba(255, 255, 255, 1) !important;
      backdrop-filter: saturate(180%) blur(20px);
      z-index: 999;
       a{
        color: white;
        text-decoration: none;
      }
    }
    .vavWihte{
      width: 100%;
      height: 70px;
      background-color: white !important;
       a{
        color: black;
        text-decoration: none;
      }
    }

    .heroText{
      position: absolute;
      z-index: 9;
      background: url('/hero.svg') no-repeat;
      background-size: contain;
      color: #FFF;

      .title{
        width: 80%;
        font-weight: 700!important;
        letter-spacing: 0em!important;
        text-align: left;
      }

      .description{
        width: 68%;
        font-weight: 400!important;
        letter-spacing: 0em!important;
        text-align: justified!important;
      }
    }

    
</style>
