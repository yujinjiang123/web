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
        essay:"<div class=\"hljs-center\">\n" +
          "<p>我的博客</p>\n" +
          "</div>\n" +
          "<p><mark>wobiaojideneirong</mark></p>\n" +
          "<div class=\"hljs-center\">\n" +
          "<table>\n" +
          "<thead>\n" +
          "<tr>\n" +
          "<th>biaogedeyangsghi</th>\n" +
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
          "</div>"
      };
    },
  };
</script>
<style>
  @import "../../../node_modules/mavon-editor/dist/css/index.css";
</style>
