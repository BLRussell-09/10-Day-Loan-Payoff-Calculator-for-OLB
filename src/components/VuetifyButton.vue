<template>
<div>
  <v-btn color="#0095ce" v-on:click="buttonClick">Calculate</v-btn>
</div>
</template>

<script>
export default {
  name: 'vue-button',
  data()
  {
    return {};
  },
  methods: {
    buttonClick()
    {
      var loanBal = $('#loan-balance').val();
      var intRate = $('#interest-rate').val();
      console.log(loanBal);
      console.log(intRate);
      this.tendayPay();
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
        return null;
      }
    },
    interestCalc()
    {
      var intRate = $('#interest-rate').val();
      var intDec = (intRate / 100);
      var dailyInt = (intDec / 365);
      return dailyInt;
    },
    tendayPay()
    {
      var bal = $('#loan-balance').val() * 1;
      var days = this.dateDiff();
      if (days != null)
      {
        var dailyInt = this.interestCalc();
        var accruedInt = (dailyInt * days * bal);
        var tendayBal = (bal + accruedInt).toFixed(2);
        $('#total').val(`$${tendayBal}`);
        console.log(tendayBal);
      }
      else
      {
        $('#total').val('$0.00');
      }
    }
  }
};
</script>
