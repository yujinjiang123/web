<template>
  <div>
    <Input search v-model="value" @on-search="search(value)" :placeholder="placeholder"/>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ""
      };
    },
    props: ['placeholder'],
    methods: {
      search(value) {
        this.$emit("search", value);
        this.value = "";
      }
    }
  };
</script>)
