<template>
  <div>
    <div class="title">
      <h3>我的关注</h3>
      <!-- <span float:right>共1条</span> -->
    </div>
    <div>
      <ul v-for="(item,index) in focusList">
        <li>
            <img :src="item.avatar" class="round_icon">
            <a :href="item.url">{{item.na}}</a>
            <button style="float:right">取消关注</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        focusList:[
          {
            na:'小白',
            avatar:'https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
          },
          {
            na:'小黑',
            avatar:'https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
          },
         {
            na:'小蓝',
            avatar:'https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
          },
        ]
      }
    },
    methods:{
      remove(index){
        this.collectionList.splice(index, 1)
      }
    }
  }

</script>

<style scoped>
.round_icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    border: solid 1px;
    float:left;
  }
  li {
    line-height: 50px;
    font-size: 17px;
    padding: 10px 0 8px 10px;
  }

  li a {
    text-decoration: none;
    color: #4d4d4d;
  }

</style>
