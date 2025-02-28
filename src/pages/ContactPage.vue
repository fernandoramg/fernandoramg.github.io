<template>
  <div :class="$q.screen.sm || $q.screen.xs ? 'column background-web items-center' :'row background-web items-center'" style="min-height: 100%; height: auto; min-width: 100%; width: auto; color: white;">
    <!-- class="row justify-evenly items-center background-web" -->
    <div class="col-6 column justify-center items-center text-center font-contact" style="height: 280px; flex-wrap: nowrap !important;">
        ¡Hagamos un nuevo proyecto!
        <div class="row justify-center items-center" style="font-size: 20px;">
          <q-icon name="mail" style="margin-right: 10px;"/> fernandoram901@gmail.com
        </div>
      <!-- <br/>
      ¡Contáctame! -->
    </div>
    <div :class="$q.screen.sm || $q.screen.xs ? 'col-6 column':'col-6 column q-px-xl' ">
      <h2 class="row justify-center" style="margin-bottom: 40px; ">Contáctame</h2>
      <q-form ref="myForm" @submit="onSubmit">
        <q-input outlined v-model="email" label="Correo" type="email" label-color="white" :input-style="{color: 'white'}" style="margin-bottom: 50px;"
        lazy-rules
          :rules="[(val) => !!val || 'Correo requerido.' ,
          (val, rules) => rules.email(val) || 'Por favor ingrese un correo válido.']" />
        <q-input outlined v-model="name" label="Nombre" label-color="white" :input-style="{color: 'white'}" style="margin-bottom: 50px;" lazy-rules
          :rules="[(val) => !!val || 'Nombre requerido.']"/>
        <q-input outlined v-model="subject" label="Asunto" label-color="white" :input-style="{color: 'white'}" style="margin-bottom: 50px;" lazy-rules
          :rules="[(val) => !!val || 'Asunto requerido.']"/>
        <q-input outlined v-model="text" type="textarea" siz  label="Tu mensaje" label-color="white" :input-style="{color: 'white'}" style="margin-bottom: 50px;" lazy-rules
          :rules="[(val) => !!val || 'Mensaje requerido.']"/>
        <q-btn color="yellow-7" text-color="black" icon="mail" icon-right="send" type="submit" label="Enviar"  style="margin-bottom: 50px; padding-block: 12px;"/>

      </q-form>

    </div>

  </div>
</template>

<script >

import { useQuasar } from 'quasar'
import { ref } from 'vue';
import { Resend } from 'resend';


export default {
  setup () {
    const $q = useQuasar();
    const resend = new Resend('re_LRyoHEHd_9Kr6rDrDU3jNTdd61SRMWCcL');
    const myForm = ref(null);

    
    return {
      name: ref(''),
      email: ref(''),
      subject: ref(''),
      text: ref(''),
      resend,
      myForm,


     

    }
  },
  methods: {
     onSubmit() {
         this.$refs.myForm.validate().then(async success => {
          if (success) {

              const {data, error} = await this.resend.emails.send({
                from: this.email,
                to: 'fernandoram901@gmail.com',
                subject: this.subject,
                html: `<p>${this.text}</p>`
              })

              if(error){
                return console.error({error});
              }else{
                $q.notify({
                  color: 'green',
                  textColor: 'white',
                  icon: 'check',
                  message: 'Enviado'
                })
              }

              console.log({data})
            
          }
        })

      }
    // async emailResend(){
    //   console.log("Email........")

    //   const {data, error} = await this.resend.emails.send({
    //     from: this.email,
    //     to: 'fernandoram901@gmail.com',
    //     subject: this.subject,
    //     html: `<p>${this.text}</p>`
    //   })

    //   if(error){
    //     return console.error({error});
    //   }

    //   console.log({data})
    // }
  }
}
</script>

<style lang="scss" scoped>

.background-web{
  // background: #121212;
  background-image: linear-gradient(to right, #121212 22%, #172c3c )
}
.q-field{
       border: 1px solid #fff;
       border-radius: 5px;
    }

    .q-field .q-field__control:after {
       border: 0px solid rgb(98 0 255 / 48%);
    }

.font-contact{
  font-weight: 600;
  font-size: 80px;
  // LA SECUANCIA IMPORTA
  @media (max-width: $breakpoint-sm){
    font-size: 45px;
  }
  @media (max-width: $breakpoint-xs){
    font-size: 38px;
  }
}

.q-field--with-bottom {
    padding-bottom: 0px;
}
</style>
