<template>
  <Affix offset-top="50">
    <div class="list">
        <div v-for="item in items" class="item">
            {{item.title}}
        </div>
    </div>
  </Affix>
</template>
<script>
export default {
    data(){
        return{
            items:[{
                title:"最新文章"
            },
            {
                title:"专业"
            },{
                title:"数学"
            },{
                title:"英语"
            },{
                title:"其他"
            }]
        }
    },
    props:{
        item:{}
    }
}
</script>

<style>
.list{
    width:100px;
    height: auto;
    display:flex;
    flex-direction: column;
    background-color: white;
    padding: 10px 0px;
}
.item{
    display: flex;
    width:100%;
    height: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.item:hover{
    background-color: #e64444;
    color:white;
}
</style>

