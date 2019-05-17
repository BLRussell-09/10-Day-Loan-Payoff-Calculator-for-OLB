<template>
  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent laxy full-width width="290px" id="last-payment-dialogue">
    <template v-slot:activator="{ on }">
      <v-text-field v-on:click="dateClick" class="my-text-field" id="last-payment" v-model="dateFormatted" label="Last Payment Date" prepend-inner-icon="event"  readonly v-on="on" box background-color="rgba(33,150,243,0.5)" color="black"/>
    </template>
    <v-date-picker id="last-payment-cal" v-model="date" header-color="blue" color="#2196f3" scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
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
    dateClick()
    {
      $(document).ready(() =>
      {
        var newdate = new Date(this.dateFormatted);
        var year = (newdate.getYear() + 1900);
        $('#last-payment-cal > div.v-picker__title.blue > div > div.v-picker__title__btn.v-date-picker-title__year').text(`${year} Last Payment Date`);
      });
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
    }
  },
  watch: {
    date(val)
    {
      this.dateFormatted = this.formatDate(this.date);
      this.dateClick();
    }
  }
};
</script>

<style scoped>

</style>
