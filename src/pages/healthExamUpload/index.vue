<template>
    <div class="wrap">
        <div class="main">
            <van-panel :title="title" :desc="desc + '请提交您的'+title+'相关的扫描件或清晰照片'" class="filepadding">
                <van-uploader :file-list="fileList" multiple class="uploader"/>
            </van-panel>

                <van-submit-uploader-bar
                button-text="上传体检信息"
                button-type="warning"
                :price="fileList.length"
                tanyi="张"
                style="background-color:rgb(232,192,50)"
                tip="我们保证您的体检信息不会提交给任何第三方机构进行处理或分析"
                />
            
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style lang="less" scoped>

    .filepadding {
        padding: 0rem;
    }
    .main {
    }
    .uploader {
        margin: 1em 0.8em;
        padding-top: 20px;
    }


</style>