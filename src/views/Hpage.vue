<template >
<!-- 首页 -->
  <div class="hpage">
    <Search></Search>
    <h1 class="h-title">今日热门</h1>
    <!-- 今日人们轮播 -->
    <van-swipe class="my-swipe" indicator-color="white" width="320">
      <div class="h-swipe">
        <van-swipe-item>
          <img
            class="h-img"
            src="https://st-cn.meishij.net/p2/20190816/20190816115216_523.jpg"
            alt=""
          />
          <h1 class="swipe-itile">电饭锅秘制排骨</h1>
          <img
            class="swipe-portrait"
            src="https://st-cn.meishij.net/user/09/29/t13132259_153559445937202.jpg"
            alt=""
          />
          <span class="swipe-content">造食日记</span>
        </van-swipe-item>
      </div>
      <div class="h-swipe">
        <van-swipe-item>
          <img
            class="h-img"
            src="https://st-cn.meishij.net/p2/20190816/20190816144944_111.jpg"
            alt=""
          />
          <h1 class="swipe-itile">家常小炒</h1>
          <img
            class="swipe-portrait"
            src="https://st-cn.meishij.net/user/233/214/t13116233_153510216089063.jpg"
            alt=""
          />
          <span class="swipe-content">喂谷美食记""</span>
        </van-swipe-item>
      </div>
      <div class="h-swipe">
        <van-swipe-item>
          <img
            class="h-img"
            src="https://st-cn.meishij.net/p2/20190815/20190815182731_475.jpg"
            alt=""
          />
          <h1 class="swipe-itile">香蕉酥</h1>
          <img
            class="swipe-portrait"
            src="https://st-cn.meishij.net/user/171/125/t13593921_155080650966807.jpg"
            alt=""
          />
          <span class="swipe-content">君君美食</span>
        </van-swipe-item>
      </div>
    </van-swipe>
    <!-- 为你推荐 -->
    <h1 class="h-title1">为你推荐</h1>
    <ul class="recommend">
      <li>
        <img
          src="https://st-cn.meishij.net/p2/20191126/20191126213600_379.png"
          alt=""
        />
        <span>每日优惠</span>
      </li>
      <li>
        <img
          src="https://st-cn.meishij.net/p2/20191126/20191126213600_527.png"
          alt=""
        />
        <span>食材大全</span>
      </li>
      <li>
        <img
          src="https://st-cn.meishij.net/p2/20200325/20200325191717_699.png"
          alt=""
        />
        <span>热门专题</span>
      </li>
      <li>
        <img
          src="https://st-cn.meishij.net/p2/20191024/20191024173548_934.png"
          alt=""
        />
        <span>菜谱分类</span>
      </li>
      <li>
        <img
          src="https://st-cn.meishij.net/p2/20191024/20191024173548_460.png"
          alt=""
        />
        <span>本周流行</span>
      </li>
      <li>
        <img
          src="https://st-cn.meishij.net/p2/20191024/20191024173548_337.png"
          alt=""
        />
        <span>视频菜谱</span>
      </li>
    </ul>
    <h1 class="h-meals">每日三餐</h1>
    <Meals></Meals>
    <AutoSwiper></AutoSwiper>
    <h1 class="h-meals1">大家都在做</h1>
    <div class="every1">
<ul class="every">
      <li v-for="(lists,index) in list" :key="index"  @click="send(index)" :class="{active:num==index}">{{lists}}</li>
    </ul>
    </div>
     
    <Recom :nums="num"></Recom>
    <Season :nums="num"></Season>
    <Meat :nums="num"></Meat>
    <Diet :nums="num"></Diet>
    <Baking :nums="num"></Baking>
    <Bnavication></Bnavication>
  </div>
</template>

<script>
import Search from "../components/Search";
import Meals from "../components/Meals";
import AutoSwiper from "../components/AutoSwiper";
import Recom from "../components/Recom";
// 大家都在做
import Season from "../components/Season";
import Meat from "../components/Meat";
import Diet from "../components/Diet";
import Baking from "../components/Baking";
import Bnavication from "../components/Bnavication";
export default {
  components: {
    Search,
    Meals,
    AutoSwiper,
    Recom,
    Season,
    Meat,
    Diet,
    Baking,
    Bnavication
  },
  data(){
    return {
    list:['推荐','时令','食肉','素食','烘焙',],
    num:0

    }
  },
      methods:{
  send(i){
this.num=i

  },
   handleScroll () {
        // console.log(window.scrollY)
        var a=window.scrollY
        const navs=document.querySelector('.every1')
        // console.log(navs)
       if(a>1160){
        navs.style.position='fixed'
        navs.style.left='0'
         navs.style.top='50px'
       }else{
        navs.style.position='static'
       }
     
      }
    
},
 mounted () {
      window.addEventListener('scroll', this.handleScroll)
    }

};
</script>

