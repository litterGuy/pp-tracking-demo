<template>
  <div class="wrapper">
    <a-row>
      <a-col :lg="10" :md="10" :sm="9">
        <div class="left-wrapper">
          <div class="upimg-dragger">
            <a-upload-dragger
                name="file"
                action="/tools/ocr_text/"
                @change="handleChange"
                accept=".mp4, .mkv"
                :beforeUpload="beforeUpload"
                listType="picture"
                :showUploadList="false"
            >
              <p>点击、拖动</p>
            </a-upload-dragger>
          </div>
          <div class="up-img-preview">
            <video :src="upImage" controls="controls" width="500" height="400" alt="预览视频"
                   :hidden="previewImgHidden"></video>
          </div>
          <!-- </div> -->
        </div>
      </a-col>

      <a-col :lg="3" :md="4" :sm="6">
        <div class="split">
          <div class="divider"></div>
          <div class="btn-group">
            <a-button @click="handleUpload" :loading="isDetecting">识别</a-button>
          </div>

        </div>
      </a-col>

      <a-col :lg="11" :md="10" :sm="9">
        <div class="right-wrapper">
          <div class="detected-img" :hidden="hiddenDetectedImg">
            <a-divider orientation="left">检测预览</a-divider>

            <img :src="detectedImg" alt="检测结果图片"/>
          </div>

          <div class="ocr-raw" :hidden="hiddenProcess">
            <a-divider orientation="left">识别进度</a-divider>
            <a-progress :percent="trackProgress" status="active"/>
          </div>

          <div class="ocr-text" :hidden="hiddenCarNum">
            <a-divider orientation="left">识别车辆数</a-divider>
            <a-alert :message="trackNums" type="success"/>
          </div>

          <div class="ocr-text" :hidden="hiddenCongested">
            <a-divider orientation="left">是否拥堵</a-divider>
            <a-alert :message="trackCongested" type="success"/>
          </div>

        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from 'vue'
import Message from 'ant-design-vue'

const axios = require('axios')
Vue.use(Message)

// 获取上传对象的临时链接
function getObjectURL(file) {
  var url = null
  if (window.createObjectURL != undefined) {
    url = window.createObjectURL(file)
  } else if (window.URL != undefined) {
    // mozilla(firefox)
    url = window.URL.createObjectURL(file)
  } else if (window.webkitURL != undefined) {
    // webkit or chrome
    url = window.webkitURL.createObjectURL(file)
  }
  return url
}

