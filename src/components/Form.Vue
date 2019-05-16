<template>
  <div class="forms container">
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">attach_money</i>
        <input id="loanBalance" type="tel" class="validate" min="0" step="1.00" value="0.00">
        <label for="first_name">Loan Balance</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">%</i>
        <input id="intRate" type="number" class="validate" min="0.00" step="1.00" value="0.00">
        <label for="first_name">Interest Rate</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">date_range</i>
        <input type="text" id="lastPay" class="datepicker" value="0">
        <label for="lastPay" class="active">Last Payment Date</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <i class="material-icons prefix">date_range</i>
        <input type="text" id="estPayoff" class="datepicker" value="0">
        <label for="estPayoff" class="active">Est. Payoff Date</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
        <calcBtn/>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6 offset-s3">
      <i class="material-icons prefix">monetization_on</i>
      <input type="tel" class="validate" id="total" disabled value="0.00">
      <label class="active" for="total">Total</label>
    </div>
    </div>
      <vuetifyCal/>
  </div>
</template>

<script>
import calcBtn from '@/components/CalcButton';
import vuetifyCal from '@/components/VuetifyDatePicker';

export default {
  components: {calcBtn, vuetifyCal},
  mounted()
  {
    $(document).ready(() =>
    {
      $('.datepicker').datepicker();

      var dateOptions = {month: 'long', day: '2-digit', year: 'numeric'};
      var today = new Date();
      var tendays = new Date();
      tendays.setDate(tendays.getDate() + 10);

      $('#lastPay').val(today.toLocaleDateString('default', dateOptions));
      $('#estPayoff').val(tendays.toLocaleDateString('default', dateOptions));
    });
  }
};
</script>

<style scoped>
datepicker{
  color: white;
}

.forms{
    text-align: left
}
i{
  color: white;
}
input{
  color: white;
  padding-top: 1em;
}
input#total{
  color: white;
}
</style>