<style scoped>
.hpage {
  width: 100%;
  margin-top: 76px;
}

.h-title {
  font-size: 0.6rem;
  font-weight: 600;
  color: #333;
  line-height: 0.72rem;
  margin-left: 5%;
}
.my-swipe {
  width: 100%;
  margin-top: 5%;
}

.h-img {
  width: 5.96rem;
  height: 5.96rem;
  border-radius: 0.2rem;
  margin-left: 5%;
}
.h-swipe {
  /* width: 298px; */
  height: 5.96rem;
  position: relative;
}
.swipe-itile {
  font-size: 0.4rem;
  line-height: 0.6rem;
  color: #fff;
  padding: 0px 0.32rem;
  position: absolute;
  left: 0.4rem;
  bottom: 1.08rem;
  font-weight: 600;
  text-shadow: 0px 0px 0.08rem rgba(0, 0, 0, 0.3);
}
.swipe-portrait {
  position: absolute;
  left: 0.72rem;
  bottom: 0.36rem;
  height: 0.6rem;
  width: 0.6rem;
  border-radius: 0.3rem;
  display: inline-block;
  vertical-align: top;
  box-shadow: 0px 0px 0.08rem rgba(0, 0, 0, 0.3);
}
.swipe-content {
  position: absolute;
  left: 1.28rem;
  bottom: 0.36rem;
  font-size: 0.28rem;
  font-weight: 600;
  color: #fff;
  line-height: 0.6rem;
  display: inline-block;
  vertical-align: top;
  max-width: 60%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-left: 0.2rem;
  text-shadow: 0px 0px 0.08rem rgba(0, 0, 0, 0.3);
}
.h-title1 {
  font-size: 0.6rem;
  font-weight: 600;
  color: #333;
  line-height: 0.72rem;
  padding: 0.64rem 0.32rem 0.32rem 0.32rem;
}
.recommend li {
  display: flex;
  justify-content: space-around;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0px 0.16rem;
  margin-bottom: 0.4rem;
  box-shadow: 0px 0px 0.24rem rgba(255, 155, 149, 0.5);
  border-radius: 0.42rem;
  height: 0.84rem;
  line-height: 0.84rem;
  margin: 0 0.16rem;
  margin-bottom: 0.4rem;
  color: #333;
}

.recommend img {
  width: 0.36rem;
  height: 0.36rem;
  vertical-align: middle;
  color: #fe9b95;
}
.recommend span {
  display: inline-block;
  font-size: 0.26rem;

  line-height: 0.84rem;
  display: inline-block;
  vertical-align: top;
  font-weight: 600;
  margin-left: 0.1rem;
}
.recommend li:nth-child(1) {
  background: #fe9b95;
  color: #fff;
}
.h-meals {
  font-size: 0.32rem;
  font-weight: 600;
  color: #999;
  line-height: 0.44rem;
  margin-left: 5%;
}
.h-meals1{
  font-size: 0.32rem;
    font-weight: 600;
    color: #999;
    line-height: 0.44rem;
margin-left: 5%;
margin-top: 0.64rem;
}
.every1{
  width: 100%;
  height: 80px;
  background: #fff;
  z-index: 100;
}
.every{
  margin-left: 5%;

}
.every li {
  display: inline-block;
  vertical-align: bottom;
  font-size: 0.32rem;
  color: #666;
  line-height: 1.28rem;
  margin: 0.2rem 0.4rem 0px 0px;
  position: relative;
  cursor: pointer;
  height: 0.8rem;
}
.every .active{
font-size: 0.6rem;
    font-weight: 600;
    color: #333;
    line-height: 1.08rem;
    border-bottom: 0.08rem solid #ff9d9b;
    box-sizing: border-box;
}

</style>
