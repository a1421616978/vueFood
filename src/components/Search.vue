<template>
<!-- 搜索框 -->
  <div class="search">
    <div class="h-search">
      <img src="https://s1.c.meishij.net/wap6/images/topsearchicon@3x.png" alt="">
      <p>搜索百万免费菜单</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.search{
   position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 1.52rem;
  background: #fff;
  z-index: 100;
}
.h-search{
  display: flex;
  justify-content: start;
  height: 0.8rem;
  color: #999;
  box-sizing: border-box;
  line-height: 0.8rem;
  background: #f5f5f5;
  width: 6.86rem;
  height: 0.8rem;
  z-index: 100;
  margin: 0.32rem 0.32rem ;
}
.h-search p{
  font-size: 0.32rem;
 
}
.h-search img{
  width: 0.32rem;
  height: 0.32rem;
margin-right: 0.2rem;
padding-top:0.24rem ;
}
</style>