<template>
  <div>
    <Input search v-model="value" @on-search="search(value)" placeholder="搜索资源"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    },
    methods: {
      search(value) {
        this.$emit("search", value);
        this.value = "";
      }
    }
  };
</script>)
