<template>
    <Carousel autoplay class="pictures" loop>
            <CarouselItem v-for="item in array" :key="item.url">
               <a :href="item.url"><img class="image" :src="item.image" /></a> 
            </CarouselItem>
    </Carousel>
</template>
<script>
export default {
  props: {
    array: {}
  }
};
</script>

<style>
.pictures {
  width: 100%;
  height: 200px;
}
.image {
  width: 100%;
  height: 200px;
}
</style>
