<template>
<div class="dashboard">
  <image-uploader
    :preview="true"
    :className="['fileinput', { 'fileinput--loaded': hasImage }]"
    capture="environment"
    :debug="1"
    doNotResize="gif"
    :autoRotate="true"
    outputFormat="verbose"
    @input="setImage"
  >
    <label for="fileInput" slot="upload-label">
      <span class="upload-caption">
        {{ hasImage ? "Replace" : "Click to upload" }}
      </span>
    </label>
  </image-uploader>
 
</div>
</template>

<script>
export default {
  data: () => {
    return ({
      hasImage: false,
      image: null
    })
  },
  methods: {
    setImage: function(output) {
      this.hasImage = true;
      this.image = output;
      console.log('Info', output.info)
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {

}
</style>