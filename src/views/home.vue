<template>
  <div class="home">
    <top @sendBlog="searchBlog"></top>
    <div class="lantern">
      <Scroll :on-reach-bottom="handleReachBottom">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col :xs="{ span:24}" :sm="{ span: 8, push: 4 }" :md="{ span: 6, push: 5 }">
            <lantern :array="images"></lantern>
          </Col>
        </Row>
      </Scroll>
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
import {searchBlogs} from "@/api/blog";

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
      pageNum: 1,
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
      blogs: [],
    };
  },
  methods: {
    handleReachBottom () {
      return new Promise(resolve => {
        setTimeout(() => {
          const last = this.list1[this.list1.length - 1];
          for (let i = 1; i < 11; i++) {
            this.list1.push(last + i);
          }
          resolve();
        }, 2000);
      });
    },
    searchBlog(data) {
      console.log(data);
      let params={
        classify: 0,
        pageNumber: 1,
        pageSize: this.pageSize,
        title:data
      };
      searchBlogs(params).then(res=>{
        console.log(res);
        if(res.data.length===0||res.data==null){
          this.$message.info("没有找到相关内容");
        }else{
          this.blogs=res.data;
        }
      }).catch(err=>{
        console.log(err);
      })
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
    let params={
      classify: 0,
      pageNumber: 1,
      pageSize: this.pageSize,
    };
    //获取博客信息
    searchBlogs(params).then(res=>{
      console.log(res);
      this.blogs=res.data;
      this.pageNum++;
    }).catch(err=>{
      console.log(err);
    });
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

