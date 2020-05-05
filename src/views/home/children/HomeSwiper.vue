<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for='item in banner' :key='item.acm'>
       <a :href='item.link'>
        <img class="pic" :src='item.image' target='_blank'/>
       </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  data () {
    return { }
  },
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style>
.home-swiper {
  margin-top: 49px;
}
</style>
