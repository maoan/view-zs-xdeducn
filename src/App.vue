<template>
  <div id="xdzs-app">
    <div class="content">
      <router-view/>

    </div>
    <div class="page_ft">


      <!--        <a href="https://zsb.xidian.edu.cn" target="_blank" >-西电招生信息网-</a>-->

      <div class="footer_text">Copyright © 2019-{{ new Date().getFullYear() }} <a class="text-primary"
                                                                                  href="https://zsb.xidian.edu.cn"
                                                                                  style="text-decoration: none"
                                                                                  target="_blank">西电招生办</a></div>

    </div>
  </div>
</template>

<style>
  body {

    font-size: 16px;


    overflow-x: auto;
    margin: 0;

    font-family: PingFang SC, 'Helvetica Neue', Arial, sans-serif, -apple-system-font;
    background-color: #f8f8f8;
    -webkit-font-smoothing: antialiased;

  }

  .content {
    box-sizing: border-box;
    min-height: 92vh;

  }

  .page_ft {
    padding-top: 20px;
    padding-bottom: 10px;
    /*padding-bottom: calc(10px + constant(safe-area-inset-bottom));*/
    /*padding-bottom: calc(10px + env(safe-area-inset-bottom));*/
    bottom: 10px;
    width: 100%;
    text-align: center;
    position: relative;

  }

  .page_ft a {
    font-size: 13px;
    color: #969bc5;
    display: inline-block;
  }

  .footer_text {
    padding: 0 10px;
    font-size: 12px;
    color: darkgrey;
  }
</style>
