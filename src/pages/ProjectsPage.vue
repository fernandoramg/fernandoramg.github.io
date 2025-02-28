<template>
  <div class="column justify-evenly items-center background-web" style="min-height: 100%; height: auto; width: 100%; color: white;">
    <div class="row justify-center q-col-gutter-xl q-px-sm">
      <!-- <q-intersection
      transition="scale"
      v-for="x in projects"
      :key="x"
      > -->
      <div v-for="x in projects" :key="x">
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
          <!-- <q-img src="../assets/backgroundpc.png" class="background-web" style="height: 200px; width: 400px;"> -->
              <img class="cardcontainer" :src="x.image" loading="lazy" :style="`width: ${x.sizew}; height: 68%; padding-bottom: 5px;`"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div :class="x.size">{{ x.name }}</div>
                <!-- <div class="text-subtitle2">by John Doe</div> -->
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="dataDialog(true, x.name, x.textDialog, x.image2, x.sizewDialog, x.repositorio, x.url)" />
              </q-card-section>
              <!-- <div class="absolute-bottom text-subtitle2 text-center" style="background-color: #FFF4A3; opacity: 0.2;">
                <div class="column" style="color: red; font-size: 16px;">
                  Title
                  <q-btn class="glossy" no-caps rounded color="deep-orange" label="Ver más" style="width: 50%;"  @click="alert = true" />
                </div>
              </div> -->
          <!-- </q-img> -->
            <!-- <q-img src="../assets/Pr1.gif" loading="lazy" style="width: 22%; height: 88%; background-image: url(../assets/backgroundpc.png);"/> -->
          <!-- <q-img src="../assets/Pr1.gif">
            <div class="absolute-bottom text-subtitle2 text-center">
              Title
            </div>
          </q-img> -->

        </q-card>
      </div>
      <!-- </q-intersection> -->
      <q-dialog v-model="alert">
        <q-card style="background-color: white; opacity: 0.9; border-radius: 8px; box-shadow: 2px 2px 20px #FFF4A3;">
          <q-card-section class="row justify-center">
            <div class="text-h6">{{ titleDialog }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none q-pb-none row" style="height: 380px;">
            <div class="col-6 row items-center justify-center">
              <img :src="imageDialog" loading="lazy" :style="`width: ${sizeWDialog}; height: 100%; opacity: 1;`"/>
            </div>
            <div class="col-6 column justify-center" style="text-align: justify; font-size: 16px; padding-inline: 10px;">
              {{ textDialog }}
              <div class="row items-center justify-center" v-if="repositorio == true" style="margin-top: 5px;">
                <q-btn class="glossy" text-color="black" no-caps color="yellow-7" label="Ver..." icon-right="description"  size="sm" :href="url" target="_blank"/>
              </div>
            </div>
          </q-card-section>

          <q-card-actions align="right">

            <q-btn text-color="black" no-caps rounded color="yellow-7" label="Cerrar"  size="sm"  v-close-popup />

          </q-card-actions>
        </q-card>
      </q-dialog>


      <!-- <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr2.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection>
      <q-intersection
      transition="scale"
      >
        <q-card class="q-ma-sm row justify-center card" style="height: 280px; width: 300px; padding-block: 2px; background-color: transparent; box-shadow: 2px 2px 20px #FFF4A3;">
              <img class="cardcontainer" src="../assets/Pr4.gif" loading="lazy" style="width: 28%; height: 68%; padding-bottom: 5px;"/>
              <q-card-section class="column justify-center items-center" style="width: 300px;">
                <q-separator color="primary" style="width: 100%;" />
                <div class="text-h6">Our Changing Planet</div>
                <q-btn class="glossy" text-color="black" no-caps rounded color="yellow-7" label="Ver más"  size="sm"  @click="alert = true" />
              </q-card-section>
        </q-card>
      </q-intersection> -->
    </div>
    <!-- <div class="row justify-center q-gutter-sm">
      <q-intersection
        v-for="index in 10"
        :key="index"
        transition="scale"
        class="example-item"
      >
        <q-card flat bordered class="q-ma-sm">
          <img src="https://cdn.quasar.dev/img/mountains.jpg">

          <q-card-section>
            <div class="text-h6">Card #{{ index }}</div>
            <div class="text-subtitle2">by John Doe</div>
          </q-card-section>
        </q-card>
      </q-intersection>
    </div> -->
  </div>
</template>

<script >

import { ref } from 'vue';

export default {
  setup () {
    return {
      projects: [
        {name: 'App Reportes', size: 'text-h6', image: 'public/Pr1.gif', image2: 'public/Pr1.gif', sizew: '28%', sizewDialog: '65%', textDialog: 'Aplicación hecha en Flutter con lenguaje de programación Dart para sistemas IOS y ANDROID, la app va dirigida a sistemas de reportes, se muestra una aplicación fluida con diferentes temas y widgets como también mejorando la experiencia del usuario.', repositorio: false},
        {name: 'Onboarding', size: 'text-h6', image: 'public/Pr4.gif', image2: 'public/Pr4.gif', sizew: '28%', sizewDialog: '65%', textDialog: 'Onboarding realizado para sistemas IOS y ANDROID utilizando el framework Flutter de Google y el lenguaje de programación Dart, gestionando animaciones para mejorar la experiencia del usuario.', repositorio: false },
        {name: 'App Zilean', size: 'text-h6', image: 'public/Pr2.gif', image2: 'public/Pr2.gif', sizew: '28%', sizewDialog: '65%', textDialog: 'Aplicación hecha para sistemas IOS y ANDROID. Utilizando Flutter con el lenguaje de programación DART. La aplicación persenta varias vistas y widgets animados así el usuario podrá obtener información detallada.', repositorio: false },
        {name: 'App Zentinela', size: 'text-h6', image: 'public/appzentinela.gif', image2: 'public/appzentinela.gif', sizew: '28%', sizewDialog: '65%', textDialog: 'Aplicación hecha en React Native utilizando el lenguaje de programación JavaScript, de igual manera para la comunicación con el backend se utiliza NodeJS y MongoDB.', repositorio: false },
        {name: 'Base de Datos', size: 'text-h6', image: 'public/db2.jpg', image2: 'public/db1.jpg', sizew: '100%', sizewDialog: '100%', textDialog: 'Base de Datos Distribuida COVID-19. En este proyecto se emplearon los datos de COVID-19 de la página oficial del gobierno de México al 1 de junio de 2020 y se creo una base de datos como de igual manera en su forma distribuida para el análisis y consulta de la misma utilizando SQL Server.', repositorio: true, url: 'https://github.com/Shionfer0M/Distributed_DataBase_COVID-19_Mexico' },
        {name: 'Programación - Python', size: 'text-h6',image: 'public/programmingpython.jpg', image2: 'public/programmingpython2.jpg', sizew: '100%', sizewDialog: '100%', textDialog: 'Programación Lineal. El siguiente programa es para la resolución de problemas que conlleven optimización o así mismo problemas estocásticos mediante programación lineal utilizando python.', repositorio: true, url: 'https://github.com/Shionfer0M/PE_PROGRAMMING' },
        {name: 'Modelor Normal en R - Análisis de Datos', size: 'text-h7', image: 'public/modelor.jpg', image2: 'public/modelor2.jpg', sizew: '100%', sizewDialog: '100%', textDialog: '', repositorio: true, url: 'https://drive.google.com/file/d/11lHqkawjviC4J6IiEUASJQw00H7FSipC/view?usp=drive_link'},
        {name: 'Modelo Binomial en R - Análisis de Datos', size: 'text-h7', image: 'public/modelob.jpg', image2: 'public/modelob2.jpg', sizew: '100%', sizewDialog: '100%', textDialog: '', repositorio: true, url: 'https://drive.google.com/file/d/1Kuzk7MBYQcbGT2SoojD19Q-7QFHkrlmp/view?usp=drive_link'},
        {name: 'Regresión Lineal Múltiple con SAS', size: 'text-h7', image: 'public/modelosas.jpg', image2: 'public/modelosas.jpg', sizew: '100%', sizewDialog: '100%', textDialog: '', repositorio: true, url: 'https://drive.google.com/file/d/1xwwpoHU3UYfkivvRQ8_apwJ6sUzAYQ-P/view?usp=drive_link' },
        {name: 'Reportes con Power BI - Análisis de Datos', size: 'text-h7', image: 'public/reportspowerbi.jpg', image2: 'public/reportspowerbi.jpg', sizew: '100%', sizewDialog: '100%', textDialog: '', repositorio: false }

      ],
      alert: ref(false),
      titleDialog: ref(''),
      textDialog: ref(''),
      imageDialog: ref(''),
      sizeWDialog: ref(''),
      repositorio: ref(''),
      url: ref('')
    }
  },
  methods: {
    dataDialog(alert, titleDialog, textDialog, imageDialog, sizeWDialog, repositorio, url){
      this.alert = alert;
      this.titleDialog = titleDialog;
      this.textDialog = textDialog;
      this.imageDialog = imageDialog;
      this.sizeWDialog = sizeWDialog;
      this.repositorio = repositorio;
      this.url = url;
    }
  }
}
</script>

<style lang="scss" scoped>

.background-web{
  // background: #121212;
  background: linear-gradient(#172c3c, #121212 40%)

}

.example-item{
  height: 290px;
  width: 290px;
}

.card{
  transition: 0.5s ease;
  cursor: pointer;
}
.container:hover > :not(:hover){
  opacity: 0.3;
}
.card:hover{
  transform: scale(1.2);
}

// .cardcontainer{
//   transition: 0.5s ease;
//   cursor: pointer;
// }
// .cardcontainer:hover{
//   transform: scale(1.4);
// }

</style>
