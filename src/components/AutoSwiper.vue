<template>
 <!-- 自动轮播 -->
  <div class="autoSwiper">
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item>
    <img class="a-auto" src="https://st-cn.meishij.net/p2/20201008/20201008222815_217.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img class="a-auto" src="https://st-cn.meishij.net/p2/20201006/20201006214820_845.jpg" alt="">
  </van-swipe-item>
  <van-swipe-item>
    <img class="a-auto" src="https://st-cn.meishij.net/p2/20201010/20201010105446_146.jpg" alt="">
  </van-swipe-item>
</van-swipe>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.a-auto{
  margin-left: 5%;
 width: 6.86rem;
 height: 3rem;
 margin-top: 0.4rem;
} 
</style>