<template>
  <a class="waves-effect waves-light btn" v-on:click="buttonClick"><i class="material-icons right">blur_on</i>Calculate</a>
</template>

<script>
export default {
  name: 'calc-button',
  data()
  {
    return {};
  },
  methods: {
    buttonClick()
    {
      this.tendayPay();
    },
    dateDiff()
    {
      var estPayoff = new Date($('#estPayoff').val());
      var prevPay = new Date($('#lastPay').val());
      if (estPayoff > prevPay)
      {
        var dayInMil = 1000 * 60 * 60 * 24;
        var diff = estPayoff.getTime() - prevPay.getTime();
        var dateDiff = Math.round(diff / dayInMil);
        return dateDiff;
      }
      else
      {
        alert(`Est. payoff date must occur after ${$('#lastPay').val()}`);
      }
    },
    interestCalc()
    {
      var intRate = $('#intRate').val();
      var intDec = (intRate / 100);
      var dailyInt = (intDec / 365);
      return dailyInt;
    },
    tendayPay()
    {
      var bal = $('#loanBalance').val() * 1;
      var days = this.dateDiff();
      var dailyInt = this.interestCalc();
      var accruedInt = (dailyInt * days * bal);
      var tendayBal = (bal + accruedInt).toFixed(2);
      $('#total').val(tendayBal);
      console.log(tendayBal);
    }
  }
};
</script>

<style scoped>
.btn{
  text-align: center;
  background-color: slategray;
}
</style>
