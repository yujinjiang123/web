<template>
  <div class="home">
      <top>
          <search @search="searchBlog" slot="search"></search>
          <dropdown slot="user" >
            <useravatar slot="dropdown"></useravatar>
          </dropdown>
      </top>
      <div class="lantern">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col  :xs="{ span:24}" :sm="{ span: 8, push: 4 }" :md="{ span: 6, push: 5 }">
            <lantern :array='images'></lantern>
          </Col>
        </Row>
      </div>
      <div class="blogs"  v-for="blog in blogs">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col  :xs="{ span:22,push:1 }" :sm="{ span: 12, push: 4 }" :md="{ span: 12, push: 5 }">
            <blog :blog=blog></blog>
          </Col>
        </Row>
      </div>
  </div>
  <!-- <div class="home">
    <responsive>
      <top slot="head">
        <search @search="searchBlog" slot="search"></search>
      </top>
    </responsive>  
     <div class="lantern" slot="content">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col  :xs="{ span:24}" :sm="{ span: 8, push: 4 }" :md="{ span: 6, push: 5 }">
            <lantern :array='images'></lantern>
          </Col>
        </Row>
      </div>
      <div class="blogs"  v-for="blog in blogs">
        <Row type="flex" justify="start" class="code-row-bg">
          <Col  :xs="{ span:22,push:1 }" :sm="{ span: 12, push: 4 }" :md="{ span: 12, push: 5 }">
            <blog :blog=blog></blog>
          </Col>
        </Row>
      </div>
  </div> -->
</template>

<script>
import ResponsiveLayou from "@/components/layout/responsive";
import Lantern from "@/components/lantern";
import Blog from "@/components/blog";
import Search from "@/components/search";
import Head from "@/components/head";
import Dropdown from "@/components/dropdown";
import UserAvatar from "@/components/userAvatar";

export default {
  components: {
    responsive: ResponsiveLayou,
    lantern: Lantern,
    blog: Blog,
    search: Search,
    top: Head,
    dropdown: Dropdown,
    useravatar: UserAvatar
  },
  data() {
    return {
      images: [
        {
          id:1,
          image: require("./../assets/3.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id:2,
          image: require("./../assets/4.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id:3,
          image: require("./../assets/3.jpg"),
          url: "http://www.baidu.com"
        },
        {
          id:4,
          image: require("./../assets/4.jpg"),
          url: "http://www.baidu.com"
        }
      ],
      blogs: [
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "http://www.baidu.com",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
          title: "学习VUE",
          content: "我爱学习，学习爱我",
          image: "https://i.loli.net/2017/08/21/599a521472424.jpg",
          url: "https://cn.vuejs.org/v2/guide/routing.html",
          time: new Date().getTime() - 60 * 3 * 1000,
          readNumber: 123,
          collection: 456
        },
        {
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
    }
  }
};
</script>

<style>
.home {
  background-color: #f8f8f9;
}
.lantern {
  width: 100%;
  height: 100%;
  padding: 15px;
}
.blogs {
  width: 100%;
  height: auto;
}
</style>

