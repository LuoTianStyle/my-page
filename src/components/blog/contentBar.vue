<template>
  <div class="contentBar">
    <div class="aside">
      <div class="item">
        <div class="red">
          <i class="itemsI"></i>
          html
        </div>
      </div>
      <div class="item">
        <div class="blue">
          <i class="itemsI"></i>
          css
        </div>
      </div>
      <div class="item">
        <div class="green">
          <i class="itemsI"></i>
          javascript
        </div>
      </div>
      <div class="item">
        <div class="orange">
          <i class="itemsI"></i>
          vue
        </div>
      </div>
      <div class="item">
        <div class="black">
          <i class="itemsI"></i>
          node
        </div>
      </div>
      <div class="item">
        <div class="bluesky">
          <i class="itemsI"></i>
          webpack
        </div>
      </div>
      <div class="item">
        <div class="gray">
          <i class="itemsI"></i>
          data
        </div>
      </div>
      <div class="item">
        <div class="yellow">
          <i class="itemsI"></i>
          others
        </div>
      </div>
    </div>
    <div class="line wow zoomIn animated" v-for="item of contentList" :key="item.index">
      <div class="wrap">
        <div class="title">{{ item.title }}</div>
        <div class="data">{{ item.data }}</div>
        <div class="kinds">
          {{ item.kinds }}
          <span class="more">查看更多</span>
        </div>
        <div class="intro">
          <div class="nums">{{ item.num }}</div>
          <div class="txt">回复</div>
        </div>
        <div class="tips">
          <div class="tipItem" v-for="(items, index) of item.tips" :key="index">
            <div :class="items.class">
              <i :class="items.itemsI"></i>
              {{ items.content }}
            </div>
          </div>
        </div>
        <div class="github github-corner">
          <a
            href="https://github.com/LuoTianStyle"
            class="routerLink"
            style="fill: rgb(74, 183, 189); color: rgb(255, 255, 255);"
          >
            <svg width="80" height="80" viewBox="0 0 250 250" aria-hidden="true">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
              <path
                d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
                fill="currentColor"
                class="octo-arm"
                style="transform-origin: 130px 106px 0px;"
              />
              <path
                d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
                fill="currentColor"
                class="octo-body"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contentBar",
  components: {},
  props: {},
  data() {
    return {
      contentList: [
        {
          index: 1,
          title: "vue移动端路由切换完整实例",
          kinds: "vue移动端路由切换完整实例",
          num: 46,
          data: "2018-08-31",
          tips: [
            {
              class: "red",
              itemsI: "itemsI",
              content: "html"
            },
            {
              class: "blue",
              itemsI: "itemsI",
              content: "css"
            }
          ]
        }
      ]
    };
  },
  created() {},
  methods: {},
  watch: {},
  mounted() {}
};
</script>
<style>
.aside {
  position: fixed;
  top: 0.5rem;
  left: calc((100% - 7.4rem) / 2);
  font-family: "PingFangSC-Regular", "Helvetica Neue", "Helvetica", "Arial",
    "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei";
  width: 2rem;
  height: 5rem;
}

.item {
  display: inline-block;
  margin: 0.1rem;
  cursor: pointer;
}

.red,
.blue,
.green,
.orange,
.black,
.bluesky,
.gray,
.yellow {
  font-weight: 400;
  font-size: 0.12rem;
  color: #fff;
  height: 0.18rem;
  background-color: rgb(219, 86, 64);
  line-height: 0.18rem;
  padding: 0 0.05rem 0 0.1rem;
  border-radius: 0 0.05rem 0.05rem 0;
  margin: 0.05rem 0.09rem 0.05rem 0.08rem;
  position: relative;
}

