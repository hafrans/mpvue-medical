<template>
  <div class="brandItem" @click="getDetail(item.category, item.id)">
    <div class="head-icon">
      <image :src="item.headIcon" alt="头像" mode="aspectFill" />
    </div>
    <div class="brand-info">
      <div class="info-detail info-name">{{item.name}}</div>
      <div class="info-detail info-score">
        <van-rate
          :value="item.score"
          size="15"
          allow-half
          color="#F90"
          void-color="#eee"
          void-icon="star"
          :change="onScoreChange"
        />
        <p class="score-value">{{item.score}}分</p>
      </div>
      <div class="info-detail info-type">{{brandType[item.category][item.type]}}</div>
      <div class="info-detail info-price"><b class="price-unit">￥</b>{{item.avgPrice}}</div>
    </div>
  </div>
</template>

<script>
import { brandType } from './constants/index'
export default {
  props: ['item'],
  data() {
    return {
      brandType,
    }
  },
  methods: {
    getDetail(category, id) {
      wx.navigateTo({
        url: `/pages/productDetail/main?category=${category}&id=${id}`,
      })
    }
  }
 
}
</script>

<style lang="less" scoped>
@import '../style/base.less';
</style>