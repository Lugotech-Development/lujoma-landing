<template>
    <div class="contChat">
        <div class="fixedComponent" @click="chatActive = !chatActive">
            <div class="titleBar">
                <h2><strong>Chat</strong></h2>
            </div>
             <div class="iconBar">
                <v-icon v-if="!chatActive">mdi-arrow-up-thick</v-icon>
                 <v-icon v-if="chatActive">mdi-arrow-down-thick</v-icon>
            </div>
        </div>
        <template v-if="chatActive && verificate">
            <div class="chatBody">
                <div class="text" id="text">
                    <div v-for="(mensaje,i) in mensajes" :key="i">
                        <div class="contentRight">
                             <div v-if="mensaje.fromMe" class="mensajeFromMe">
                                 <div class="esquina"></div>
                            <template v-if="mensaje.type === 'chat'">
                                <h4>{{mensaje.body}}</h4>
                            </template>
                            <template v-if="mensaje.type === 'image'">
                                <div class="image" @click="openImg(mensaje.body)">
                                    <img :src="mensaje.body" />
                                </div>
                            </template>
                            <template v-if="mensaje.type === 'ptt' || mensaje.type === 'audio'">
                                 <audio id="audio-player" controls>
                                 <source :src="mensaje.body" type="audio/mpeg">
                                    Su navegador no soporta los elementos de audio
                                 </audio>
                            </template>
                            </div>
                        </div>
                        <div class="contentLeft">
                             <div v-if="!mensaje.fromMe" class="mensaje">
                                 <div class="esquina"></div>
                                <template v-if="mensaje.type === 'chat'">
                                    <h4>{{mensaje.body}}</h4>
                                </template>
                                <template v-if="mensaje.type === 'image'">
                                    <div class="image" @click="openImg(mensaje.body)">
                                        <img :src="mensaje.body" />
                                    </div>
                                </template>
                                <template v-if="mensaje.type === 'ptt' || mensaje.type === 'audio'">
                                    <div class="audio">
                                        <audio id="audio-player" controls>
                                        <source :src="mensaje.body" type="audio/mpeg">
                                            Su navegador no soporta los elementos de audio
                                        </audio>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <div class="left">
                        <input v-model="mensaje" id="mensaje" placeholder="Escribe un mensaje" @keydown.enter="enviarMsj" />
                    </div>
                    <template v-if="!isSending">
                        <div class="right" @click="enviarMsj">
                            <v-icon>mdi-send</v-icon>
                        </div>
                    </template>
                    <template v-else>
                         <div class="right">
                            <v-progress-circular
                                indeterminate
                                color="black"
                            ></v-progress-circular>
                        </div>
                    </template>
                </div>
            </div>
        </template>
        <template v-if="chatActive && !verificate" >
             <div class="chatBody" style="background: white; justify-content: flex-start; padding: 10px;">
                 <div class="imgTop">
                     <img src="../static/LujomaFinal.png">
                 </div>
                 <div class="textCenter">
                     <h5>Por favor digite su nombre y número telefónico para iniciar una conversación.</h5>
                 </div>
                 <div class="btns">
                     <v-text-field v-model="nombre" solo placeholder="Nombre"></v-text-field>
                     <v-text-field v-model="telefono" style="margin-top: -10px" solo placeholder="Teléfono"></v-text-field>
                 </div>
                 <div>
                     <v-btn color="black" v-bind:disabled="validate" style="color: white" @click="validateCredentials">Iniciar</v-btn>
                 </div>
            </div>
        </template>
    </div>
</template>

