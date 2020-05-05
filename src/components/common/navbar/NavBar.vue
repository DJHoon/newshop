<template>
  <div class="nav-bar">
    <div class="left">
      <slot name='navleft'></slot>
    </div>
    <div class="center">
      <slot name='nav-center'></slot>
    </div>
    <div class="right">
      <slot name='nav-right'></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavBar',
  data () {
    return { }
  }
}
</script>
<style scoped>
.nav-bar {
  line-height: 50px;
  display: flex;
}
.left,.right {
  width: 46px;
}
.center {
  flex: 1;
}
</style>
