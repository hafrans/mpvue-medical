<template>
  <div class="wrap">
    <div class="main">
      <div class="info basic">
        <div class="title">{{item.fullName}}</div>
        <van-divider />
        <div class="valid">
          <div class="title">使用有效期</div>
          <div class="detail">
            <div class="valid-time">{{item.validTime}}前可使用</div>
            <div class="price"><b class="price-unit">￥</b>{{item.price}}</div>
          </div>
          <div class="count">
            <div class="title">购买数量</div>
            
          </div>
        </div>
      </div>
      <div class="info visitor">
        <div class=""></div>
      </div>
      <div class="info submit"></div>
    </div>    
  </div>
</template>
<script>
import { orderType } from '@/components/constants/index'
export default {
  data(){
    return {
      detail: {},
      item: {},
      orderType,
      orderList: [
        {oid: '0', name: '东夷海洋馆成人票', headIcon: '/static/images/sea4.jpg', totalPrice: '200.00', num: '2', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '悦湾大酒店大床房', headIcon: '/static/images/hotel3.jpeg', totalPrice: '500.00', num: '1', status: 2, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '金沙滩学生票', headIcon: '/static/images/beach1.jpeg', totalPrice: '100.00', num: '4', status: 3, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '宽板凳火锅四人套餐', headIcon: '/static/images/hotpot.jpg', totalPrice: '360.00', num: '1', status: 4, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: '胖哥俩肉蟹煲双人餐', headIcon: '/static/images/pangfood.jpg', totalPrice: '160.00', num: '1', status: 4, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: 'Toma酒店套房', headIcon: '/static/images/hotel6.jpeg', totalPrice: '700.00', num: '1', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
        {oid: '0', name: 'Tomacado花厨双人晚餐', headIcon: '/static/images/westfood.jpeg', totalPrice: '640.00', num: '1', status: 1, payId: '4578983493', createTime: '2019-06-20', validTime: '2020-06-20'},
      ],
    }
  },
  methods: {
    
  },
  async mounted() {
    console.log('params:', this.$root.$mp.query);
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.wrap{
  background-image: linear-gradient(#409EFF,#cddef0)
}
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