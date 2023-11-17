<template>
  <div>
   <miniChat class="d-none d-md-flex d-lg-none"></miniChat>
   <miniChat class="d-none d-lg-flex d-xl-none"></miniChat>
   <miniChat class="d-none d-xl-flex"></miniChat>
   <v-container>
      <div id="servicios"></div>
      <div class="d-flex d-sm-none" style="margin-top: 50px"></div>
      <div class="servicios">
        <div style="width: 100%">
          <v-row>
            <v-col md="6">
              <div class="serviceText">
                <v-card style="border: 1px solid black" width="500">
                <v-card-title>
                  <h1 class="servicesTop">Servicios</h1>
                </v-card-title>
                <v-card-text>
                  <h3>Actualmente contamos con servicios como el cambio de neumáticos y la venta de todo tipo de piezas para su vehículo incluyendo, Motores, Transmisiones automáticas y mecánicas, Rines, Amortiguadores, Micas, Gomas y Volantes.</h3>
                  <br>
                  <h3>Importamos contenedores periódicamente con el fin de mantener todo un inventario de partes japonesas y americanas a su disposición con la calidad que nos caracteriza.</h3>
                  <br>
                  <h3>En caso de desear pertenecer a nuestra cartera de clientes recurrentes le mantendremos informado a respecto de los contenedores y piezas más demandadas próximos a tener existencias.</h3>
                </v-card-text>
              </v-card>
              </div>
            </v-col>
            <v-col md="6" class="d-none d-md-flex d-lg-none">
              <div class="servicesImg">
                <img class="img1" src="/servicios.jpg">
                <img class="img2" src="/goma.jpg">
                <img class="img3" src="/servicio3.jpg">
              </div>
            </v-col>
            <v-col md="6" class="d-none d-lg-flex d-xl-none">
              <div class="servicesImg">
                <img class="img1" src="/servicios.jpg">
                <img class="img2" src="/goma.jpg">
                <img class="img3" src="/servicio3.jpg">
              </div>
            </v-col>
            <v-col md="6" class="d-none d-xl-flex">
              <div class="servicesImg">
                <img class="img1" src="/servicios.jpg">
                <img class="img2" src="/goma.jpg">
                <img class="img3" src="/servicio3.jpg">
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div id="contacto"></div>
      <div class="contacto">
        <div style="width: 100%">
          <v-row cols="12" justify="center">
            <v-col md="5">
              <div style="margin-top: 100px"></div>
                <div class="centerText">
                  <h1><strong>Contáctanos.</strong></h1>
                </div>
              <div style="margin-top: 10px"></div>
              <v-row>
                <v-col md="4" cols="5"><h1>Dirección:</h1></v-col>
                <v-col md="8"><h3>Calle María Montez #185 esquina Marcos Ruiz. Villa Juana, Santo Domingo, Distrito Nacional.</h3></v-col>
              </v-row>
              <v-row>
                <v-col md="4" cols="5"><h1>Email:</h1></v-col>
                <v-col md="8" class="mt-2"><h3>info@lujoma.do</h3></v-col>
              </v-row>
              <v-row>
                <v-col md="4" cols="5"><h1>Teléfono:</h1></v-col>
                <v-col md="8" class="mt-2"><h3>809-792-6178</h3></v-col>
              </v-row>
              <v-row justify="center" cols="12">
                <v-col md="2">
                  <v-icon class="instagram" @click="goIg()" >mdi-instagram</v-icon>
                </v-col>
                <v-col md="2">
                  <v-icon class="facebook">mdi-facebook</v-icon>
                </v-col>
                <v-col md="2">
                  <v-icon class="whatsapp" @click="goWs()">mdi-whatsapp</v-icon>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="5" cols="12">
             <form @submit.prevent="onSubmit">
              <v-card  elevation="6">
                <v-card-text>
                  <v-row>
                    <v-col md="12">
                      <v-text-field 
                        label="Nombre"
                        v-model="sendEmail.nombre"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                <v-row>
                  <v-col md="6">
                    <v-text-field 
                      label="Correo"
                      v-model="sendEmail.correo"
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field 
                      label="Teléfono"
                      v-model="sendEmail.telefono"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col md="12">
                    <v-textarea 
                      label="Comentario"
                      v-model="sendEmail.comentario"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <center>
                  <recaptcha />
                </center>
                <br>
                <v-row justify="center">
                  <v-btn type="submit"  color="#F7C303" style="color: white" >Enviar</v-btn>
                </v-row>
                <br>
                </v-card-text>
              </v-card>
               </form>
            </v-col>
          </v-row>
        </div>
      </div>
      <div id="nosotros" style="height: 80px"></div>
      <div class="nosotros">
        <div style="width: 100%; margin-top: 30px">
          <v-row>
            <v-col md="12">
              <v-card>
                <div style="margin-top: 20px" class="d-flex d-sm-none"></div>
                <div class="encuentranos d-none d-sm-flex">
                  <h2>Encuéntranos</h2>
                </div>
                <v-card-title>
                   <div class="alingrow">
                     <div class="marker">
                        <v-icon>mdi-map-marker-radius</v-icon>
                     </div>
                   </div>
                </v-card-title>
                <v-card-text>
                  <div id="map" class="mapa"></div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </div>
   </v-container>
    <div class="footer">
        <v-container>
          <v-row style="margin-top: 10px">
            <v-col md="4" cols="12">
              <div class="aling">
                <div class="fotterImg">
                  <img src="../static/white.png" />
                </div>
              </div>
            </v-col>
            <v-col md="8" cols="12">
                <h4>
                  En Lujoma Multiservicios estamos comprometidos con la misión de distribuir las mejores piezas y partes del mercado en un tiempo récord a la vez que nos mantenemos al tanto de el buen funcionamiento de las mismas, de no ser así le garantizamos la total devolución de su dinero.
                </h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="4" cols="12">
              <div class="aling">
                <h2>Misión</h2>
                <h4>
                  Convertirnos en distribuidores oficiales de las mejores marcas disponibles en el país con el fin de brindar a nuestros clientes las mejores piezas con los mejores precios. 
                </h4>
              </div>
            </v-col>
            <v-col md="4" cols="12">
             <div class="aling">
                <h2>Visión</h2>
                <h4>
                 Brindar un servicio con la mas alta calidad del mercado manteniendo los precios asequibles que nos caracterizan.
                </h4>
              </div>
            </v-col>
            <v-col md="4" cols="12">
              <div class="aling">
                <h2>Valores</h2>
                <h4>
                 Calidad, Competitividad, Transparencia, Excelencia, Responsabilidad, Lealtad, Trabajo en equipo.
                </h4>
              </div>
            </v-col>
          </v-row>
          <v-row justify="center">
             <h3 style="margin-top: 20px">Developed by LUGOTECH S.R.L.</h3>
          </v-row>
        </v-container>
    </div>
  </div>
