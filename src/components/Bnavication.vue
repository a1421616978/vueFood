<template>
  <!-- 底部导航 -->
  <ul class="navigation">
    <router-link to="/0">
      <li>
        <i class="iconfont icon-xiazai45"></i>
        <!-- <img src="https://st-cn.meishij.net/p2/20190805/20190805211654_179.png" alt=""> -->
        <p>推荐</p>
      </li>
    </router-link>
    <router-link to="/video/1">
      <li>
        <i class="iconfont icon-ziyuan"></i>
        <!-- <img src="https://st-cn.meishij.net/p2/20190805/20190805211654_652.png" alt=""> -->
        <p>视频</p>
      </li>
    </router-link>
    <router-link to="/type/2">
      <li>
       <i class="iconfont icon-2"></i>
        <!-- <img src="https://st-cn.meishij.net/p2/20190805/20190805211654_396.png" alt=""> -->
        <p>分类</p>
      </li>
    </router-link>
    <router-link to="/menu/3">
      <li>
        <i class="iconfont icon-zuanshi"></i>
        <!-- <img src="https://st-cn.meishij.net/p2/20190805/20190805211654_267.png" alt=""> -->
        <p>菜单</p>
      </li>
    </router-link>
    <router-link to="/collection/4">
      <li>
        <i class="iconfont icon-xin"></i>
        <!-- <img src="https://st-cn.meishij.net/p2/20190805/20190805211924_865.png" alt=""> -->
        <p>收藏</p>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      msg: null,
    };
  },
  mounted() {
    this.msg = this.$route.params.id;
    var nav = document.querySelectorAll(".navigation li");
    for (var i = 0; i < nav.length; i++) {
      if (this.$route.params.id == i) {
        nav[i].style.color = "#f15a4f";
      }
    }
  },
};
</script>

<style scoped>
.navigation {
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 1.02rem;
  width: 100%;
  background: #fff;
  z-index: 1000;
  border-top: 1px solid #fff;
  font-size: 0px;
}
.navigation li {
  margin: 0 0.4rem;
  font-size: 0.2rem;
  color: #666666;
}
.navigation p {
  text-align: center;
}
.navigation i {
  display: inline-block;
  font-size: 24px;
  margin: 3px 0 3px 0;
  font-weight: 400;
}
</style>