.itemsI {
  position: absolute;
  right: 100%;
  font-size: 0;
  line-height: 0;
  border: 0.09rem solid transparent;
  border-right-color: rgb(219, 86, 64);
}
.red:after,
.blue:after,
.green:after,
.orange:after,
.black:after,
.bluesky:after,
.gray:after,
.yellow:after {
  content: " ";
  width: 0.04rem;
  height: 0.04rem;
  background-color: #fff;
  border-radius: 0.04rem;
  box-shadow: 0 0 0 0.01rem rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0.07rem;
  left: 0.02rem;
}
.blue {
  background-color: rgb(94, 123, 167);
}
.blue .itemsI {
  border-right-color: rgb(94, 123, 167);
}
.green {
  background-color: rgb(183, 235, 143);
}
.green .itemsI {
  border-right-color: rgb(183, 235, 143);
}
.orange {
  background-color: rgb(230, 188, 60);
}
.orange .itemsI {
  border-right-color: rgb(230, 188, 60);
}
.black {
  background-color: rgb(120, 109, 93);
}
.black .itemsI {
  border-right-color: rgb(120, 109, 93);
}

.bluesky {
  background-color: rgb(24, 144, 255);
}

.bluesky .itemsI {
  border-right-color: rgb(24, 144, 255);
}

.gray {
  background-color: rgb(134, 137, 140);
}

.gray .itemsI {
  border-right-color: rgb(134, 137, 140);
}

.yellow {
  background-color: rgb(251, 219, 123);
}

.yellow .itemsI {
  border-right-color: rgb(251, 219, 123);
}
</style>
<style scoped lang="stylus">
.contentBar {
  position: relative;
  width: 7.4rem;
  margin: 0 auto;

  .line {
    width: 5.4rem;
    margin: 0.3rem 0;
    margin-left: 2rem;
    margin-top: 0;
    padding: 0.1rem;
    box-shadow: 0 0.05rem 0.15rem 0 rgba(0, 0, 0, 0.08);
    background-image: url('~img/note-bg.jpg');
    text-align: center;
    position: relative;
    -webkit-transition: box-shadow 1s;
    transition: box-shadow 1s;

    .wrap {
      border: 0.01rem dashed #C7C7C9;
      padding: 0.33rem 0.2rem 0.1rem 0.2rem;

      .title {
        margin-bottom: 0.1rem;
        text-align: center;
        font-weight: bold;
        color: #db5640;
        line-height: 0.3rem;
        font-size: 0.18rem;
      }

      .data {
        display: block;
        text-align: center;
        color: #b2b2ae;
        font-size: 0.12rem;
        margin-bottom: 0.22rem;
        line-height: 0.19rem;
      }

      .kinds {
        font-size: 0.14rem;
        line-height: 0.3rem;
        text-align: left;

        .more {
          color: #b2b2ae;
          font-size: 0.12rem;
          margin-left: 0.05rem;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .intro {
        margin-top: 0.22rem;
        text-align: center;

        .nums {
          width: 0.39rem;
          height: 0.42rem;
          font-size: 0.16rem;
          display: inline-block;
          line-height: 0.39rem;
          color: #f9f9f3;
          font-weight: 600;
          background-image: url('~img/comment.svg');
        }

        .txt {
          color: #b2b2ae;
          font-size: 0.12rem;
          margin-top: 0.05rem;
        }

        &:hover {
          .nums {
            background-image: url('~img/commentHover.svg');
          }

          .txt {
            color: rgb(219, 86, 64);
          }
        }
      }

      .tips {
        display: flex;
        padding-top: 0.1rem;
      }

      .github {
        position: absolute;
        right: 0.11rem;
        top: 0.11rem;
        width: 0.8rem;
        height: 0.8rem;
        border: 0;

        &:hover {
          .octo-arm {
            -webkit-animation: octocat-wave 0.56s ease-in-out;
            animation: octocat-wave 0.56s ease-in-out;
          }
        }
      }
    }

    &:hover {
      box-shadow: 0.05rem 0.15rem 0.3rem 0.05rem rgba(0, 0, 0, 0.15);
    }
  }
}
</style>
<style>
@-webkit-keyframes octocat-wave {
  0%,
  to {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  20%,
  60% {
    -webkit-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%,
  80% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
@keyframes octocat-wave {
  0%,
  to {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  20%,
  60% {
    -webkit-transform: rotate(-25deg);
    transform: rotate(-25deg);
  }
  40%,
  80% {
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
}
</style>