</template>

            
<script>
import {Loader, LoaderOptions} from 'google-maps';
import VueRecaptcha from 'vue-recaptcha';
import axios from 'axios'
import Swal from 'sweetalert2'
import miniChat from '../components/miniChat'
export default {
  data(){
    return{
      sendEmail: {
        nombre: null,
        correo: null,
        telefono: null,
        comentario: null
      }
    }
  },
  components: { VueRecaptcha, miniChat },
  async mounted(){
    const loader = new Loader('AIzaSyBEP4tE__xLIpWGWrsG5_Mwx1bx7mjbj8U');
    
    const google = await loader.load();
    let json = JSON.parse('[{"elementType":"geometry.fill","featureType":"administrative","stylers":[{"color":"#d6e2e6"}]},{"elementType":"geometry.stroke","featureType":"administrative","stylers":[{"color":"#cddbe0"}]},{"elementType":"labels.text.fill","featureType":"administrative","stylers":[{"color":"#7492a8"}]},{"elementType":"labels.text.fill","featureType":"administrative.neighborhood","stylers":[{"lightness":25}]},{"elementType":"labels","featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"elementType":"geometry.fill","featureType":"landscape.man_made","stylers":[{"color":"#d6e2e6"}]},{"elementType":"geometry.stroke","featureType":"landscape.man_made","stylers":[{"color":"#cddbe0"}]},{"elementType":"geometry.fill","featureType":"landscape.natural","stylers":[{"color":"#dae6eb"}]},{"elementType":"labels.text.fill","featureType":"landscape.natural","stylers":[{"color":"#7492a8"}]},{"elementType":"all","featureType":"landscape.natural.terrain","stylers":[{"visibility":"off"}]},{"elementType":"labels","featureType":"poi","stylers":[{"visibility":"off"}]},{"elementType":"geometry.fill","featureType":"poi","stylers":[{"color":"#d6e2e6"}]},{"elementType":"labels.text.fill","featureType":"poi","stylers":[{"color":"#588ca4"}]},{"elementType":"labels.icon","featureType":"poi","stylers":[{"saturation":-100}]},{"elementType":"geometry.fill","featureType":"poi.park","stylers":[{"color":"#cae7a8"}]},{"elementType":"geometry.stroke","featureType":"poi.park","stylers":[{"color":"#bae6a1"}]},{"elementType":"geometry.fill","featureType":"poi.sports_complex","stylers":[{"color":"#c6e8b3"}]},{"elementType":"geometry.stroke","featureType":"poi.sports_complex","stylers":[{"color":"#bae6a1"}]},{"elementType":"labels.text.fill","featureType":"road","stylers":[{"color":"#41626b"}]},{"elementType":"labels.icon","featureType":"road","stylers":[{"saturation":-45},{"lightness":10},{"visibility":"on"}]},{"elementType":"geometry.fill","featureType":"road.highway","stylers":[{"color":"#f7fdff"}]},{"elementType":"geometry.stroke","featureType":"road.highway","stylers":[{"color":"#beced4"}]},{"elementType":"geometry.fill","featureType":"road.arterial","stylers":[{"color":"#eef3f5"}]},{"elementType":"geometry.stroke","featureType":"road.arterial","stylers":[{"color":"#cddbe0"}]},{"elementType":"geometry.fill","featureType":"road.local","stylers":[{"color":"#edf3f5"}]},{"elementType":"geometry.stroke","featureType":"road.local","stylers":[{"color":"#cddbe0"}]},{"elementType":"labels","featureType":"road.local","stylers":[{"visibility":"on"}]},{"elementType":"labels.icon","featureType":"transit","stylers":[{"saturation":-70}]},{"elementType":"labels.text.fill","featureType":"transit.line","stylers":[{"color":"#588ca4"}]},{"elementType":"labels.text.fill","featureType":"transit.station","stylers":[{"color":"#008cb5"}]},{"elementType":"geometry.fill","featureType":"transit.station.airport","stylers":[{"saturation":-100},{"lightness":-5}]},{"elementType":"geometry.fill","featureType":"water","stylers":[{"color":"#a6cbe3"}]}]');
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 18.492621, lng: -69.908990},
        zoom: 15,
        styles: json
    });
    new google.maps.Marker({
      position: {lat: 18.492621, lng: -69.908990},
      map: map,
      title: 'Lujoma',
      animation: google.maps.Animation.DROP,
    });
  },
  methods: {
  goIg(){
    window.location = 'https://www.instagram.com/lujoma.multiservice/';
  },
  goWs(){
    window.location = 'https://wa.me/18097926178';
  },
   async onSubmit() {
    try {
        if(this.sendEmail.nombre && this.sendEmail.correo && this.sendEmail.telefono && this.sendEmail.comentario){
        const token = await this.$recaptcha.getResponse()
            let obj = {token: token};
            let response = await axios.post('https://us-central1-ws-lujoma.cloudfunctions.net/hook/validateReCAptchar',obj);
            if(response.data.success){
              await axios.post('https://us-central1-ws-lujoma.cloudfunctions.net/hook/sendEmail',this.sendEmail);
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Correo enviado.',
                showConfirmButton: false,
                timer: 1500
              })
              this.sendEmail =  {
                  nombre: null,
                  correo: null,
                  telefono: null,
                  comentario: null
              };
            }
            // send token to server alongside your form data

            // at the end you need to reset recaptcha
            await this.$recaptcha.reset()
        }
        } catch (error) {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Intentelo nuevamente.',
                showConfirmButton: false,
                timer: 1500
              })
            }
        }
      },
  }
