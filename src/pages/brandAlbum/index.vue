<template>
  <div class="wrap">
      <van-grid :border="borderShow" gutter="5" column-num="3">
        <van-grid-item use-slot v-for="(item, idx) in picUrls" :key="idx" >
          <image style="width: 230rpx; height: 230rpx;" mode="aspectFill" :src='item.url'  @click='imgPreview(idx)'/>
        </van-grid-item>  
      </van-grid>
  </div>
</template>

<script>
// import { getComments } from '../../services/api.js'
export default {
  data() {
    return {
      picUrls: [
        {id: '0', url: '/static/images/food1.jpeg'},
        {id: '1', url: '/static/images/hotel1.jpeg'},
        {id: '2', url: '/static/images/food1.jpeg'},
        {id: '3', url: '/static/images/food1.jpeg'},
        {id: '4', url: '/static/images/food1.jpeg'},
        {id: '5', url: '/static/images/food1.jpeg'},
        {id: '6', url: '/static/images/food1.jpeg'},
        {id: '7', url: '/static/images/food1.jpeg'},
        {id: '8', url: '/static/images/food1.jpeg'},
        {id: '9', url: '/static/images/food1.jpeg'},
        {id: '10', url: '/static/images/food1.jpeg'},
        {id: '11', url: '/static/images/food1.jpeg'},
        {id: '12', url: '/static/images/food1.jpeg'},
      ],
      category: '',
      id: '',
      borderShow: false,
    }
  },

  components: {
  },

  methods: {
      // 预览图片
    imgPreview: function (idx) {
      console.log('idx:', idx);
      const preUrls = this.picUrls.map((value, index) => 
        value.url
      )
      console.log('preUrls:', preUrls)
      wx.previewImage({
        current: preUrls[idx],
        urls: preUrls,
      })
    },
  },

  // async mounted() {
    // console.log('params:', this.$root.$mp.query);
  //   const params = {
  //     category: this.category,
  //     id: this.id,
  //   }
  //   this.picUrls = await getBrandAlbum(params);
  // }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.container{
  padding-right: 20rpx;
}
</style>