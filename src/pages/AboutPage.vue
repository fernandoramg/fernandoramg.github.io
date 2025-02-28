<template>
  <div class="column justify-evenly items-center background-web" style="height: 100%; width: 100%;">
    <div class="circle-neon">


        <q-img class="col" src="../assets/FernandoG.png" style="height: 100%; mask-image: linear-gradient(black 60%, transparent);"/>


    </div>
    <div class="column items-center">
      <span style="color: white;">
        Matemático y Computólogo 11
      </span>
      <i style="color: white;">
        Apasionado por la computación, el análisis de datos y las matemáticas así como también dar solución a problemas que conlleven estas disciplinas.
      </i>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'AboutPage'
});
</script>

<style lang="scss" scoped>

.background-web{
  background: #121212;
}

.circle-neon{
  border: 3px solid #fff;
  border-radius: 50%;
  box-shadow: 0 0 .4rem #fff,
              0 0 .4rem #fff,
              0 0 5rem #0f78c3,
              0 0 2rem #FFF4A3,
              0 0 4rem #FFF4A3,
              inset 0 0 2rem #FFF4A3;
  width: 26rem;
  height:26rem;
  margin-left: 1%;
  margin-top: 1%;
  // LA SECUANCIA IMPORTA
  @media (max-width: $breakpoint-sm){
    width: 22rem;
    height:22rem;
  }
  @media (max-width: $breakpoint-xs){
    width: 12rem;
    height:12rem;
  }
}

</style>
