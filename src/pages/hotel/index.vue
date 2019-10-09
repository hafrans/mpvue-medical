<template>
  <div class="wrap">
    <div class="main">
       <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
      </div>
      <div class="recommend-list">
        <block v-for="(item, index) in recommendInfo" :key="index">
             <div class="recommend" @click="handleRecommend">
               <van-card
                thumb-mode="aspectFill"
                :price="item.price"
                :desc="item.desc"
                :title="item.title"
                :thumb="item.imageUrl"
              />
              <van-divider />
             </div>
        </block>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recommendInfo: [
        {title: '汤本味', desc: '烤肉酒馆', price: '100.00', imageUrl: '/static/images/food1.jpeg'},
        {title: '韩式泡菜炒饭', desc: '白种元韩餐', price: '120.00', imageUrl: '/static/images/hotel1.jpeg'},
        {title: '井格火锅', desc: '烤肉酒馆', price: '100.00', imageUrl: '/static/images/food1.jpeg'},
        {title: '四季自助海鲜', desc: '白种元韩餐', price: '120.00', imageUrl: '/static/images/hotel1.jpeg'},
        {title: '鹿港小镇', desc: '烤肉酒馆', price: '100.00', imageUrl: '/static/images/food1.jpeg'},
        {title: '峨嵋酒家', desc: '白种元韩餐', price: '120.00', imageUrl: '/static/images/hotel1.jpeg'},
      ],
    }
  },

  components: {},

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
.recommend-list /deep/ .van-card{
  background-color: #fff;
  font-size: 28rpx;
  padding: 0rpx 10rpx;
  .van-card__img{
  border-radius: 10rpx;
}
.van-card__title{
  font-size: 36rpx;
  height: 40rpx;
  line-height: 40rpx;
  font-weight: 600;
  color: #4f4f4f;
}
.van-card__desc{
  height: 90rpx;
}
.van-card__bottom{
  font-size: 36rpx;
}
}
</style>