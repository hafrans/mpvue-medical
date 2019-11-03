<template>
<div class="wrap">
  <CommentList :commentList="commentList" :type="1"/>
</div>
</template>
<script>
import CommentList from '../../components/CommentList.vue'
export default {
  data(){
    return {
        commentList: [
        {
          cid: 'c0', 
          userName: 'Tiamin', 
          avatarUrl: '/static/images/head1.jpg', 
          commentTime: '2019-04-20', 
          score: '4.5',
          comment: '海洋馆里分几个部分，有不同的动物主题，大大小小的生物不少，环境还不错，一进门就像雨林似的，有代入感，每天定时有海洋动物表演，不过总体看下来内容不是很丰富，主要是海豚的表现会让人兴奋一下下，一些很小的生物在玻璃缸里游动，在灯光下仔细观察还是挺有意思的，中间看鲸鱼，被它的声音吸引。海洋馆里还有餐饮区和购物区，价格也是不便宜，总体来说，还是值得一逛，就是小贵', 
          picUrls: [
            {
              pid: 'p0', 
              url: '/static/images/sea1.jpg'},
            {
              pid: 'p1', 
              url: '/static/images/sea4.jpg'},
            {
              pid: 'p2', 
              url: '/static/images/sea2.jpg'},
            {
              pid: 'p3', 
              url: '/static/images/sea5.jpg'},
            {
              pid: 'p4', 
              url: '/static/images/sea6.jpg'},
            {
            pid: 'p4', 
            url: '/static/images/sea7.jpg'},
          ]
        },
        { 
          cid: 'c1', 
          userName: 'Adam', 
          avatarUrl: '/static/images/head3.jpg', 
          commentTime: '2019-01-20', 
          score: '3.5',
          comment: '去的时候人非常多，爆满，有白鲸、海狮，海豚等表演，里面还有各种海底世界的鱼类，最值得一提的就是里面的发光水母，真的好美好美', 
          picUrls: [
            {
              pid: 'p8', 
              url: '/static/images/sea3.jpg'},
          ]
        },
        {
          cid: 'c2', 
          userName: 'Joe', 
          avatarUrl: '/static/images/sea8.jpg', 
          commentTime: '2019-05-18', 
          score: '3.5',
          comment: '总体来说还是不错的！但是不知道为什么取消了“触摸池”，不能真正实际感受海洋生物了……', 
          picUrls: [],
        },
        {
          cid: 'c3', 
          userName: 'Tom', 
          avatarUrl: '/static/images/head4.jpg', 
          commentTime: '2019-06-20', 
          score: '3.5',
          comment: '海底隧道也有点太短了吧 而且买了和动物园的通票还必须要从海洋馆那个门进入 导致从动物园正门绕过去心情已经down了一大半 但是水母照出来依旧是好看的～', 
          picUrls: [],
        },
      ],
    }
  },
  components: {
    CommentList,
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
</style>