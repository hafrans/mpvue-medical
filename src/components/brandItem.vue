<template>
  <div class="brandItem" @click="getDetail(item.category, item.id)">
    <div class="head-icon">
      <image :src="item.headIcon" alt="头像" mode="aspectFill"/>
    </div>
    <div class="brand-info">
      <div class="info-detail info-name">{{item.name}}</div>
      <div class="info-detail info-score">
        <div >
          <span class="function">功能主治</span>: {{item.funciton}}
        </div>
        <!-- <van-rate
          readonly
          :value="item.score"
          size="15"
          allow-half
          color="#F90"
          void-color="#eee"
          void-icon="star"
          :change="onScoreChange"
        />
        <p class="score-value">{{item.score}}分</p> -->
      </div>
      <!-- <div class="info-detail info-type">{{brandType[item.category][item.type]}}</div> -->
      <!-- <div class="info-detail info-price"><b class="price-unit">￥</b>{{item.avgPrice}}</div> -->
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
        url: `/pages/brandDetail/main?category=${category}&id=${id}`,
      })
    }
  }
 
}
</script>

<style lang="less" scoped>
.brandItem{
  display: flex;
  flex-direction: row;
  height: 200rpx;
  width: 100%;
  .head-icon{
    width: 400rpx;
    height: 200rpx;
    image{
      width: 300rpx;
      height: 200rpx;
      border-radius: 10rpx;
    }
  }
  .brand-info{
    margin-left: 20rpx;
    overflow: hidden;
    .info-detail{
      margin-bottom: 10rpx;
    }
    .info-name{
      color: #4f4f4f;
      font-size: 32rpx;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .info-score{
      display: flex;
      flex-direction: row;
      font-size: 24rpx;
      color: #5f5f5f;
      .function {
        width: 50rpx;
        background-color: rgb(153,51,51);
        color: #fff;
        font-size: 30rpx;
      }
      .score-value{
        margin-left: 10rpx;
      }
    }
    .info-type{
      font-size: 26rpx;
      color: #5f5f5f;
    }
    .info-price{
      display: flex;
      flex-direction: row;
      font-size: 30rpx;
      color: #f60;
      font-weight: 700;
      .price-unit{
        font-size: 20rpx;
        margin-top: 10rpx;
      }
    }
  }
}
</style>