<template>
  <div class="home">
    <top @sendBlog="getBlog"></top>
    <div class="lantern">
      <Row type="flex" justify="start" class="code-row-bg">
        <Col :xs="{ span:24}" :sm="{ span: 8, push: 4 }" :md="{ span: 6, push: 5 }">
          <lantern :array="images"></lantern>
        </Col>
      </Row>
    </div>
         <filterList class="filterList"></filterList> 
    <div class="content">
       <div class="blogs">
          <div class="blog" v-for="blog in blogs">
            <Row type="flex" justify="start" class="code-row-bg">
             <Col :xs="{ span:22,push:1 }" :sm="{ span: 12, push: 4 }" :md="{ span: 12, push: 5 }">
                <blog :blog="blog" id="blog.id"></blog>
              </Col>
          </Row>
        </div>
       </div> 
  </div>
  </div>
</template>

<script>
import Lantern from "@/components/lantern";
import Blog from "@/components/blog";
import Top from "@/views/top";
import FilterList from "@/components/FilterList";
import { getAlllogs } from "./../api/api";

export default {
  components: {
    lantern: Lantern,
    blog: Blog,
    top: Top,
    filterList:FilterList
  },
  data() {
    return {
      totalPageNum:null,
      pageNum: null,
      pageSize: 15,
      images: [
        {
          id: 1,
          image: require("./../assets/3.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id: 2,
          image: require("./../assets/4.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id: 3,
          image: require("./../assets/3.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id: 4,
          image: require("./../assets/4.jpg"),
          url: "http://www.baidu.com"
        }
      ],
      blogs: [
        {
          id:1,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:2,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:3,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:4,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:5,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:6,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:7,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          id:8,
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        }
      ]
    };
  },
  methods: {
    searchBlog(data) {
      console.log(data);
      //TODO
    },
    getBlog(data){
      //todo
      console.log(data);
    },
    getBlogs(){
      if(this.totalPageNum==null){
        return ;
      }else if(this.pageNum>this.totalPageNum){
        this.$Message.warning('没有更多内容了');
      }
      getAllBlogs(this.pageNum,this.pageSize)
        .then(res=>{
          console.log(res);
          //TODO
        })
        .catch(err=>{
          console.log(err);
        })
    },
    gotoEditor(){
      this.$router.push({
        name:'markdown',
      })
    }
  },
  created: function() {
    //获取博客信息
    this.getBlogs();
  }
};
</script>

<style scoped>
.home {
  background-color: #f8f8f9;
}

.editor:hover{
  color:#ed4014;
}

.lantern {
  width: 100%;
  height: 100%;
  padding: 15px;
}

.blogs{
  width:100%;
  display: flex;
  flex-direction: column;
}

.blog {
  width: 100%;
  height: auto;
}

.content{
  display: flex;
}
.filterList{
  position: absolute;
  margin-left:12%;
}

</style>

