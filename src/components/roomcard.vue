<template>
  <div>
    <Col span="6" style="background:#eee;padding-bottom:10px;padding-right:10px;" v-for="(roomItem,index) in rooms"
      :key="index">
    <Card :bordered="false">
      <p slot="title">
        <b>#{{roomItem.id}}</b>
      </p>
      <a href="#" slot="extra" @click.prevent>借用</a>
      <ul style="list-style:none">
        <li v-for="lessonItem in roomItem.lessonList">
          <Row>
            <Col span="16">
            <a target="_blank">{{ lessonItem.name }}</a>
            </Col>
            <Col span="2">
            <div :class="lessonItem.empty?'class1':'class2'"></div>
            </Col>
            <Col span="6">{{ lessonItem.empty?'空闲可用':'已占用'}}</Col>
          </Row>
          <!-- <hr> -->
        </li>
      </ul>
    </Card>
    </Col>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        rooms: [{
            id: 301,
            lessonList: [{
                name: "第一大节 08:00-09:40",
                empty: true
              },
              {
                name: "第二大节 10:00-11:40",
                empty: false
              },
              {
                name: "第三大节 14:30-16:10",
                empty: true
              },
              {
                name: "第四大节 16:20-18:00",
                empty: false
              },
              {
                name: "第五大节 19:00-20:30",
                empty: true
              }
            ]
          },
          {
            id: 301,
            lessonList: [{
                name: "第一大节 08:00-09:40",
                empty: true
              },
              {
                name: "第二大节 10:00-11:40",
                empty: false
              },
              {
                name: "第三大节 14:30-16:10",
                empty: true
              },
              {
                name: "第四大节 16:20-18:00",
                empty: false
              },
              {
                name: "第五大节 19:00-20:30",
                empty: true
              }
            ]
          },
          {
            id: 301,
            lessonList: [{
                name: "第一大节 08:00-09:40",
                empty: true
              },
              {
                name: "第二大节 10:00-11:40",
                empty: false
              },
              {
                name: "第三大节 14:30-16:10",
                empty: true
              },
              {
                name: "第四大节 16:20-18:00",
                empty: false
              },
              {
                name: "第五大节 19:00-20:30",
                empty: true
              }
            ]
          },
          {
            id: 301,
            lessonList: [{
                name: "第一大节 08:00-09:40",
                empty: true
              },
              {
                name: "第二大节 10:00-11:40",
                empty: false
              },
              {
                name: "第三大节 14:30-16:10",
                empty: true
              },
              {
                name: "第四大节 16:20-18:00",
                empty: false
              },
              {
                name: "第五大节 19:00-20:30",
                empty: true
              }
            ]
          },
          {
            id: 301,
            lessonList: [{
                name: "第一大节 08:00-09:40",
                empty: true
              },
              {
                name: "第二大节 10:00-11:40",
                empty: false
              },
              {
                name: "第三大节 14:30-16:10",
                empty: true
              },
              {
                name: "第四大节 16:20-18:00",
                empty: false
              },
              {
                name: "第五大节 19:00-20:30",
                empty: true
              }
            ]
          }
        ]
      };
    },
    methods: {
      changeLimit() {}
    },
    mounted() {}
  };

</script>
<style>
  div.class1 {
    width: 10px;
    height: 10px;
    margin-top: 5px;
    background-color: #67c23a;
  }

  div.class2 {
    width: 10px;
    height: 10px;
    margin-top: 5px;
    background-color: #ed4014;
  }

</style>
