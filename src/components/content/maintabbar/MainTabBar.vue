<template>
  <div id="main-tab-bar" >
    <tab-bar class="tabbarcolor">
      <tabbar-item path='/home'>
        <img src="~assets/img/tabbar/home.svg" slot='item-img'/>
        <img src="~assets/img/tabbar/home_active.svg" slot='item-active-img'/>
        <span slot='item-text'>首页</span>
      </tabbar-item>
      <tabbar-item path='/category'>
        <img src="~assets/img/tabbar/category.svg" slot='item-img'/>
        <img src="~assets/img/tabbar/category_active.svg" slot='item-active-img'/>
        <span slot='item-text'>分类</span>
      </tabbar-item>
      <tabbar-item  path='/cart'>
        <img src="~assets/img/tabbar/shopcart.svg" slot='item-img'/>
        <img src="~assets/img/tabbar/shopcart_active.svg" slot='item-active-img'/>
        <span slot='item-text'>购物车</span>
      </tabbar-item>
      <tabbar-item  path='/profile'>
        <img src="~assets/img/tabbar/profile.svg" slot='item-img'/>
        <img src="~assets/img/tabbar/profile_active.svg" slot='item-active-img'/>
        <span slot='item-text'>个人</span>
      </tabbar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
  name: 'MainTabBar',
  data() {
    return {

    }
  },
  components: {
    TabBar,
    TabbarItem
  }
}
</script>
<style>
.tabbarcolor {
  background-color: #ffffff;
}
</style>