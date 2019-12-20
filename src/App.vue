<template>
  <div id="app">
    <Dashboard />
    <Container />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard';
import Container from './components/Container';

export default {
  name: 'app',
  components: {
    Dashboard,
    Container
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
