<template>
  <div class="comment-conatiner">
    <div class="comment-head">
      <div v-if="type===0" class="comment-cell" @click="goUserComment">
        <van-cell :title="cellTitle" is-link :border="false"/>
      </div>
      <div class="comment-type">
        <van-tabs :active="0" @change="onChange" color="#409EFF">
          <van-tab name="0" title="全部"></van-tab>
          <van-tab name="1" title="最新"></van-tab>
          <van-tab name="2" title="晒图"></van-tab>
          <van-tab v-if="type===1" name="3" title="低分"></van-tab>
        </van-tabs>
      </div>
    </div>
    <div class='comment-list' >
      <block v-for="(item, index) in commentList" :key="index">
        <CommentItem :item="item" :type="type" :index="index" v-if="(type === 0 && index < 3) || type === 1" @imgPreview="imgPreview"/>
        <div v-if="index < commentList.length-1">
          <van-divider />
        </div>
      </block>
    </div>
    <div v-if="type===0" class="comment-cell" @click="goUserComment">
     <van-cell title="查看全部用户评价" is-link :value="cellValue" :border="false"/>
    </div>
  </div>
</template>
<script>
import CommentItem from '../components/commentItem/index.vue'
export default {
  // type 0 部分评论 1 全部评论
  props: ['commentList', 'type', 'category', 'id'],
  data() {
    return {}
  },

  computed: {
    cellTitle(){
      return `用户评价(${this.commentList.length})`
    },
    cellValue(){
      return `共${this.commentList.length}条`
    }
  },

  components: {
    CommentItem,
  },

  methods: {
    imgPreview(params) {
      const { index, idx } = params;
      const preUrls = this.commentList[index].picUrls.map((value, idx) => 
        value.url
      )
      wx.previewImage({
        current: preUrls[idx],
        urls: preUrls,
      })
    },
    onChange(event){
      console.log("event:", event.mp.detail);
    },
    goUserComment() {
      wx.navigateTo({
        url: `/pages/userComment/main?category=${this.category}&id=${this.id}`,
      })
    },
  },
}
</script>
<style lang="less" scoped>
.comment-conatiner{
  margin: 0;
  padding: 0;
  .comment-head, .comment-type, .comment-cell{
    margin: 0;
    padding: 0;
  }
  .comment-type{
    width: 100%;
  }
  .comment-list{
  margin: 0;
  padding: 30rpx 20rpx 0;
}
}


</style>