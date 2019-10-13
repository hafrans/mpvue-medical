<template>
  <div class="wrap">
    <bradHeadDetail :detail="detail" />
    <div class="divider"></div>
  </div>
</template>

<script>
// import { getComments } from '../../services/api.js'
import brandHeadDetail from '../../components/brandHeadDetail/index.vue'
export default {
  data() {
    return {
      detail: {
        category: 0,
        name: '梵高星空艺术馆（东夷小镇官方旗舰店）',
        headIcon: '/static/images/food1.jpeg',
        type: 1,
        id: '00',
        avgPrice: '120.00', 
        score: '5',
        address: '日照市东港区绿舟路东夷小镇B岛北街'
      },
      category: '',
      id: '',
      collected: 0,
      starColor: ['#4f4f4f', '#F90']
    }
  },

  components: {
    brandHeadDetail,
  },

  methods: {
    goBrandAlbum(category, id) {
      wx.navigateTo({
        url: `/pages/brandAlbum/main?category=${category}&id=${id}`,
      })
    },
    handleShare(){
      
    }
  },

  async mounted() {
    console.log('params:', this.$root.$mp.query);  
    // {category:,id:,}
    wx.showShareMenu();
    // const params = {
    //   category: this.category,
    //   id: this.id,
    // }
    // this.productDetail = await getProductDetail(params);
    // this.productSell = await getProductSell(params);
    // this.commentList = await getComments(params);
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