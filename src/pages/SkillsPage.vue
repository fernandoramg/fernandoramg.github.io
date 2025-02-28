<template>
  <div class="row background-web" style="min-height: 100%; height: auto; width: 100%; color: white;">
    <div class="col-4 column justify-evenly" style="height: auto; padding-top: 10px;">
      <div class="container" v-for="t in skillsFer" :key="t">
        <div class="content">
          <div style="color: white;">
            {{ t }}
          </div>
        </div>
      </div>

    </div>
    <div class="col-8 column justify-end">
      <div class="row justify-center q-col-gutter-xl" style="min-height: 100%; padding-top: 50px;">
        <div v-for="x in skills" :key="x" style="margin-right: 50px;">
          <div style="color: white;" class="container2 row">
            <img :src="x.img" style="height: 64px; opacity: 1; margin-left: 0px; margin-top: 0px; position: relative; border-top-left-radius : 20px; background-color: white; "/>
              <div class="col column items-center justify-center">
                {{ x.name }}
              </div>
            </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script >

import { ref } from 'vue';

export default {
  setup () {
    return {
      skillsFer: ['Responsable', 'Analítico', 'Proactivo', 'Creativo', 'Resolución de Problemas'],
      skills: [
        {img: 'public/javas1.png' , name: 'JavaScript'},
        {img: 'public/python1.png', name: 'Python'},
        {img: "public/sql.png", name: 'SQL'},
        {img: "public/vuejs.png", name: 'Vue'},
        {img: "public/reactnative.png", name: 'React Native'},
        {img: "public/flutter.png", name: 'Flutter'},
        {img: "public/expo.png", name: 'Expo'},
        {img: "public/dart.png", name: 'Dart'},
        {img: "public/quasar.png", name: 'Quasar'},
        {img: "public/github1.png", name: 'GIT'},
        {img: "public/figma.png", name: 'Figma'},
        {img: "public/html.png", name: 'HTML'},
        {img: "public/css.png", name: 'CSS'},
        {img: "public/c1.png", name: 'C++'},
        {img: "public/excel.png", name: 'Excel'},


      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.background-web{
  // background: #121212;
  background-image: linear-gradient(to right, #121212 22%, #172c3c )
}

.container{
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-content: center;
  margin-inline: auto;
  overflow: hidden;
  text-align: center;
}
.container::before{
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  background-image: conic-gradient(#FFF4A3 80deg, transparent, transparent, transparent);
  animation: rotate 2s infinite forwards;
}
@keyframes rotate{
  0%{
    transform: rotate(-20deg);
    opacity: 1;
  }
  95%{
    opacity: 1;
  }
  100%{
    transform: rotate(-360deg);
    opacity: 0;
  }
}
.container::after{
  content: "";
  position: absolute;
  width: 92%;
  height: 92%;
  border-radius: 50%;
  top: 0;
  bottom: 0;
  left: 3px;
  margin: auto;
  background-color: #121212;
  outline: 0.5px solid #605f5e;
}
.content{
  position: relative;
  z-index: 2;
}


.container2{
  background-color: #121212;
  box-shadow: 8px 8px 20px #121212;
  border: 1px solid #FFF4A3;
  width: 150px;
  height: 64px;
  border-bottom-right-radius : 20px;
  border-top-left-radius : 20px;
  align-content: center;
  margin-inline: auto;
  overflow: hidden;
  text-align: center;
  opacity: 0.5;
}
// .container2::before{
//   content: "";
//   width: 100%;
//   height: 100%;
//   border-radius: 2%;
//   position: absolute;
//   top: 0;
//   left: 0px;
//   right: 0;
//   bottom: 0;
//   background-image: conic-gradient(#FFF4A3 80deg, transparent, transparent, transparent);
//   animation: rotate2 2s infinite forwards;
// }
// @keyframes rotate2{
//   0%{
//     ransform: rotate(-20deg);
//     opacity: 1;
//   }
//   95%{
//     opacity: 1;
//   }
//   100%{
//     transform: rotate(-360deg);
//     opacity: 0;
//   }
// }
// .container2::after{
//   content: "";
//   position: absolute;
//   width: 92%;
//   height: 92%;
//   border-radius: 2%;
//   top: 0;
//   bottom: 0;
//   left: 3px;
//   margin: auto;
//   background-color: #121212;
//   outline: 0.5px solid #605f5e;
// }
// .content2{
//   position: relative;
//   z-index: 2;
// }

</style>
