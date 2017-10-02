<template>
  <div class="credit-card">
    <span id="card-name-display" v-text="name"></span>
    <span id="card-number-display" v-text="number"></span>
    <span id="expiration-display" v-text="month"></span>
    <span id="expiration-display" v-if="expirationIsSet">/</span>
    <span id="expiration-display" v-text="year"></span>
  </div>
</template>
<script>
export default {
  props: ['name', 'number', 'expiration'],

  computed: {
    month() {
      return this.expiration.substring(0,2)
    },
    year() {
      return this.expiration.substring(2,4)
    },
    expirationIsSet() {
      return this.expiration.length === 4
    }
  }
}
</script>

