<template>
  <div id="app" class="justify-content-center">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@font-face {
  font-family: "BoosterFY";
  src: url('/assets/fonts/BoosterNextFY.eot');
  src: url("./assets/fonts/BoosterNextFY.ttf") format("truetype"),
       url("./assets/fonts/BoosterNextFY.woff") format('woff');
}
body {
  font-family: 'BoosterFY', Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:
    url('assets/fcuO.png') no-repeat center center fixed,
    linear-gradient(to bottom, #002d72, #00a19b 152%) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 41%, cover;
  background-position: -25% 4%;
  height: 100%;
  overflow: auto;
}
input {
  color: white;
}
i {
  color: white;
}
i.v-icon {
    color: black !important;
  }
  div.v-text-field__slot{
  padding-left: 1em !important;
}
</style>
