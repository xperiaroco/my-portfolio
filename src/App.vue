<template>
  <div id="app">
    <my-header/>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "@/components/Header";

export default {
  name: 'app',
  components: {
    MyHeader
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}
</style>
