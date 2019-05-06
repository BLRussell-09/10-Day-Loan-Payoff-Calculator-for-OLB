<template>
  <a class="waves-effect waves-light btn" v-on:click="buttonClick"><i class="material-icons right">blur_on</i>Calculate</a>
</template>

<script>
export default {
  name: 'calc-button',
  data(){
    return {}
  },
  methods: {
    buttonClick()
    {
      var dayInMil = 1000*60*60*24
      var estPayoff = $('#estPayoff').val()
      var prevPay = $('#lastPay').val()
      var estDate = new Date(estPayoff)
      var prevDate = new Date(prevPay)

      var diff = estDate.getTime() - prevDate.getTime()

      var dateDiff = Math.round(diff/dayInMil)
      console.log(dateDiff)
    }
  }
}
</script>

<style scoped>
.btn{
  text-align: center;
}
</style>