</script>

<style lang="scss">
html{
  scroll-behavior: smooth !important;
  &::-webkit-scrollbar{
    background-color: white;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb{
    background: black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
.instagram{
    font-size: 40px !important;
    color: #C82E8F !important;
    cursor: pointer;
}
.facebook{
    font-size: 40px !important;
    color: #1877F2 !important;
    cursor: pointer;
}
.whatsapp{
    font-size: 40px !important;
    color: #00E676 !important;
    cursor: pointer;
}
.servicesTop{
  margin-top: -37px;
  background-color: white;
}
.centerText{
  width: 100%;
   display: flex;
  justify-content: center;
  align-items: center;
}
.encuentranos{
  width: 220px;

  margin-left: 50px;
  margin-top: -26px;
  background-color: white;
  h2{
  font-size: 35px;
  color: rgba(247, 195, 3,0.7);
  // background: -webkit-linear-gradient( rgba(247, 195, 3,0.7) 50%, #2B2B2B 50%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
   text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
  }
}
.emailicon{
  font-size: 60px !important;
  color: #F7C303 !important;
}
.alingrow{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .marker{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -80px;
    border: 2px solid #f9c403;
    z-index: 1;
    i{
      font-size: 50px;
      color: black;
    }
  }
}
.cardMap{
  border: 1px solid #f9c403 !important;
  height: 70vh;
}
.serviceText{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5vh;
}
.servicesImg{
  width: 100%;
  height: 400px;
   display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  position: relative;
  .img1{
    max-width: 100%;
    max-height: 100%;
    border: 5px solid #F9C403;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
  @keyframes index {
    from{
      z-index: 0;
    }to{
      z-index: 3;
    }
  }
  .img2{
    max-width: 100%;
    max-height: 100%;
    border: 5px solid #F9C403;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: -60px;
    left: 90px;
    right: 0;
    bottom: 0;
     z-index: 0;
    &:hover{
     animation: index .5s forwards;
    }
  }
  .img3{
    max-width: 100%;
    max-height: 100%;
    border: 5px solid #F9C403;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: absolute;
    top: 90px;
    left: 190px;
    right: 0;
    bottom: 0;
     z-index: 0;
    &:hover{
      animation: index .5s forwards;
    }
  }
}
.nosotros{
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contacto{
  min-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.servicios{
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fotterImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  border-top-left-radius: 150px;
  border-top-right-radius: 150px;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  img{
    max-width: 100%;
  }
}
.footer{
  min-height: 400px;
  background-color: #2B2B2B;
  color: white;
  border: 5px solid #F9C403;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 0px;
}
.card{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.mapa{
  height:  63vh;
  width: 100%;
  margin-top: -55px;
}
.aling{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.cardImg{
  width: 100%;
  height: 200px;
  //border-radius: 50%;
  background-color: #F7C303;
  padding: 70px;
  //margin-top: -60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  img{
    max-width: 70%;
  }
}
.personalize{
  min-height: 200px;
  width: 400px;
  box-shadow: 1px 1.5px 3px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  transition: .3s all;
  .text{ 
    padding: 10px;
  }
}
</style>
