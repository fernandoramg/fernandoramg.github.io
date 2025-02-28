<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #121212; height: 100%">
    <q-header >
      <q-toolbar class="text-white" style="background-color: #121212;">
      <q-btn flat @click="drawer = !drawer" round dense icon="menu" v-show="$q.screen.xs || $q.screen.sm"/>
      <div class="q-ml-xl" style="font-weight: 600; font-size: 18px">Fernando RG</div>
      <q-space />

      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs v-model="slide" shrink v-show="!$q.screen.xs && !$q.screen.sm">
        <q-route-tab name="tab1" label="Inicio" :to="{path: '/'}" exact style="color: #FFF4A3;"/>
        <!-- <q-tab name="tab1" label="Home" style="color: #178582;" /> -->
        <!-- <q-tab name="tab2" label="Educación" style="color: #FFF4A3;"/> -->
        <q-route-tab name="tab2" label="Formación" :to="{name: 'education'}" exact style="color: #FFF4A3;"/>
        <q-route-tab name="tab3" label="Habilidades" :to="{name: 'skills'}" exact style="color: #FFF4A3;"/>
        <q-route-tab name="tab4" label="Portafolio" :to="{name: 'portfolio'}" exact style="color: #FFF4A3;"/>
        <q-route-tab name="tab5" label="Contacto" :to="{name: 'contact'}" exact style="color: #FFF4A3;"/>
      </q-tabs>
      <!-- <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list> -->
    </q-toolbar>
    </q-header>

    <q-drawer
      v-show="!$q.screen.xs || !$q.screen.sm"
      v-model="drawer"
      class="bg-black text-grey-1 column no-wrap q-pt-lg"
    >

      <div class="row justify-center">
          <div class="circle-neon">
          <q-img class="col" src="../../public/FernandoG.png" style="height: 105%; mask-image: linear-gradient(black 60%, transparent);"/>
          </div>
        </div>

      <q-list class="q-pt-xl">
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

    </q-drawer>
    <!-- <q-drawer
      v-model="drawer"
      bordered
      v-show="drawer"
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <!-- <q-page-container>
      <router-view />
    </q-page-container> -->


    <q-carousel
      v-model="slide"
      vertical
      transition-prev="slide-down"
      transition-next="slide-up"
      swipeable
      animated
      height="100vh"
      style="padding-top: 4.5vh; background-color: #121212"
    >
      <q-carousel-slide name="tab1">
        <IndexPage/>
      </q-carousel-slide>
      <q-carousel-slide name="tab2">
        <EducationPage/>
      </q-carousel-slide>
      <q-carousel-slide name="tab3">
        <SkillsPage/>
      </q-carousel-slide>
      <q-carousel-slide name="tab4">
        <ProjectsPage/>
      </q-carousel-slide>
      <q-carousel-slide name="tab5">
        <ContactPage/>
      </q-carousel-slide>
    </q-carousel>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import AboutPage from 'src/pages/AboutPage.vue';
import IndexPage from 'src/pages/IndexPage.vue';
import EducationPage from 'src/pages/EducationPage.vue';
import ProjectsPage from 'src/pages/ProjectsPage.vue';
import SkillsPage from 'src/pages/SkillsPage.vue';
import ContactPage from 'src/pages/ContactPage.vue';

// defineOptions({
//   name: 'MainLayout'
// })

// const linksList = [

//   {
//     title: "About",
//     caption: "",
//     icon: "confirmation_number",
//     icon_outlined: "o_confirmation_number",
//     link: "/about",
//   },

// ];
const linksList = [
  {
    title: "INICIO",
    caption: "",
    icon: "badge",
    icon_outlined: "o_badge",
    link: "/",

  },
  {
    title: "FORMACIÓN",
    caption: "",
    icon: "school",
    icon_outlined: "o_school",
    link: "/education",
  },
  {
    title: "HABILIDADES",
    caption: "",
    icon: "workspace_premium",
    icon_outlined: "o_workspace_premium",
    link: "/skills",
  },
  {
    title: "PORTAFOLIO",
    caption: "",
    icon: "work",
    icon_outlined: "work",
    link: "/portfolio",
  },
  {
    title: "CONTACTO",
    caption: "",
    icon: "mail",
    icon_outlined: "o_mail",
    link: "/contact",
  },
];
export default defineComponent({
  name: 'MainLayout',

  components:{
    EssentialLink,
    AboutPage,
    IndexPage,
    EducationPage,
    ProjectsPage,
    SkillsPage,
    ContactPage,
  },

  setup () {
    return {
      drawer: ref(false),
      tab: ref('tab1'),
      essentialLinks: linksList,
      slide: ref('tab1'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
})

</script>

<style lang="scss" scoped>
.q-carousel__slide, .q-carousel .q-carousel--padding {
    padding: 0px;
}
.background-drawer{
  // background: #121212;
  background:  #172c3c
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
              0 0 1rem #FFF4A3,
              inset 0 0 2rem #FFF4A3;
  // position: absolute;
  // z-index: 1;

  margin-left: 1%;
  margin-top: 1%;
  width: 6rem;
  height: 6rem;

}

</style>
