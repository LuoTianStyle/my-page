<template>
  <div class="picturePage">
    <!--/*外层最大容器*/-->
    <div class="wrap">
      <!--    /*包裹所有元素的容器*/-->
      <div class="cube">
        <!--前面图片 -->
        <div class="out_front">
          <img src="~img/1.jpg" class="pic" />
        </div>
        <!--后面图片 -->
        <div class="out_back">
          <img src="~img/2.jpg" class="pic" />
        </div>
        <!--左图片 -->
        <div class="out_left">
          <img src="~img/3.jpg" class="pic" />
        </div>
        <div class="out_right">
          <img src="~img/4.jpg" class="pic" />
        </div>
        <div class="out_top">
          <img src="~img/5.jpg" class="pic" />
        </div>
        <div class="out_bottom">
          <img src="~img/6.jpg" class="pic" />
        </div>
        <!--小正方体 -->
        <span class="in_front">
          <img src="~img/7.jpg" class="in_pic" />
        </span>
        <span class="in_back">
          <img src="~img/8.jpg" class="in_pic" />
        </span>
        <span class="in_left">
          <img src="~img/9.jpg" class="in_pic" />
        </span>
        <span class="in_right">
          <img src="~img/10.jpg" class="in_pic" />
        </span>
        <span class="in_top">
          <img src="~img/11.jpg" class="in_pic" />
        </span>
        <span class="in_bottom">
          <img src="~img/12.jpg" class="in_pic" />
        </span>
      </div>
    </div>
    <span class="star" id="star" @click="animation">
      <img src="~img/22.png" />
    </span>
    <span class="moon">
      <img src="~img/moon.png" />
    </span>
    <span class="stars">
      <img src="~img/stars.png" />
    </span>
    <span class="winnower-container">
      <img src="~img/winnower.png" class="winnower" />
      <img src="~img/winnower-bottom.png" class="winnower-bottom" />
    </span>
  </div>
</template>
<script>
export default {
  name: "Picture",
  methods: {
    animation() {
      var oStar = document.getElementById("star");
      oStar.style.bottom = "900px";
      oStar.style.opacity = 0;
      var timeDelay = setTimeout(function() {
        oStar.style.opacity = 0;
        oStar.style.bottom = "5px";
      }, 3000);
      setTimeout(function() {
        clearTimeout(timeDelay);
        oStar.style.opacity = 1;
      }, 6000);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~style/animate.styl';

/* 最外层容器样式 */
.wrap {
  overflow: hidden;
  width: 50%;
  height: 200px;
  /* 改变左右上下,图片方块移动 */
  padding: 170px 25%;
  position: relative;

  /* 包裹所有容器样式 */
  .cube {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    transform-style: preserve-3d;
    transform: rotateX(-30deg) rotateY(-80deg);
    -webkit-animation: rotate 20s infinite;
    /* 匀速 */
    animation-timing-function: linear;

    div {
      position: absolute;
      width: 200px;
      height: 200px;
      opacity: 0.8;
      transition: all 0.4s;
      /* 定义所有图片样式 */
    }

    .pic {
      width: 200px;
      height: 200px;
    }

    span {
      display: bloack;
      width: 100px;
      height: 100px;
      position: absolute;
      top: 50px;
      left: 50px;

      .in_pic {
        width: 100px;
        height: 100px;
      }
    }
  }
}

.star {
  position: absolute;
  left: 0;
  bottom: 5px;
  cursor: pointer;
  transition: all 3s;
  -moz-transition: all 3s;
  -webkit-transition: all 3s;
  -o-transition: all 3s;
  transition-timing-function: linear;
  -moz-transition-timing-function: linear;
  -webkit-transition-timing-function: linear;
  -o-transition-timing-function: linear;
}

.moon {
  position: absolute;
  right: 0px;
  top: -45px;
  z-index: -999;
}

.moon:hover {
  top: 0px;
}

.winnower-container {
  position: absolute;
  right: 42px;
  bottom: 42px;

  .winnower-bottom {
    position: absolute;
    right: 74px;
    bottom: -25px;
    z-index: -1;
  }

  .winnower {
    animation: rotating 3s linear infinite;
  }
}

.stars {
  position: absolute;
  bottom: 5px;
  right: 100px;
  animation: moverandom 10s cubic-bezier(0.4, 0.82, 0.8, 0.34) infinite;
}
</style>
