<template>
  <div class="column justify-center background-web" style="height: 100%; width: 100%; ">
    <!-- <div class="row justify-center">
      <div class="col" style="background-color: red;">
        Hola, mi nombre es Fernando Ramirez Gonzalez1
      </div>
      <div class="col" style="background-color: indianred;">
        <q-img src="../assets/FernandoRG.png" style="height: 200px;"/>
      </div>
    </div> -->
    <!-- <div style="display: table;"> -->
      <!-- <div class="animation-write" style="color: white;">
              Soy desarrollador FrontEnd<span class="animation-write2">&#160;</span>
            </div> -->
    <!-- </div> -->

      <div class="row justify-around" v-if="!$q.screen.xs && !$q.screen.sm">
        <div class="col-6" style="align-content: center;" >
          <!-- <q-img src="../assets/background1.gif" loading="lazy"> -->
          <div style="font-size: 35px; color: #BFA181;">
            Hola, soy Fernando Ramirez Gonzalez 1
          </div>
          <!-- <p class="animation-write" style="color: white;">
            Soy desarrollador FrontEnd
          </p> -->
          <div class="column">
            <span style="color: white;">
              <!-- Matemático y Computólogo -->
            </span>
            <i style="color: white;">
              Apasionado por la computación, el análisis de datos y las matemáticas así como también dar solución a problemas que conlleven estas disciplinas.
            </i>
          </div>
          <div class="animation-write" style="color: #BFA181; font-size: 22px;">
              Soy FullStack . <span class="animation-write2" style="margin-left: 20px;">  &#160;</span>
            </div>
          <!-- </q-img> -->
        </div>
        <div class="col-4" >
          <div class="circle-neon">
            <!-- <span class="box" style="--i:1"></span>
            <span class="box" style="--i:2"></span>
            <span class="box" style="--i:3"></span>
            <span class="box" style="--i:4"></span>
            <span class="box" style="--i:5"></span>
            <span class="box" style="--i:6"></span>
            <span class="box" style="--i:7"></span>
            <span class="box" style="--i:8"></span> -->

            <!-- <div class="circle-neon" style="width: 32%;
              height:62%; margin-left: -1%; margin-top: -0.5%; border-style: dotted;
              "/> -->

              <q-img class="col" src="../../public/FernandoG.png" style="height: 102%; mask-image: linear-gradient(black 60%, transparent); margin-left: -10px"/>
            </div>
            <!-- <div style="margin-top: -12vw;">
              <div class="linea"/>
              <div class="linea"/>
              <div class="linea"/>
            </div> -->

          </div>
      </div>

      <div v-if="$q.screen.sm || $q.screen.xs ">
        <div class="row justify-center">
            <div class="circle-neon">
          <!-- <div class="circle-neon" style="width: 32%;
          height:62%; margin-left: -1%; margin-top: -0.5%; border-style: dotted;
          "/> -->

          <q-img class="col" src="../../public/FernandoG.png" style="height: 102%; mask-image: linear-gradient(black 60%, transparent);"/>

          </div>
          <!-- <div class="linea"/> -->
        </div>
        <div class="justify-center" style="margin-top: 14vw;">
          <!-- <q-img src="../assets/background1.gif" loading="lazy"> -->
          <div style="font-size: 4.5vw; color: #BFA181; font-family: 'Raleway'; text-align: center;">
            Hola, soy Fernando Ramirez Gonzalez
          </div>
          <!-- <p class="animation-write" style="color: white;">
            Soy desarrollador FrontEnd
          </p> -->
          <div class="column">
            <span style="color: white; text-align: center; font-size: 3.2vw;">
              <!-- Matemático y Computólogo -->
            </span>
            <i style="color: white; text-align: center; font-size: 3.2vw;">
              Apasionado por la computación, el análisis de datos y las matemáticas así como también dar solución a problemas que conlleven estas disciplinas.
            </i>
          </div>
          <div class="row justify-center">
            <div class="animation-write" style="color: #BFA181; font-size: 3.2vw;">
                Soy FullStack . <span class="animation-write2" style="margin-left: 20px;">  &#160;</span>
              </div>
          </div>
          <!-- </q-img> -->
        </div>
      </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss" scoped>

.background-web{
  // background-color: #121212;
  // background: radial-gradient(#383838, #121212 60%);
  // background-image: radial-gradient(
  //   farthest-corner at 10px 10px,
  //   #383838 0%,
  //   #121212 40%
  // );

  background: #121212;
  background: radial-gradient(at right top, #172c3c, #121212 60%);
  // background-color: #0a2128;
  // background-color: #0a1d28;
}

.circle-neon{
  border: 3px solid #fff;
  border-radius: 50%;
  padding: 0.4em;
  top: 22%;
  box-shadow: 0 0 .4rem #fff,
              0 0 .4rem #fff,
              0 0 5rem #0f78c3,
              0 0 2rem #FFF4A3,
              0 0 4rem #FFF4A3,
              inset 0 0 2rem #FFF4A3;
  // position: absolute;
  // z-index: 1;
  width: 32rem;
  height:32rem;
  margin-left: 1%;
  margin-top: 1%;
  // LA SECUANCIA IMPORTA
  @media (max-width: $breakpoint-sm){
    width: 25rem;
    height:25rem;
  }
  @media (max-width: $breakpoint-xs){
    width: 12rem;
    height:12rem;
  }
}

.animation-write{

  // border-right: .15em solid #18BDEC;
  // width: 0;
  // right: 0;
  // white-space: nowrap;
  // animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
  // overflow: hidden;

  position: relative;
	float: left;
	// background: tomato;
	color: #fff;
	// font-size: 2.5em;
}
.animation-write2{
  position:absolute;
  right:0;
  width:0;
  background: #121212;
  border-left: .15em solid #FFF4A3;
  animation: typing 4s steps(20) infinite alternate;
}
.linea{
  width: 600px;
  margin-top: 150px;
  margin-left: -40px;
  height: 4px;
  background-color: #FFF4A3;
  opacity: 0.6;
  transform: rotate(-40deg);
  box-shadow: 0 0 .1rem #fff,
              0 0 .1rem #fff,
              0 0 1rem #0f78c3,
              0 0 1rem #FFF4A3,
              0 0 1rem #FFF4A3,
              inset 0 0 1rem #FFF4A3;
}

.circle-neon .box{
  border: 3px solid #fff;
  border-radius: 50%;

  box-shadow: 0 0 .4rem #fff,
              0 0 .4rem #fff,
              0 0 5rem #0f78c3,
              0 0 2rem #FFF4A3,
              0 0 4rem #FFF4A3,
              inset 0 0 2rem #FFF4A3;
  position: absolute;
  width: 32rem;
  height:32rem;

  transform: translate(-50%,-50%);

  animation-name: spin;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  // LA SECUANCIA IMPORTA
  @media (max-width: $breakpoint-sm){
    width: 25rem;
    height:25rem;
  }
  @media (max-width: $breakpoint-xs){
    width: 12rem;
    height:12rem;
  }
}

@keyframes spin{
  50%{
    transform: translate(-50%, -50%) rotateZ(calc(80deg * var(--i)));
    border-color: #fff;
    border-radius: 50%;
    width: 30%;
  }
}


@keyframes typing {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

// @keyframes blink{
//   50% { border-color: transparent;}
// }
</style>
