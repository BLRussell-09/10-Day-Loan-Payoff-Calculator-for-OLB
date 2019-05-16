<template>
  <div id="bootForm">
    <div>
      <b-row class="justify-content-center">
        <b-col cols="6" md="3">
          <b-form-group>
            <b-input-group size="md" prepend="Loan Balance ($)">
              <b-form-input id="loan-balance" placeholder="0.00"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="6" md="3">
          <b-form-group>
            <b-input-group size="md" prepend="Interest Rate (%)">
              <b-form-input id="interest-rate" placeholder="0"></b-form-input>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="6" md="3">
          <bootvcal/>
          <bootvcalten/>
          <vbutton/>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="6" md="3">
           <v-text-field id="total" value="$0.00" label="Box" solo readonly></v-text-field>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import vuetifyCal from '@/components/VuetifyDatePicker';
import bootvcal from '@/components/BootVDatePicker';
import bootvcalten from '@/components/BootVDateTen';
import vbutton from '@/components/VuetifyButton';

export default {
  components: {vuetifyCal, bootvcal, bootvcalten, vbutton},
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
  },
  data()
  {
    return {};
  }
};
</script>

<style scoped>
  input{
    color: black;
  }
  #bootForm
  {
    margin-top: 2em;
  }
</style>
