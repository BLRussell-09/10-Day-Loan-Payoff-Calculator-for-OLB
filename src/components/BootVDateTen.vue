<template>
  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent laxy full-width width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field id="payoff-date" v-model="dateFormatted" label="Payoff Date" prepend-inner-icon="event" box background-color="white" readonly v-on="on"/>
    </template>
    <v-date-picker v-model="date" header-color="blue" color="#2196f3" scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn flat color="primary" v-on:click="dateDiff" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  data: vm => ({
    date: vm.tendate().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(vm.tendate().toISOString().substr(0, 10)),
    modal: false
  }),
  computed:
  {
    computedDateFormatted()
    {
      return this.formatDate(this.date);
    }
  },
  methods: {
    tendate()
    {
      var tendays = new Date();
      tendays.setDate(tendays.getDate() + 10);
      return tendays;
    },
    formatDate(date)
    {
      if (!date)
      {
        return null;
      }
      else
      {
        const [year, month, day] = date.split('-');
        return `${month}/${day}/${year}`;
      }
    },
    parseDate(date)
    {
      if (!date)
      {
        return null;
      }
      else
      {
        const [month, day, year] = date.split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
      }
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
        var date = this.tendate().toISOString().substr(0, 10);
        $('#payoff-date').val(date);
        alert(`Payoff date must occur after ${$('#last-payment').val()}`);
      }
    }
  },
  watch: {
    date(val)
    {
      this.dateFormatted = this.formatDate(this.date);
    }
  }
};
</script>

<style scoped>
div.v-text-field__slot{
  padding-left: 1em !important;
}
</style>
