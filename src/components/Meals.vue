<template>
  <div class="meals">
    <!-- 每日三餐轮播 -->
    <div class="m-meals">
      <ul class="m-list">
        <li v-for="(msgs,index) in msg" :key="index" @click="send(index)" :class="{active:num==index}" >{{msgs}}</li>
      </ul>
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <div class="m-swipe1">
            <div>
              <img
                src="https://st-cn.meishij.net/r/115/13/2253365/s2253365_02657.jpg"
                alt=""
              />
              <h1>小白也能轻松搞定的营养健康早餐|减肥必备的轻食早餐</h1>
            </div>
            <div>
              <img
                src="https://st-cn.meishij.net/r/173/81/3832923/s3832923_146257416910981.jpg"
                alt=""
              />
              <h1>老北京糊塌子</h1>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="m-swipe1">
            <div>
              <img
                src="https://st-cn.meishij.net/r/41/212/5178041/s5178041_151719309884274.jpg"
                alt=""
              />
              <h1>猪肉白菜炖粉条</h1>
            </div>
            <div>
              <img
                src="https://st-cn.meishij.net/r/162/177/3544412/s3544412_146156162656419.jpg"
                alt=""
              />
              <h1>炸馒头片</h1>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="m-swipe1">
            <div>
              <img
                src="https://st-cn.meishij.net/r/134/61/5140384/s5140384_149914457762331.jpg"
                alt=""
              />
              <h1>麻糬小面包</h1>
            </div>
            <div>
              <img
                src="https://st-cn.meishij.net/r/147/198/4174647/s4174647_147338296374263.jpg"
                alt=""
              />
              <h1>冰皮月饼</h1>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="m-swipe1">
            <div>
              <img
                src="https://st-cn.meishij.net/r/206/231/5120456/s5120456_147731166262515.jpg"
                alt=""
              />
              <h1>砂锅粉丝</h1>
            </div>
            <div>
              <img
                src="https://st-cn.meishij.net/r/162/177/3544412/s3544412_146156162656419.jpg"
                alt=""
              />
              <h1>炸馒头片</h1>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="m-swipe1">
            <div>
              <img
                src="https://st-cn.meishij.net/r/115/13/2253365/s2253365_02657.jpg"
                alt=""
              />
              <h1>青菜火腿豆腐羹</h1>
            </div>
            <div>
              <img
                src="https://st-cn.meishij.net/r/168/44/9198668/s9198668_153986709928600.jpg"
                alt=""
              />
              <h1>自制麻辣烫</h1>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    msg:['早餐','午餐','下午茶','晚餐','夜宵'],
  num:0
  }
},
methods:{
  send(i){
// console.log(i)
this.num=i
  }
}
};
</script>

<style scoped>
.m-list {
  display: flex;
  justify-content: start;
  margin: 0 0.32rem 0.32rem 0.32rem;
}
.m-list li {
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
.m-swipe1 {
  display: flex;
  justify-content: space-around;
}
.m-swipe1 img {
  width: 3.34rem;
  height: 4.48rem;
  margin-left: 4%;
  border-radius: 0.2rem;
}
.m-swipe1 h1 {
  width: 3.34rem;
  font-size: 0.36rem;
  font-weight: 600;
  color: #333;
  display: block;
  height: 0.56rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 0.56rem;
  padding: 0.24rem 0px 0.1rem;
  margin-left: 0.2rem;
}
.m-list .active{
font-size: 0.6rem;
    font-weight: 600;
    color: #333;
    line-height: 1.08rem;
    border-bottom: 0.08rem solid #ff9d9b;
    box-sizing: border-box;
}

</style>
