<template>
  <div id="app">
    <div v-if="formSent">Formulario Enviado</div>
    <formulario v-else @formSent="changeStatus"></formulario>
  </div>
</template>

<script>
import Formulario from './components/Form.vue'

export default {
  name: 'app',
  data() {
    return {
      formSent: false
    }
  },

  components: { Formulario },

  methods: {
    changeStatus() {
      this.formSent = true
    }
  }
}
</script>
