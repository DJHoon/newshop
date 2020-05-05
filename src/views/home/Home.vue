<template>
<div>
  <nav-bar class="home-navbar">
    <template v-slot:nav-center>
       <div>首页</div>
    </template>
  </nav-bar>
  <home-swiper :banner='banner'/>
  <recommend-item :recommend='recommend'/>
  <feature-view/>
  <div v-for='item in 100'>
    {{item}}
  </div>
</div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import {getHomeData} from '@/network/home'

import RecommendItem from './children/RecommendItem'
import FeatureView from './children/FeatureView'
import HomeSwiper from './children/HomeSwiper'
export default {
  name: 'Home',
  data () {
    return {
      banner: [],
      recommend: []
     }
  },
  components: {
    NavBar,
    RecommendItem,
    FeatureView,
    HomeSwiper
  },
  created() {
    getHomeData().then(res => {
      this.banner = res.data.banner.list
      this.recommend= res.data.recommend.list
      console.log(res)
    })
  },
  mounted() {
    
  }
}
</script>
<style>
.home-navbar {
  background-color: var(--tink-color);
  color: white;
  font-size:24px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
