<template>
  <div class="ctip">
    无权限
  </div>
</template>
<script setup lang="ts">


</script>

<style  lang="less" scoped>
.ctip {
  width: 100vw;
  height: 100vh;
  background-color: rgb(236, 239, 243);
  position: relative;

  .down {
    .top {
      width: 100%;
      height: auto;
    }

    .logo {
      display: block;
      width: 95px;
      height: auto;
      margin: 22px auto 10px;
    }

    >h1 {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      color: #25b6ed;
      line-height: 30px;
      margin-bottom: 4px;
    }

    >p {
      width: 100%;
      text-align: center;
      font-size: 16px;
      color: #25b6ed;
      line-height: 20px;
    }

    .footer {
      width: 100%;
      position: fixed;
      bottom: 60px;
      left: 0;

      h1 {
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #333333;
        line-height: 23px;
        font-weight: 400;
      }

      p {
        width: 100%;
        text-align: center;
        font-size: 14px;
        color: #333333;
        line-height: 20px;
      }

      button {
        width: 206px;
        height: 45px;
        background: #25b6ed;
        border-radius: 23px;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        outline: none;
        border: none;
        display: block;
        margin: 25px auto 10px;
      }
    }
  }

  .dilog {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    padding-left: 15px;

    img {
      width: 100%;
      height: auto;
      margin-top: 10px;
    }
  }
}
</style>
