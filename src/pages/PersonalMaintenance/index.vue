<template>
  <div class="wrap">
    <div class="personalizedMaintenance">
      <van-tabs swipe-threshold="3" color="#409EFF" @click="onClick">
          <van-tab name="0" title="中医药膳方案"></van-tab>
          
          <van-tab name="1" title="中医调理方案"></van-tab>
          <van-tab name="2" title="在线营养师"></van-tab>
      </van-tabs>
    </div>
      
  </div>
</template>
<script>
import { orderType } from '@/components/constants/index'
export default {
  data(){
    return {
     
    }
  },
  methods: {
    goMakeComment(){
      const url = '/pages/makeComment/main';
      wx.navigateTo({url})
    },
    onClick(e){
      console.log(e)
    }
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.order-type{
  margin: 0;
  padding: 0;
}
.order-list{
  margin-top: 20rpx;
}
.order-item{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .order-main{
    display: flex;
      flex-direction: row;
      .head-icon{
        width: 100rpx;
        height: 100rpx;
        image{
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
      .order-info{
        margin-left: 20rpx;
        overflow: hidden;
        .info-detail{
          margin-bottom: 10rpx;
          font-size: 24rpx;
        }
        .info-name{
          color: #4f4f4f;
          font-size: 30rpx;
          font-weight: 500;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 400rpx;
        }
        .info-num, .info-total{
          color: #afafaf;
        }
      }
    }
   .order-tip{
    .tip-info{
      margin-bottom: 20rpx;
      color: #afafaf;
      font-size: 28rpx;
      text-align: center;
    }
    .tip-action{
      width: 120rpx;
      height: 60rpx;
      font-size: 28rpx;
      background-color: #409EFF;
      text-align: center;
      line-height: 60rpx;
      color: #fff;
      border-radius: 120rpx;
    }
  }
}
</style>