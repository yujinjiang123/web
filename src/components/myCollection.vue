<template>
  <div>
    <div class="title">
      <h3>我的收藏</h3>
      <!-- <span float:right>共1条</span> -->
    </div>
    <div>
      <ul v-for="(item,index) in collectionList">
        <li><a :href="item.url">{{item.name}}</a> <label><span>{{item.date}}</span><em @click="remove(index)">取消</em></label></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        collectionList:[
          {
            name:'百度',
            url:'www.baidu.com',
            date:'2018-12-1',
          },
          {
            name:'百度',
            url:'www.baidu.com',
            date:'2018-12-1',
          },
          {
            name:'百度',
            url:'www.baidu.com',
            date:'2018-12-1',
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
  li {
    font-size: 17px;
    padding: 10px 0 8px 10px;
  }

  li a {
    text-decoration: none;
    color: #4d4d4d;
  }

  li label {
    float: right
  }

  label span {
    margin-right: 15px;
    color: #ccc;
  }

  label em {
    font-style: normal;
    color: #999;
    cursor: pointer;
  }

</style>
