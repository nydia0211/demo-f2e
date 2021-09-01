<template>
  <div id="app">
    <Orders />
  </div>
</template>

<script>
import Orders from "@/components/Orders";

export default {
  name: 'App',
  components: {
    Orders
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: RGBA(110, 110, 110, 1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
