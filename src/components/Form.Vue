<template>
  <div class="forms container">
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">monetization_on</i>
        <input id="loanBalance" type="number" class="validate" min="0">
        <label for="first_name">Loan Balance</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">%</i>
        <input id="intRate" type="number" class="validate" min="0">
        <label for="first_name">Interest Rate</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">date_range</i>
        <input type="text" id="lastPay" class="datepicker">
        <label for="lastPay" class="active">Last Payment Date</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">date_range</i>
        <input type="text" id="estPayoff" class="datepicker">
        <label for="estPayoff" class="active">Est. Payoff Date</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <calcBtn/>
      </div>
    </div>
  </div>
</template>

<script>
import calcBtn from '@/components/CalcButton'

export default {
  components: {calcBtn},
  mounted() {
    $(document).ready(() => {
      $('.datepicker').datepicker()
    })
    console.log('sup')
  }
}
</script>

<style scoped>

</style>
