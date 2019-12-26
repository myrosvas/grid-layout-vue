<template>
  <div id="app">
    <!-- <Dashboard /> -->
    <Container
      columns="repeat(4, 1fr)"
      :images="images"
    />
  </div>
</template>

<script>
import Dashboard from './components/Dashboard';
import Container from './components/Container';
import { images } from '../config/data';

export default {
  name: 'app',
  components: {
    Dashboard,
    Container
  },
  data () {
    return {
      images
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
