<template>
  <div id="app">
    <img src="./assets/fculogo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: no-repeat center center fixed;
  background-image: linear-gradient(to bottom, #002d72, #6cc24a);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  overflow: auto;
}
div.md-datepicker-body{
    background-color: white;
  }
div.md-datepicker-header{
  background-color: aqua;
}
input{
  color: white;
}
i{
  color: white;
}

  i.v-icon {
    color: black !important;
  }
  .v-input__slot{
    background-color: #E9ECEF !important;
  }
  .v-text-field__slot#payoff-date{
    border: lightgrey solid 1px;
  }
  div.v-text-field__slot{
  padding-left: 1em !important;
}
</style>
