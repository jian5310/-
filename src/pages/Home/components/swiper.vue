<template>
  <div class="wrapper">
   <swiper :options="swiperOption">
    <!-- slides -->
     <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swpier-img" :src="item.imgUrl"></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>

  </div>
</template>

<script>
export default{
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg'
        },
        {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/ce/bca92895556c5002.jpg_750x200_cf56d46c.jpg'
        }
      ]
    }
  },
  name: 'HomeSwiper'
}
</script>

<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active
    background: #ffffff !important
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    .swpier-img
        width:100%
</style>
