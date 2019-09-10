<template>
  <div :style="heihei">hi!我是{{name}}</div>
</template>

<script>
export default {
  name: 'LiuJia',
  data() {
    return{
      name: '刘佳',
      heihei: {color: 'red'}
    }
  }
}
</script>

<style scoped>

</style>