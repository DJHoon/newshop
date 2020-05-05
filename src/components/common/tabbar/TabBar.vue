<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: 'TabBar',
    data() {
      return {
        
      }
    }
  }
</script>
<style scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  height: 48px;
  border-top: 1px solid black ;
  text-align: center;
}
</style>