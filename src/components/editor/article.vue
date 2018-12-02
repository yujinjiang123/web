<template>
  <div>
    <span class="markdown-body" v-html="essay"></span>
  </div>
</template>


<script>
  export default {
    name: "editor",
    data() {
      return {
        value: "",
        contentHtml: "",
        essay: "<div class=\"hljs-center\">\n" +
          "<p>我的博客</p>\n" +
          "</div>\n" +
          "<p>内容是我瞎编的，哈哈哈哈</p>\n" +
          "<table>\n" +
          "<thead>\n" +
          "<tr>\n" +
          "<th>column1</th>\n" +
          "<th>column2</th>\n" +
          "<th>column3</th>\n" +
          "</tr>\n" +
          "</thead>\n" +
          "<tbody>\n" +
          "<tr>\n" +
          "<td>content1</td>\n" +
          "<td>content2</td>\n" +
          "<td>content3</td>\n" +
          "</tr>\n" +
          "</tbody>\n" +
          "</table>\n" +
          "<p><img src=\"http://kingsword.xyz:5678/group1/M00/00/00/rBsAAlwCkAGAeAEhAASeYm8GLHI627.jpg?token=f2faa1e564308b2578d86c2c2dc458dc&amp;ts=1543671809\" alt=\"loginbg1.jpg\" /></p>",
      };
    },
  };
</script>
<style>
  @import "../../../node_modules/mavon-editor/dist/css/index.css";
  @import "../../assets/css/markdown.css";
</style>
