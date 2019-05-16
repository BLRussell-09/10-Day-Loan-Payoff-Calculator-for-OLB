<template>
  <div>
    <b-button v-on:click="click" v-b-popover.hover="'If you click me, I will do calculations for you'" title="Popover Title">Calculate</b-button>
  </div>
</template>

<script>
export default {
  name: 'bootstrapv-button',
  data()
  {
    return {};
  },
  methods: {
    click()
    {
      var loanBal = $('#loan-balance').val();
      var intRate = $('#interest-rate').val();
      var payoffDate = $('#payoff-date').val();
      var lastPayment = $('#last-payment').val();
      console.log(loanBal);
      console.log(intRate);
      console.log(lastPayment);
      console.log(payoffDate);
      this.dateDiff();
    },
    dateDiff()
    {
      var estPayoff = new Date($('#payoff-date').val());
      var prevPay = new Date($('#last-payment').val());
      if (estPayoff > prevPay)
      {
        var dayInMil = 1000 * 60 * 60 * 24;
        var diff = estPayoff.getTime() - prevPay.getTime();
        var dateDiff = Math.round(diff / dayInMil);
        return dateDiff;
      }
      else
      {
        alert(`Payoff date must occur after ${$('#last-payment').val()}`);
      }
    }
  }
};
</script>

<style scoped>

</style>
