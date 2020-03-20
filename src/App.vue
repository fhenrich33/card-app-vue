<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
*,
*::after,
*::before {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #343434;
  background: #dff4f7;
  min-height: 100vh;
}
</style>
