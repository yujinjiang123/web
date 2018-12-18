<template>
  <div>
    <div class="title">
      <h3>我的粉丝</h3>
      <span class="num">共{{fansList.length}}条</span>
    </div>
    <div>
      <ul v-for="(item,index) in fansList">
        <li>
            <img :src="item.avatar" class="round_icon">
            <a :href="item.url">{{item.nickname}}</a>
            <Button type="warning" ghost style="float:right;margin-top:10px">对其隐藏</Button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        fansList:[
          {
            nickname:'小白',
            avatar:'https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
          },
          {
            nickname:'小黑',
            avatar:'https://img.zcool.cn/community/01f9ea56e282836ac72531cbe0233b.jpg@2o.jpg',
          },
         {
            nickname:'小蓝',
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
    margin-left:15px;
  }

</style>