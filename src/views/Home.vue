<template>
  <div class="home">


    <h1 class="home__title ">路由页</h1>


    <h2 class="home__desc">按照用户身份和是否首次登录的情况自动路由到对应的页面。</h2>
    <van-divider />
    <div>
      <div class="home-nav__block">
        <router-link to="/">路由页（本页）</router-link>
      </div>

      <div class="home-nav__block">
        <router-link to="/stuFirst">学生首次登录</router-link>
      </div>
      <div class="home-nav__block">
        <router-link to="/teaFirst">教师首次登录</router-link>
      </div>
      <div class="home-nav__block">
        <router-link to="/stuMain">学生主页</router-link>
      </div>
      <div class="home-nav__block">
        <router-link to="/teaMain">教师主页</router-link>
      </div>
      <div class="home-nav__block">
        <router-link to="/stuinfoList">考生信息管理</router-link>
      </div>
    </div>
  </div>


</template>

<style type="text/css">
  .home {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
    padding: 25px 20px 20px;
    background: #fff;
  }
  .home__title {
    margin: 0 0 10px;
    font-size: 20px;
  }

  .home__title, .home__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    -webkit-user-select: none;
    user-select: none;
  }

  .home__desc {
    margin: 0 0 20px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  .home-nav__block {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    -webkit-transition: background 0.3s;
    transition: background 0.3s;
  }
  a {

    color: #2c3e50;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
</style>