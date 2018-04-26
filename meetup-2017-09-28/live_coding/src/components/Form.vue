<template>
  <div class="mobile">
      <credit-card 
      :name="form.name"
      :number="form.number"
      :expiration="form.expiration"
      />

      <div class="payment-form">
        <label for="card-name">Full Name on Card</label>
        <input v-model="form.name" id="card-name" type="text">
        <label for="card-number">Credit Card Number</label>
        <input v-model="form.number" id="card-number" maxlength="19" minlength="13" pattern="[0-9]*" type="text">
        <label for="expiration">Expiration Date</label>
        <input v-model="form.expiration" id="expiration" maxlength="4" minlength="4" pattern="[0-9]*" placeholder="MMYY" type="text">
        <label for="security" id="sec-label">Security Code</label>
        <input v-model="form.securityCode" id="security" maxlength="4" minlength="2" pattern="[0-9]*" placeholder="1234" type="text">
        <label for="address">
          <input v-model="haveRead" id="address" name="address" type="checkbox" value="address">
          <span>I Have Read and Agree to These Terms and Conditions</span>
        </label>
        <button 
        :class="{ disabled: !haveRead}"
        :disabled="!haveRead" 
        type="submit"
        @click="sendForm"
        >Continue</button>
      </div>
    </div>
</template>
<script>
import CreditCard from './CreditCard.vue'

export default {
  data() {
    return {
      haveRead: false,
      form: {
        name: 'Paco',
        number: '',
        expiration: '',
        securityCode: '',
      }
    }
  },

  components: { CreditCard },

  methods: {
    sendForm() {
      this.$emit('formSent')
    }
  }
}
</script>
<style>
   .disabled {
     opacity: 0.2;
   }
</style>

