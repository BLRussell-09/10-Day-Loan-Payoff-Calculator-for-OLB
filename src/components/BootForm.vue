<template>
  <div id="bootForm">
    <b-row class="justify-content-center">
      <b-col cols="8" md="8" sm="10" id="form-col">
        <b-card id="form-card">
          <img src="@/assets/fculogo.png">
          <h2>10 Day Loan Payoff Calculator</h2>
          <div id="form-holder">
            <b-row class="justify-content-center">
              <b-col cols="12" md="10">
                <b-form-group description="Loan Balance">
                  <b-input-group size="md">
                    <b-form-input id="loan-balance" placeholder="0.00" :type="type" pattern="[0-9]*" ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-row>
            <b-form-row class="justify-content-center">
              <b-col cols="12" md="10">
                <b-form-group description="Interest Rate (%)">
                  <b-input-group size="md">
                    <b-form-input id="interest-rate" placeholder="0" :type="type" pattern="[0-9]*" min="0"></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row class="justify-content-center">
              <b-col cols="12" md="10">
                <bootvcal/>
              </b-col>
            </b-form-row>
            <b-form-row class="justify-content-center">
              <b-col cols="12" md="10">
                <bootvcalten/>
              </b-col>
            </b-form-row>
            <b-form-row class="justify-content-md-center">
              <b-col offset-md="3" md="4" cols="12">
                <vbutton @click="showDismissibleAlert=true"/>
              </b-col>
            </b-form-row>
            <b-form-row class="justify-content-center" id="btnContainer">
              <b-col cols="12" md="10">
                <b-input-group size="md" prepend="Total">
                  <b-form-input id="total" :type="textype" placeholder="$0.00" readonly/>
                </b-input-group>
              </b-col>
            </b-form-row>
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
      textype: 'text',
      showDismissibleAlert: false
    };
  }
};
</script>

<style scoped>
  #form-col{
    padding-bottom: 4em;
  }
  input{
    color: black;
  }
  #bootForm
  {
    margin-top: 2em;
  }
  div.input-group-text{
    background-color: white;
    color: black;
  }
  #form-card{
    background-color: white;
    text-align: left;
    box-shadow: 5px 5px rgba(44, 62, 80, 0.8);
  }
  div.row{
    margin-top: 2em;
  }
  #btnContainer{
    padding-bottom: 1em;
  }
</style>
