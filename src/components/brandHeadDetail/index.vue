<template>
   <div class="detail-head">
      <div class="brand-img" @click="goBrandAlbum(detail.category, detail.id)">
        <image :src="detail.headIcon" class="slide-image" mode="aspectFill"/>
      </div>
      <div class="brand-main">
        <div class="basic-info">
          <div class="info-name">{{detail.name}}</div>
          <div class="info-score">
            <van-rate
              :value="detail.score"
              size="15"
              allow-half
              color="#F90"
              void-color="#eee"
              void-icon="star"
              :change="onScoreChange"
            />
            <p class="score-value">{{detail.score}}分</p>
            <div v-if="detail.category === 0 || detail.category === 1" class="price">人均:<b>￥</b>{{detail.avgPrice}}</div>
          </div>  
        </div>
        <div class="option">
          <button open-type="share"  class="option-item share" @click="handleShare">
            <van-icon name="share" size="20"/>
            <p class="option-name share-name">分享</p>
          </button>
          <div class="option-item star">
            <van-icon name="star-o" :color="starColor[collected]" size="20"/>
            <p class="option-name">{{collected === 0 ? '收藏' : '已收藏'}}</p>
          </div>
        </div>
      </div>
      <van-divider />
      <div class="address-contact">
        <div class="address">
          <van-icon name="map-marked" size="20px" color="#afafaf"/>
          <div class="address-detail">{{detail.address}}</div>
        </div>
        <div class="contact">
          <van-icon name="phone" size="20px" color="#F90"/>
        </div>
      </div>
    </div>
</template>

<script>
import { brandType } from '../constants/index'
export default {
  props: ['detail'],
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
@import '../../style/base.less';
.detail-head{
  display: flex;
  flex-direction: column;
  margin: 0rpx;
  padding: 0rpx;
  color: #4f4f4f;
}
.brand-img{
  width: 100%;
  height: 300rpx;
  image{
    width: 100%;
    height: 100%;
  }
}
.brand-main{
  padding: 20rpx 40rpx 0rpx 20rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .basic-info{
    .info-name{
      font-size: 32rpx;
      font-weight: 500;
      line-height: 50rpx;
      margin-bottom: 15rpx;
    }
    .info-score{
      display: flex;
      flex-direction: row;
      font-size: 24rpx;
      .score-value{
        margin-left: 10rpx;
      }
      .price{
        display: flex;
        flex-direction: row;
        font-size: 24rpx;
        margin-left: 20rpx;
        color: #afafaf;
      }
    }
  }
  .option{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    .option-item{
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 10rpx;
    }
    .share{
      background:#fff;
      line-height:60rpx;
      .share-name{
        margin-top: -27rpx;
      }
    }
    .share:after{
      border:none;
    }
    .option-name{
      font-size: 20rpx;
      margin-top: 8rpx;
    }
  }
}
.address-contact{
  padding: 10rpx 40rpx 20rpx 20rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .address{
    display: flex;
    flex-direction: row;
    font-size: 28rpx;
    .address-detail{
      margin-left: 20rpx;
    }
  }
}
</style>

