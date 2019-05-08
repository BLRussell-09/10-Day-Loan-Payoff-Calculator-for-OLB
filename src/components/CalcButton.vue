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
      var dayInMil = 1000 * 60 * 60 * 24;
      var estPayoff = new Date($('#estPayoff').val());
      var prevPay = new Date($('#lastPay').val());
      var diff = estPayoff.getTime() - prevPay.getTime();
      var dateDiff = Math.round(diff / dayInMil);
      return dateDiff;
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
}
</style>
