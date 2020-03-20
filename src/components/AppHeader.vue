<script>
export default {
  name: "AppHeader"
};
</script>

<template>
  <div class="base-header">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<style scoped>
.base-header {
  background: #268700;
  color: #fbe500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
}

.base-header h1 {
  font-size: 50px;
  text-transform: uppercase;
}
</style>
