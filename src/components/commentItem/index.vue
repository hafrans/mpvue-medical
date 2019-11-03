<template>
  <div class="comment-item">
    <div class='avatar-info'>
      <image :src='item.avatarUrl' mode="aspectFill"/>
    </div>
    <div class='main-info'>
      <div class='name-info'>{{item.userName}}</div>
      <div class='score-date'>
        <div class="score">
          <van-rate
            readonly
            :value="item.score"
            size="15"
            allow-half
            color="#F90"
            void-color="#eee"
            void-icon="star"
          />
        </div>
        <div class='date'>{{item.commentTime}}</div>
      </div>
      <div class='comment-info'>
        <div :class='detailClass[type]'>{{item.comment}}</div>
        <div v-if="item.picUrls.length > 0" class='pic-info'>
          <van-grid :border="false" gutter="5" column-num="4">
            <van-grid-item use-slot v-for="(pic, idx) in item.picUrls" :key="idx">
              <image v-if="idx < 4" style="width: 140rpx; height: 140rpx;" mode="aspectFill" :src='pic.url'  @click='imgPreview(idx)'/>
            </van-grid-item>  
          </van-grid>
        </div>
      </div>
    </div>
  </div>
</template>      
<script>
export default {
  props: ['item', 'type', 'index'],
  data() {
    return {
      detailClass: {
        0: "detail-part-info",
        1: 'detail-all-info',
      },
      borderShow: false,
    }
  },

  methods: {
    imgPreview(idx) {
      this.$emit('imgPreview', {index: this.index, idx});
    },
  },
}
</script>
<style lang="less" scoped>
.comment-item{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  .avatar-info{
    width: 100rpx;
    height: 100rpx;
    flex: 1;
    image{
      width: 100%;
      height: 100%;
      border-radius: 50%;
    } 
  }
  .main-info{
    margin-left: 20rpx;
    flex: 6;
    .name-info{
      font-size: 28rpx;
      color: #405f80;
      letter-spacing: 2rpx;
    }
    .score-date{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 10rpx 0;
      .date{
        font-size: 24rpx;
        color: #afafaf;
      }
    }
    .comment-info{
      .detail-part-info{
        font-size: 24rpx;
        color: #4f4f4f;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        white-space: normal !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .detail-all-info{
        font-size: 24rpx;
        color: #4f4f4f;
      }
      .pic-info{
        margin-top: 20rpx;
      }
    }
  }
}
</style>   