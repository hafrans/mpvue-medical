<template>
  <div class="wrap">
    <div class="main">
      <div class="search">
       <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
    </div>
    <swiper
      class="swiper"
      indicator-dots="true"
      autoplay="true"
      circular="true"
      interval="2000"
      duration="500"
    >
      <block v-for="(item, index) in bannerUrl" :index="index" :key="index">
        <swiper-item>
          <image :src="item.url" class="slide-image" />
        </swiper-item>
      </block>
    </swiper>
    <div class="nav-list">
      <block v-for="(item, index) in navInfo" :key="index">
        <div class="nav" @click="handleNav(item.url)">
          <van-icon :name="item.type" :color="item.color" size="80rpx"/>
          <div class="nav-title">{{item.title}}</div>
        </div>
      </block>  
    </div>
      
    </div>
    <div class="divider"></div> 
    <div class="main">
      <div class="hot-new-list">
        <block v-for="(item, index) in hotNewInfo" :key="index">
            <div class="hot-new" @click="handleNav(item.url)">
                <van-icon :name="item.type" :color="item.color" size="80rpx"/>
                <div class="desc">
                  <image :src="item.src" alt="图片" />
                </div>
            </div>
          </block>  
      </div>
    </div>
    <div class="divider"></div>
    <div class="main">
      <van-divider contentPosition="center">推荐</van-divider>
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
      bannerUrl: [
        { url: "/static/images/banner0.jpg" },
        { url: "/static/images/banner1.jpg" },
        { url: "/static/images/banner2.jpg" }
      ],
      navInfo: [
        {type: 'send-gift', title: '景点门票', color: '#409EFF', url: '../spot/main'},
        {type: 'wap-home', title: '酒店', color: '#E76262', url: '../hotel/main'},
        {type: 'invition', title: '民宿', color: '#DD8154', url: '../hotel/main'},
        {type: 'todo-list', title: '攻略', color: '#E3B168', url: '../hotel/main'},
        {type: 'coupon', title: '美食', color: '#F56C6C', url: '../hotel/main'},
        {type: 'shop', title: '购物', color: '#D77820', url: '../hotel/main'},
        {type: 'smile', title: '休闲娱乐', color: '#DE5C92', url: '../hotel/main'},
        {type: 'friends', title: '行程定制', color: '#5BA775', url: '../hotel/main'},
      ],
       hotNewInfo: [
        {type: 'hot', color: '#efefef', src: '/static/images/food1.jpeg', url: '../spot/main'},
        {type: 'new', color: '#efefef', src: '/static/images/hotel1.jpeg', url: '../hotel/main'},
      ],
      recommendInfo: [
        {title: '食肉兽', desc: '烤肉酒馆', price: '100.00', imageUrl: '/static/images/food1.jpeg'},
        {title: '本家', desc: '白种元韩餐', price: '120.00', imageUrl: '/static/images/hotel1.jpeg'},
        {title: '食肉兽', desc: '烤肉酒馆', price: '100.00', imageUrl: '/static/images/food1.jpeg'},
        {title: '本家', desc: '白种元韩餐', price: '120.00', imageUrl: '/static/images/hotel1.jpeg'},
        {title: '食肉兽', desc: '烤肉酒馆', price: '100.00', imageUrl: '/static/images/food1.jpeg'},
        {title: '本家', desc: '白种元韩餐', price: '120.00', imageUrl: '/static/images/hotel1.jpeg'},
      ],
    };
  },

  components: {},

  methods: {
    handleSearch() {
      let url = "../search/main?type=home";
      wx.navigateTo({ url });
    },
    handleNav(url){
      wx.navigateTo({url})
    }
  }
};
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.search{
    margin-left: -30rpx;
    width: 109%;
  }
.slide-image {
  width: 100%;
  height: 300rpx;
}
.nav-list{
  margin-top: 30rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.nav{
  width: 25%;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 30rpx;
}
.nav-title{
  color: #4f4f4f;
  font-size: 28rpx;
}
.divider{
  background: #efefef;
  width: 100%;
  height: 15rpx;
}
.hot-new-list{
  margin-top: 20rpx;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.hot-new{
  width: 49.2%;
  height: 200rpx;
  text-align: center;
  display: flex;
  flex-direction: row;
  margin-bottom: 20rpx;
  justify-content: space-between;
  border-radius: 5rpx;
}
.hot-new:nth-child(odd){
  background-image: linear-gradient(160deg, #a200ff 20%,#cf3700 80%);
}
.hot-new:nth-child(even){
  background-image: linear-gradient(160deg, #447c73 20%,#008cff 80%);
}
.desc{
  display: flex;
  align-items: center;
  image{
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    align-items: center;
    margin-right: 20rpx;
  }
}

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