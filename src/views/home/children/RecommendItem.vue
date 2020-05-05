<template>
  <div class="recommend-view">
    <div v-for='(item,index) in recommend' :key='index' class="recommend">
      <a :href='item.link'>
        <img :src='item.image'/>
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendItem',
  data () {
    return { }
  },
  props: {
    recommend: {
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend-view {
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 8px solid var(--tink-color);
}
.recommend {
  flex: 1;
  text-align: center;
}
.recommend img {
  width: 100%;
}
</style>
