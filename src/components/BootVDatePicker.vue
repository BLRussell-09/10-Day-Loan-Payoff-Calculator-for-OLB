<template>
  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent laxy full-width width="290px">
    <template v-slot:activator="{ on }">
      <v-text-field class="my-text-field" id="last-payment" v-model="dateFormatted" label="Last Payment Date" prepend-inner-icon="event"  readonly v-on="on" box background-color="rgba(33,150,243,0.5)" color="black"/>
    </template>
    <v-date-picker v-model="date" header-color="blue" color="#2196f3" scrollable>
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
    }
  }
};
</script>

<style scoped>

</style>
