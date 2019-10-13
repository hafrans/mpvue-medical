<template>
  <div class="main">
    <div class="search">
    <van-search placeholder="请输入搜索关键词" @click="getSearch" shape="round" show-action="true"></van-search>
    </div>
    <block v-for="(item, index) in searchData" :key="index">
      <div class="record">
      <div class="title">{{item.title}}</div>
     
        <div class="detail">
           <block v-for="(detail, id ) in item.record" :key="id">
          <div class="name">{{detail.name}}</div>
      </block>

        </div>
    </div>
    </block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchData: [
        {title: '猜你想找', 
        record: [
          {name: '颐和园'},
          {name: '八达岭长城'},
          {name: '故宫'},
          {name: '故宫'},
          {name: '北京欢乐谷'},
          {name: '太平洋海底世界博物馆'},
          {name: '非洲动物世界博物馆'},
        ]},
        {title: '历史搜索', 
        record: [
          {name: '颐和园'},
          {name: '八达岭长城'},
          {name: '故宫'},
          {name: '北京欢乐谷'},
          {name: '太平洋海底世界博物馆'},
          {name: '非洲动物世界博物馆'},
        ]},
      ]
    }
  },

  components: {},

  methods: {
   
  },
  async mounted (){
    console.log('query:', this.$root.$mp.query);
    }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
  .record{
    margin-bottom: 30rpx;
  }
  .title{
    color: #909399;
    font-size: 28rpx;
  }
  .detail{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .name{
    color: #4f4f4f;
    font-size: 24rpx;
    padding: 15rpx;
    margin-right: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    border: 2rpx solid #efefef;
  }
</style>