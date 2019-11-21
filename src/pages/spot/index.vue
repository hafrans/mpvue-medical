<template>
  <div class="wrap">
    <div class="main">
       <!-- <div class="search">
        <van-search placeholder="请输入搜索关键词" @click="handleSearch" shape="round" placeholder-style="text-align: center"></van-search>
      </div> -->
      <van-tabs type="card" class = "tab">
        <van-tab title="基本健康信息统计">
          <div class="healthInfo"> 
            <van-cell-group v-for="item in healthInfo" :key="item.id">
              <van-field :value="item.value"  :label="item.title"  :placeholder="item.placeholder"/>
            </van-cell-group>
            <div class="sex">
              <div class="text">性别</div>
              <van-radio-group :value="sex" bind:change="onChange" class="sexRadio">
                <van-radio name="1" class="radioItem">男</van-radio>
                <van-radio name="2" class="radioItem">女</van-radio>
              </van-radio-group>
            </div>
            <van-cell-group v-for="item in healthForm" :key="item.id">
              <van-cell :title="item.title">
                <div  slot="right-icon">
                   <van-stepper :value="item.value" integer />
                </div>
              </van-cell>
              <div class="con" v-if="item.con != ''">{{item.con}}</div>
            </van-cell-group>
            <div class="button">
              <van-button type="primary" class="btn">提交</van-button>
            </div>
            
          </div>
        </van-tab>
        <van-tab title="体检信息上传">
          <div class="medicalExam">
            <van-cell-group v-for="(category, cindex) in healthExamItem" :key="cindex" :title="category.name">
              <van-cell v-for="(item, iindex) in category.children" :key="iindex" :title="item.name" is-link link-type="navigateTo" :url="item.url+'&title='+ item.name+'&desc='+item.desc"/>
            </van-cell-group>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import brandItem from '../../components/brandItem.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  data() {
    return {
      sex: '1',
      healthInfo: [
        {id: 0, title: '邮箱', value: '', placeholder: "请输入您的邮箱"},
        {id: 1, title: 'ID', value: '', placeholder: "请输入您的ID"},
        {
          id: 2, 
          title: "遗传病史", 
          placeholder: "疾病名称，没有或未知请填无",
           value: '' 
          },
      ],
      healthForm: [
        {
          id: 0,
          title: '年龄',
          value: '',
          con: '',
      
        },
        {
          id: 1,
          title: '身高(cm)',
          value: '',
          con: '',
          
        },
        {
          id: 2,
          title: '体重(kg)',
          value: '',
          con: '',
        },
         {
          id: 3,
          title: '心率（/次每分钟）',
          value: '',
          con: '',
      
        },
        {
          id: 4,
          title: '每日饮酒量（/两）',
          value: '',
          con: '折合相当于白酒“××两”。白酒1两折合葡萄酒4两、黄酒5两、啤酒3两、果酒4两'
          
        },
        {
          id: 5,
          title: '每日抽烟量（/根）',
          value: '',
          con: '',
        }
      ]
    } 
  },
  components: {
    brandItem,
  },
  computed: {
    ...mapGetters(["test"]),
    ...mapState(["healthExamItem"])
  },
  methods: {
    onChange(event) {
    this.setData({
      radio: event.detail
    });
  }
    // handleSearch() {
    //   let url = "../search/main?type=spot";
    //   wx.navigateTo({ url });
    // },
  }
}
</script>
<style lang="less" scoped>
@import '../../style/base.less';
.healthInfo {
  margin-top: 20rpx;
  
  width: 100% ;
  background-color: rgb(248,248,248);
  .button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30rpx 0;
    background-color: #fff;
    .btn {
      background-color: rgb(7,193,96);
      color: #fff;
      border-radius: 10rpx;
    }

  }
  .con {
    font-size: 14px;
    padding:5rpx 10rpx;
    color: #8a8a8a;
  }
  .sex {
    display: flex;
    background-color: #fff;
    margin: 1rpx 0;
    padding: 23rpx;
    .text {
      margin: 5rpx 10rpx;
    }
    .sexRadio {
      margin-left: 10rpx;
    display: flex;
    width: 70%;
      .radioItem {
      margin-right: 20px;
      }
    }
  }
  
}
</style>