<template>
  <div>
    <form action="">
        
      <Upload ref="upload" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess"
        :format="['xlsx','xls']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize"
        :before-upload="handleBeforeUpload" multiple type="drag" action="this.$api.ROOM" style="display: inline-block;width:58px;">
        <div style="width: 58px;height:58px;line-height: 58px;">
          <Icon type="ios-camera" size="20"></Icon>
        </div>
      </Upload>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          ExcelUrl: "",
          startTime: "",
          endTime: "",
        }
      }
    },
    methods: {
      handleFormatError(file) {
        this.$Notice.warning({
          title: '文件格式不正确',
          desc: file.name + '不正确, 请选择xls或者xlsx文件.'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: '文件超出大小限制',
          desc: file.name + '太大了,不要超过2M.'
        });
      },
      beforeImageUpload(file) {

      },
      handleSuccess(res, file) {
        this.form.ExcelUrl = res.data.ExcelUrl;
      },
    }
  }

</script>
