<template>
  <div class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://vuejs.org/" target="_blank">
        <img src="https://vuejs.org/images/logo.png" alt="Vue Logo" height="100">
      </a>
    </div>
    <div class="navbar-list">
      <a class="navbar-item" href="https://vuejs.org/" target="_blank">Home</a>
      <a class="navbar-item" href="https://vuejs.org/" target="_blank">Documentation</a>
      <a class="navbar-item" href="https://vuejs.org/" target="_blank">About</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderApp"
}
</script>

<style scoped>

.navbar {
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 100%;
}

</style>