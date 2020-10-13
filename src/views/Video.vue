<template>
  <div class="video">
    <div class="head">
      <i class="iconfont icon-jiantouzuo left"></i>
      <span>返回</span>
      <h1>菜谱视频大全</h1>
       <i class="iconfont icon-fangdajing right"></i>
    </div>

      <div class="recom">
      <ul class="r-recom">
        <li v-for="(lists,index) in list" :key="index">
            <img class="navs" :src="lists.imgw" alt="">
            <h1>{{lists.itile}}</h1>
              <div class="raise2">
           
               <img class="navs1" src="https://st-cn.meishij.net/user/162/221/ns117912_142372157780527.jpg" alt="">
               <span>{{con}}</span>
               <i></i>
               {{lists.view}}
              </div>
        </li>
      </ul>
  </div>
    <Bnavication></Bnavication>
  </div>
</template>

<script>
import Bnavication from "../components/Bnavication";
export default {
  data(){
    return {
    list:null,
    lists:[],
    con:'美食节',
    c:0
    }
  },
  mounted(){
     window.addEventListener('scroll', this.handleScroll)
 this.gets(0)
  },
  methods:{
     gets(b){
    this.axios.get('http://localhost:3030/video?id='+b).then(res=>{
        this.list= res.data.data
    })
  },
       handleScroll () {
         const ipts=document.querySelector('.video')
        var a=window.scrollY
        
      // console.log(ipts.clientHeight-a)
   if(ipts.clientHeight-a==667){
      this.c=this.c+21 
      this.lists= this.lists.concat(this.list)
   }
   this.gets( this.c)
 console.log(this.c) 
      },
 
  },
components:{
  Bnavication
}
}
</script>

<style scoped>
.head{
  width: 100%;
  height: 44px;
   text-align: center;
   line-height: 44px;
}
.head h1{
  display: inline;
 color: #000;
 font-size: 18px;
 font-weight: 600;
}
.head .left{
float: left;
margin-left: 16px;
font-size: 15px;
font-weight: 600;
}
.head span{
  float: left;
  font-size: 15px;
}
.head .right{
   float: right;
   margin-right: 16px;
   font-size: 25px;
}


.r-recom{
    margin-top: 0.32rem;
   flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
}
.r-recom li{
  width: 166px;
  overflow: hidden;
  position: relative;
}
.r-recom .navs{
width: 289px;
    height: 4.44rem;
    border-radius: 0.2rem;
    transform: translate(-20%);

}
.r-recom h1{
        font-size: 0.32rem;
    color: #333;
    font-weight: 600;
    line-height: 0.44rem;
    padding: 0.2rem 0.2rem 0px 0.2rem;
    width: 3.2rem;
      overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.raise{
    text-align: center;
    margin-left: 0.2rem;
width: 0.36rem;
height: 0.24rem;
background:#ff8d8d;
color: #fff;
font-size: 0.24rem;
}
.raise1{
margin-left: 0.2rem;
    font-size: 0.22rem;
    color: #ff8d8d;
    line-height: 0.28rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.raise2{
    margin: 0.4rem 0.2rem 0.3rem 0.2rem;
}
.raise2 .navs1{
    width: 0.36rem;
    height: 0.36rem;
    border-radius: 50%;
    vertical-align: middle;
     margin-right: 0.1rem;

}
.raise2 span{
    display: inline-block;
    font-size: 0.18rem;
    color: #666;
    width: 1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.raise2 i{
    display: inline-block;
    height: 0.2rem;
    width: 0.26rem;
    background: url('https://st-cn.meishij.net/p2/20181206/20181206143142_460.png') -4px -20px no-repeat;
    background-size: 0.4rem 0.8rem;
   margin-left: 25px;
}
</style>