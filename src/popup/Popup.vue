<template>
  <div id="app">
    <h1>Hello {{ message }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "popup",
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

#app {
  width: 300px;
  height: 400px;
}
</style>