export default {
  name: 'Index',
  data: function () {
    return {
      websock: null,
      upImage: '', // 上传后的图片预览地址
      fileList: [], // 上传图片的列表
      detectedImg: '', // 检测后的图片
      trackProgress: 0, // 识别进度
      trackNums: ``, // 识别车辆数目
      trackCongested: '', // 是否拥堵
      isDetecting: false, // 状态 是否在识别中
      uploading: false, //状态 原生 上传控件的状态
      previewImgHidden: true, // 状态 预览图片是否隐藏
      hiddenDetectedImg: true, //状态  是否显示检测后的图片
      hiddenProcess: true, // 状态  是否显示识别进度
      hiddenCarNum: true, // 状态 是否显示识别车辆数量
      hiddenCongested: true,// 是否显示拥堵
    }
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close() //离开路由之后断开websocket连接
  },
  methods: {
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        this.$data.fileList = [info.file]
        this.$data.upImage = getObjectURL(info.file)
        this.$data.previewImgHidden = false
        console.log('success')
      }
      if (status === 'done') {
        console.log('done')
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
        console.log('error')
      }
    },
    beforeUpload(file) {
      this.fileList = [file]
      return false
    },
    handleUpload() {
      if (this.fileList.length < 1) {
        this.$message.warning('还没有选择视频')
        return
      }

      const formData = new FormData()
      this.fileList.forEach(file => {
        formData.append('file', file)
      })

      this.isDetecting = true
      this.uploading = true

      const _this = this
      axios({
        url: '/api/tracking/',
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'X-Requested-With': 'XMLHttpRequest'
        },
        transformRequest: {},
        data: formData
      })
          .then(function (response) {
            _this.$message.success(
                '成功! 耗时：' + response.data['data']['speed_time'] + ' 秒'
            )
            _this.$data.uploading = false
          })
          .catch(function (error) {

            const errorInfo = error.response['msg'] || error.message
            _this.$message.error('错误：' + errorInfo)

            _this.$data.hiddenDetectedImg = true
            _this.$data.hiddenProcess = true
            _this.$data.hiddenCarNum = true
          })
    },
    initWebSocket() { //初始化weosocket
      const wsuri = 'ws://' + location.host + '/ws';
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() { //连接建立之后执行send方法发送数据
      let actions = {"test": "12345"};
      this.websocketsend(JSON.stringify(actions));
    },
    websocketonerror() {//连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) { //数据接收
      if (!this.isJsonString(e.data)) {
        return
      }
      const redata = JSON.parse(e.data);

      this.hiddenDetectedImg = false
      this.hiddenProcess = false
      this.hiddenCarNum = false
      this.hiddenCongested = false

      // 判断是否结束
      if ('end' in redata) {
        this.$data.trackProgress = 100
        this.isDetecting = false
        return
      }
      // 更新识别进度
      if ('progressing' in redata) {
        this.$data.trackProgress = ((redata['frame_id'] + 1) / redata['frame_count']) * 100
        return
      }

      this.$data.detectedImg = redata['image_base64']
      this.$data.trackProgress = ((redata['frame_id'] + 1) / redata['frame_count']) * 100
      this.$data.trackNums = redata['id_set'].length
      let congested = '顺畅'
      if (redata['status'] == 1) {
        congested = '拥堵'
      }
      this.$data.trackCongested = congested
    },
    websocketsend(Data) {//数据发送
      this.websock.send(Data);
    },
    websocketclose(e) {  //关闭
      console.log('断开连接', e);
    },
    isJsonString(str) {
      try {
        if (typeof JSON.parse(str) == "object") {
          return true;
        }
        // eslint-disable-next-line no-empty
      } catch (e) {
      }
      return false;
    }
  },
  watch: {
    fileList: function (newVal, oldVal) {
      if (newVal.length <= 0) {
        this.hiddenDetectedImg = true
        this.hiddenProcess = true
        this.hiddenCarNum = true
        this.hiddenCongested = true
        oldVal
      }

    }
  }
}
</script>

<style>
/* >>>>>>  覆盖原生样式 */
.ant-divider-inner-text {
  font-size: 14px;
  color: gray;
}

/* <<<<<<  覆盖原生样式 */

.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  height: auto;
}

.left-wrapper {
  min-height: 100vh;
  height: auto;
}

.upimg-dragger {
  height: 4rem;
  margin: 2.5rem 0 1rem 2.5rem;
}

.up-img-preview {
  text-align: center;

  margin: 1.5rem -1rem 1rem 1rem;
}

.up-img-preview img {
  object-fit: contain;
  max-width: 95%;
  max-height: 80vh;
}

.split {
  min-height: 100%;
  /* border: solid gray 1px; */
  height: 100vh;
  position: relative;
}

.divider {
  position: absolute;
  left: 50%;
  top: 0;
  min-height: 100%;
  height: auto;
  width: 1px;
  border-left: 1px solid #d3d3d36b;
}

.btn-group {
  text-align: center;
  margin: 2.5rem 0;
  padding: 1rem;
  background: white;
  width: 100%;
  position: absolute;
}

.btn-group button {
  width: 90%;
}

.right-wrapper {
  padding: 1rem 2.5rem 1rem 0;
}

.detected-img {
  max-height: 50%;
  /* border: 1px solid gray; */
  text-align: center;
}

.detected-img img {
  object-fit: contain;
  max-width: 100%;
  max-height: 40vh;
}

.detected-img .ocr-raw {
  max-height: 40vh;
}

.detected-img .ocr-text {
  max-height: 40vh;
}
</style>