<template>
  <div class="tabbar-item" :path = 'path' @click= "imgClick">
    <div>
      <span v-if="isActive"><slot name='item-img'></slot></span>
      <span v-else><slot name='item-active-img'></slot></span>
    </div>
    <div :class= "{fontRed: !isActive}">
      <slot name='item-text'></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TabbarItem',
    data() {
      return {
      }
    },
    props: {
      path: {
        type: String,
        default() {
          return ''
        }
      }
    },
    methods: {
      imgClick() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path !== this.path
      }
    }
  }
</script>
<style scoped>
.tabbar-item {
  flex: 1;
}
.tabbar-item img {
  height: 100%;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  margin-top: 3px;
}
.fontRed {
  color: var(--tink-color);
}
</style>