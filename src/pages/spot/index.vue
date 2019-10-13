<template>
  <div class="wrap">
    <div class="main">
       <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
      </div>
      <div class="spot-list">
        <block v-for="(item, index) in spotInfo" :key="index">
             <div class="spot" @click="handleSpot">
               <brandItem :item="item" />
               <div v-if="index < spotInfo.length-1">
                 <van-divider />
               </div>
             </div>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
import brandItem from '../../components/brandItem.vue'
export default {
  data() {
    return {
      spotInfo: [
        {id: '00', name: '梵高星空艺术馆（东夷小镇官方旗舰店）', category: 0, type: 1, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/food1.jpeg'},
        {id: '01', name: '孔子学院', category: 0, type: 2, avgPrice: '120.00', score: '5', headIcon: '/static/images/hotel1.jpeg'},
        {id: '02', name: '金沙滩', category: 0, type: 0, avgPrice: '100.00', score: '3.5', headIcon: '/static/images/food1.jpeg'},
        {id: '03', name: '东夷公园', category: 0, type: 5, avgPrice: '120.00', score: '3', headIcon: '/static/images/hotel1.jpeg'},
        {id: '04', name: '东夷博物馆', category: 0, type: 1, avgPrice: '100.00', score: '4.5', headIcon: '/static/images/food1.jpeg'},
        {id: '05', name: '水上亲子乐园', category: 0, type: 3, avgPrice: '120.00', score: '2.5', headIcon: '/static/images/hotel1.jpeg'},
      ],
    }
  },

  components: {
    brandItem,
  },

  methods: {
    handleSearch() {
      let url = "../search/main?type=spot";
      wx.navigateTo({ url });
    },
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
</style>