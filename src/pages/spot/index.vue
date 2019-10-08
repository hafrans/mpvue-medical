<template>
  <div class="wrap">
    <div class="main">
       <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  components: {},

  methods: {
    handleSearch() {
      let url = "../search/main?type=spot";
      wx.navigateTo({ url });
    },
  }
}
</script>