<template>
  <div id="app">
    <trial-pack />
  </div>
</template>

<script>
import TrialPackContainer from './containers/TrialPackContainer.vue';

export default {
  name: 'app',
  components: {
    'trial-pack': TrialPackContainer,
  },
};
</script>

<style>
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px;
  font-size: 16px;
}
h1{
  font-size: 2.65rem;
  font-weight: 500;
  line-height: 1.1;
}
h2{
  font-weight: 500;
}
a {
  color: #00afab;
  text-decoration: none;
}
</style>
