<template>
  <!-- <div class="q-px-lg q-py-md" style="min-height: 100%;  width: 100%; color: white;"> -->
    <!-- <div class="row" style="min-height: 100%; height: 100%; background-color: red;"> -->
  <div :class="$q.screen.sm || $q.screen.xs ? 'column background-web' :'row background-web' " style="min-height: 100%; height: auto; min-width: 100%; width: auto; color: white;">
      <div class="col-6 column justify-center">
        <q-timeline :layout="layout" style="color: white;" color="yellow-7">
          <q-timeline-entry heading>
            Licenciatura Matemáticas Aplicadas y Computación

          </q-timeline-entry>

          <q-timeline-entry
          subtitle="2016-2021"
          side="right"
          icon="done_all"

          >
            <div>
              Universidad Nacional Autónoma de México (UNAM) - Facultad de Estudios Superiores Acatlán
            </div>
          </q-timeline-entry>


          <q-timeline-entry heading>Técnico en Soporte y Mantenimiento de Equipo de Cómputo</q-timeline-entry>

          <q-timeline-entry
            subtitle="2013-2016"
            side="left"
            icon="done_all"

          >
            <div>
              Colegio de Estudios Científicos y Tecnológicos del Estado de México
            </div>
          </q-timeline-entry>

        </q-timeline>

      </div>
      <div class="col-6 column items-center justify-center">
        <div style="font-size: 35px;">Certificaciones</div>
        <q-list class="rounded-borders q-pa-md" :style="$q.screen.sm || $q.screen.xs ? 'width: 100vw;' : ''">
          <q-item clickable v-ripple v-for="x in certifications" :key="x" :href="x.url" target="_blank">
            <q-item-section avatar top>
              <q-avatar icon="workspace_premium" color="#172c3c" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">{{ x.name }}</q-item-label>
              <q-item-label caption>{{ x.institution }}</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="arrow_forward" color="white" />
            </q-item-section>
          </q-item>
        </q-list>

        <div style="font-size: 35px;">Badges</div>
        <q-list class="rounded-borders q-pa-md" :style="$q.screen.sm || $q.screen.xs ? 'width: 100vw;' : ''">
          <q-item clickable v-ripple href="https://www.credly.com/users/fernando-ramirez-gonzalez" target="_blank">
            <q-item-section avatar top>
              <q-avatar icon="workspace_premium" color="#172c3c" text-color="white" />
            </q-item-section>

            <q-item-section>
              <q-item-label lines="1">Credly for IBM</q-item-label>
            </q-item-section>

            <q-item-section side>
              <q-icon name="arrow_forward" color="white" />
            </q-item-section>
          </q-item>
        </q-list>


      </div>

  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'


export default {
  setup () {
    const $q = useQuasar()

    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      }),
      certifications: [
        {name: 'Python 101 for Data Science', institution: 'IBM Developer Skills Network', url: 'https://courses.cognitiveclass.ai/certificates/8bacab5ba26e4c4c8db53c9b1490f37a'},
        {name: 'Data Analysis whit Python', institution: 'IBM Developer Skills Network', url: 'https://courses.cognitiveclass.ai/certificates/faa69a3c8919480ba6f8a0af402eb35d'},
        {name: 'Data Visualization with Python', institution: 'IBM Developer Skills Network', url: 'https://courses.cognitiveclass.ai/certificates/01614a318e56433a88800ea3d2b9c56a'},
        {name: 'Introduction to Data Science', institution: 'IBM Developer Skills Network', url: 'https://courses.cognitiveclass.ai/certificates/72fe9de64b214081bc6849f0bc3bc3b5'},
        {name: 'Microsoft SQL Server: Análisis de datos con Tableu', institution: 'Udemy', url: 'https://www.udemy.com/certificate/UC-f2308e5e-42db-4ebd-972d-f0bd333c8310/'},
        {name: 'Taller de Web Scraping para Python', institution: 'Udemy', url: 'https://www.udemy.com/certificate/UC-98413b6d-aa2d-4b84-a981-9512f3915621/'},
        {name: 'Curso Excel y Power BI - Análisis y Visualización de Datos', institution: 'Udemy', url: 'https://www.udemy.com/certificate/UC-958723ba-e394-43a3-90ae-9a71dc398d5c/'},
        {name: 'Transición de gestión de proyectos en cascada a gestión de proyectos Agile', institution: 'LinkedIn', url: 'https://www.linkedin.com/login/es'}
      ],
    }
  }
}

</script>

<style lang="scss" scoped>

.background-web{
  // background: #121212;
  background-image: linear-gradient(to left, #121212 16%, #172c3c )
}
.q-item__label {
  color: white;
}
h3 {
    font-size: 1rem !important;
    font-weight: 800;
    line-height: 3.125rem;
    letter-spacing: normal;
}


</style>
