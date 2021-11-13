<template>
  <div class="layout">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>

<style>
</style>