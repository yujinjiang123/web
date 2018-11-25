<template>
    <Affix class="affix" :offset-top="50" >
        <span class="demo-affix item">Fixed at the top 50px from the top</span>
        <span class="demo-affix item">Fixed at the top 50px from the top</span>
    </Affix>
</template>
<script>
export default {};
</script>
<style>
.item {
  width: 100%;
  background-color: #2db7f5;
}
.affix {
  display: flex;
  flex-direction: row-reverse;
}
</style>
