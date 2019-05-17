<template>
  <div id="bootForm">
    <b-row class="justify-content-center">
      <b-col cols="10" md="8" sm="10">
        <b-card id="form-card" title="10 Day Loan Payoff Calculator">
          <div id="form-holder">
            <b-row class="justify-content-center">
              <b-col cols="12" md="10">
                <b-form-group>
                  <b-input-group size="md" prepend="Loan Balance ($)" >
                    <b-form-input id="loan-balance" placeholder="0.00" :type="type" pattern="[0-9]*"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="justify-content-center">
              <b-col cols="12" md="10">
                <b-form-group>
                  <b-input-group size="md" prepend="Interest Rate (%)">
                    <b-form-input id="interest-rate" placeholder="0" :type="type" pattern="[0-9]*"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row class="justify-content-center">
              <b-col cols="12" md="10">
                <bootvcal/>
                <bootvcalten/>
                <vbutton/>
              </b-col>
            </b-row>
            <b-row class="justify-content-center">
              <b-col cols="12" md="10">
                <b-input-group size="md" prepend="Total">
                  <b-form-input id="total" :type="textype" placeholder="$0.00" readonly/>
                </b-input-group>
              </b-col>
            </b-row>
          </div>
        </b-card>
      </b-col>
    </b-row>
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
    return {
      type: 'number',
      textype: 'text'
    };
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
  div.input-group-text{
    background-color: rgb(33,150,243);
    color: white;
  }
  #form-card{
    background-color: white;
    text-align: left;
  }
  div.row{
    margin-top: 2em;
  }
</style>
