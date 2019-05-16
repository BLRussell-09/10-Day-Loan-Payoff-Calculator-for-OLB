<template>
  <div>
    <md-datepicker v-model="selectedDate" class="datePick"/>
  </div>
</template>

<script>
export default {
  name: 'BasicDatePicker',
  data: () => ({
    selectedDate: new Date()
  })
};
</script>

<style scoped>
  .md-datepicker{
    color: white !important;
  }
</style>