<script>
import db from 'firebase'
import swal from 'sweetalert2'
import axios from 'axios'
    export default {
        data(){
            return{
                chatActive: false,
                verificate: false,
                nombre: null,
                telefono: null,
                mensajes: [],
                mensaje: null,
                isSending: false,
                chatId: null
            }
        },
        computed: {
            validate(){
                if(this.nombre && this.telefono){
                    return false;
                }
                return true;
            }
        },
        methods: {
            telephoneCheck: function(str) {
                var isphone = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(str);
                return isphone;
            },
            async validateCredentials(){
                if(this.nombre && this.telefono){
                    if(this.telephoneCheck(this.telefono)){
                        try{
                            this.chatId = `${this.telefono}@c.us${this.makeid(8)}`;
                            await db.auth().signInAnonymously();
                            await db.firestore().collection('conversacion').doc(`${this.chatId}`).collection('mensajes').orderBy('time').limit(50)
                            .onSnapshot(querySnap => {
                              this.mensajes = [];
                              this.scroll();
                              querySnap.forEach(doc => {
                                 this.mensajes.push(doc.data()); 
                              })
                              this.scroll();
                            })
                            this.verificate = true;
                            setTimeout(()=>{document.getElementById("mensaje").focus()},100);
                        }catch(e){

                        }
                    }else {
                       swal.fire({ position: 'center', icon: 'error', title: 'Teléfono no valido',showConfirmButton: false, timer: 1500}) 
                    }
                }else {
                  swal.fire({ position: 'center', icon: 'error', title: 'Datos no validos',showConfirmButton: false, timer: 1500})
                }
            },
            openImg(url){
                window.open(url);
            },
            scroll() {
                let mensajeList = document.getElementById('text');
                mensajeList.scrollBy(0, mensajeList.scrollHeight);

            },
            makeid(length) {
                var result = '';
                var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                var charactersLength = characters.length;
                for (var i = 0; i < length; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;
            },
            async enviarMsj() {
                
                if (!this.mensaje || this.isSending || !this.telefono || !this.nombre) return;

                this.isSending = true;
                let detalle = {
                    id: `${false}_${this.chatId}_${this.makeid(6)}`,
                    body: this.mensaje,
                    fromMe: false,
                    self: 0,
                    isForwarded: 0,
                    author: this.chatId,//'chatId del usuario logeado',
                    time: (new Date().getTime() / 1000),
                    chatId: this.chatId,//'chatId del usuario logeado',
                    type: 'chat',
                    senderName: this.nombre,//'nombre del usuario logeado',
                    caption: null,
                    quotedMsgBody: null,
                    chatName: this.telefono,//'telefono formateado',
                    destinatario: 2
                }

                let data = {
                    messages: [detalle],
                    instanceId: 0,
                    destinatario: 2
                }

                 try {
                     console.log(data);
                    await axios.post('https://us-central1-ws-lujoma.cloudfunctions.net/hook/wsMessage', data)
                    this.mensaje = '';
                    this.isSending = false;
                    document.getElementById("mensaje").focus();
                } catch (error) {
                    console.log(error)
                    this.isSending = false;
                }

            },
        }
    }
</script>

<style lang="scss" scoped>
.audio{
    width: 200px;
    height: 60px;
    audio{
      max-width: 100%;
      max-height: 100%;
    }
}
.image{
    width: 100px;
    height: 100px;
    img{
        max-width: 100%;
        max-height: 100%;
        cursor: pointer;
    }
}
.contentLeft{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
.mensaje{
    position: relative;
    min-height: 10px;
    min-width: 20px !important;
    background-color: #DCF8C6;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-top: 10px;
    display: inline-block;
    box-shadow: 1px 1.5px 3px rgba(0,0,0,0.1);
    .esquina{
        position: absolute;
        bottom: 0px;
        right: -4px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 15px solid #DCF8C6; 
        border-right: 5px solid transparent; 
    }
} 
}
.contentRight{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
.mensajeFromMe{
    position: relative;
    min-height: 10px;
    min-width: 20%;
    max-width: 200px;
    background-color: white;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: 10px;
    box-shadow: 1px 1.5px 3px rgba(0,0,0,0.1);
    .esquina{
        position: absolute;
        bottom: 0px;
        left: -3px;
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-top: 5px solid transparent;
        border-bottom: 15px solid white; 
        border-right: 5px solid transparent; 
    }
}
}
.btns{
    width: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.textCenter{
    text-align: center;
    margin-top: 5px;
}
.imgTop{
    height: 80px;
    img{
        max-width: 100%;
        max-height: 100%;
    }
}
@keyframes upBar {
    from{
      height: 0px;  
    }
    to{
      height: 350px;
    }
}
.chatBody{
    animation: upBar .2s forwards;
    width: 100%;
    height: 350px;
    border: 2px solid #FACF33;
    border-bottom-color: transparent;
    border-top: transparent;
    background: white;
    background-image: url("../static/chat.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
        width: 100%;
        min-height: 290px;
        max-height: 700px;
        overflow-y: auto;
        padding: 15px;
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
    .box{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #F0F0F0;
        padding: 5px;
        .left{
            width: 80%;
            height: 100%;
            background-color: white;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
            input{
                outline: none;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
                width: 100%;
                min-height: 100%;
                padding: 10px;
            }
        }
        .right{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;
            border-top-right-radius: 30px;
            border-bottom-right-radius: 30px;
            i{
                cursor: pointer;
                color: black;
            }
        }
    }
}
.titleBar{
    color: #FACF33;
    margin-top: 5px;
}
.iconBar{
    i{
        color: #FACF33;
        margin-top: 5px;
    }
}
.contChat{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 20px;
    z-index: 5;
    width: 300px;
}

.fixedComponent{
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 50px;
    width: 100%;
    background-color: black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: 2px solid #FACF33;
    border-bottom-color: transparent;
    padding: 10px;
}
</style>