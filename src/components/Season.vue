<template>
<!-- 时令 -->
  <div class="recom">
      <ul class="r-recom">
        <li v-for="(lists,index) in list" :key="index" v-show="nums==1">
            <img :src="lists.imgw" alt="">
            <h1>{{lists.itile}}</h1>
             <p class="raise">养</p>
              <p class="raise1">{{lists.des}}</p>
              <div class="raise2">
               <img :src="lists.head" alt="">
               <span>{{lists.n}}</span>
               <i></i>
               {{lists.view}}
              </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
 data(){
     return {
     list:null
     }
 },
 props:['nums'],
mounted(){
    this.axios.get('http://localhost:3030/index1').then(res=>{
        this.list=res.data.data
        // console.log( this.list)
       
    })
}

}
</script>

<style scoped>
.r-recom{
    margin-top: 0.32rem;
   flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
}
.r-recom img{
width: 3.32rem;
height: 4.44rem;
border-radius: 0.2rem;
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
.raise2 img{
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
   margin-left: 0.8rem;
}
</style>