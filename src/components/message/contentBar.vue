<template>
    <div class="contentBar">
        <div class="title" @click="handleMessage"></div>
        <svg aria-hidden="true" :class="refresh" @click="refreshData">
            <use xlink:href="#icon-refresh1">
                <svg id="icon-refresh1" viewBox="0 0 1024 1024" width="100%" height="100%">
                    <path
                        d="M936.557714 603.428571c0 1.133714 0 2.852571-0.585143 3.986286C887.405714 809.691429 720.530286 950.857143 509.696 950.857143c-111.433143 0-219.428571-43.995429-300.580571-121.161143l-73.728 73.728A36.425143 36.425143 0 0 1 109.677714 914.285714c-20.004571 0-36.571429-16.566857-36.571428-36.571428v-256c0-20.004571 16.566857-36.571429 36.571428-36.571429h256c20.004571 0 36.571429 16.566857 36.571429 36.571429a36.205714 36.205714 0 0 1-10.861714 25.709714l-78.299429 78.299429A292.022857 292.022857 0 0 0 511.926857 804.571429a291.693714 291.693714 0 0 0 249.161143-139.446858c13.714286-22.272 20.553143-43.995429 30.281143-66.852571 2.852571-8.009143 8.557714-13.129143 17.152-13.129143h109.714286c10.276571 0 18.285714 8.557714 18.285714 18.285714zM950.857143 146.285714v256c0 20.004571-16.566857 36.571429-36.571429 36.571429h-256c-20.004571 0-36.571429-16.566857-36.571428-36.571429a36.205714 36.205714 0 0 1 10.861714-25.709714l78.848-78.848A293.888 293.888 0 0 0 512 219.428571a291.693714 291.693714 0 0 0-249.161143 139.446858c-13.714286 22.272-20.553143 43.995429-30.281143 66.852571-2.852571 8.009143-8.557714 13.129143-17.152 13.129143H101.705143a18.395429 18.395429 0 0 1-18.285714-18.285714v-3.986286C132.571429 213.723429 301.129143 73.142857 512 73.142857c112.018286 0 221.147429 44.580571 302.299429 121.161143l74.276571-73.728A36.425143 36.425143 0 0 1 914.285714 109.714286c20.004571 0 36.571429 16.566857 36.571429 36.571428z"
                        fill=""
                    ></path>
                </svg>
            </use>
        </svg>
        <div class="content">
            <div class="item" v-drag v-for="(item, index) of contentList" :key="index" :style="{ top: item.top, left: item.left, zIndex: 1 }">
                <div class="data" :style="{ backgroundImage: 'url(' + item.imgUrl1 + ')', backgroundRepeat: 'no-repeat' }">{{ item.data }}</div>
                <div class="itemContent" :style="{ backgroundImage: 'url(' + item.imgUrl2 + ')', backgroundRepeat: 'repeat-y' }">{{ item.content }}</div>
                <div class="bottom" :style="{ backgroundImage: 'url(' + item.imgUrl3 + ')', backgroundRepeat: 'no-repeat' }">
                    <img :src="item.img" alt="" />
                    <span>{{ item.name }}</span>
                </div>
            </div>
        </div>
        <!-- 提交评论 -->
        <el-dialog class='dialogBox' :visible.sync="showModel">
            <el-form :model="form">
                <el-form-item>
                    <el-input v-model="form.name" autocomplete="off" placeholder="Name" clearable></el-input>
                    <el-input type="textarea" maxlength="150" v-model="form.desc" placeholder="Say something..." clearable></el-input>
                    <el-input  v-model="form.email" placeholder="Email不会被公开显示" clearable></el-input>
                    <el-input  v-model="form.url" placeholder="Url会被当做名字外链使用" clearable></el-input>
                    <el-input  v-model="form.qq" placeholder="QQ不会被公开显示" clearable></el-input>
                    <el-input  v-model="form.city" placeholder="City不会被公开显示" clearable></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitMessage" class="submit">提交</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'contentBar',
    components: {},
    props: {},
    directives: {
        drag(el) {
            el.onmousedown = function(e) {
                e.preventDefault()
                for (let i = 0; i < document.getElementsByClassName('item').length; i++) {
                    document.getElementsByClassName('item')[i].style.zIndex = 1
                }
                el.style.zIndex = 2
                let disx = e.clientX - el.offsetLeft
                let disy = e.clientY - el.offsetTop
                document.onmousemove = function(e) {
                    let oH = document.getElementsByClassName('contentBar')[0].clientHeight
                    let oW = document.getElementsByClassName('contentBar')[0].clientWidth
                    if (e.clientY - disy > oH - 200) {
                        el.style.top = oH - 200 + 'px'
                    } else if (e.clientY - disy < 0) {
                        el.style.top = 0
                    } else {
                        el.style.top = e.clientY - disy + 'px'
                    }
                    if (e.clientX - disx > oW - 255) {
                        el.style.left = oW - 255 + 'px'
                    } else if (e.clientX - disx < 0) {
                        el.style.left = 0
                    } else {
                        el.style.left = e.clientX - disx + 'px'
                    }
                }
                document.onmouseup = function() {
                    document.onmousemove = null
                    document.onmouseup = null
                }
            }
        }
    },
    data() {
        return {
            refresh: 'icon refresh',
            contentList: [
                {
                    top: '10px',
                    left: '10px',
                    data: '2019-5-3',
                    content: '大佬，666',
                    img: require('img/x.jpg'),
                    name: '小飞侠',
                    imgUrl1: require('img/note1_1.png'),
                    imgUrl2: require('img/note1_2.png'),
                    imgUrl3: require('img/note1_3.png')
                },
                {
                    top: '20px',
                    left: '20px',
                    data: '2019-5-3',
                    content: '大佬，666',
                    img: require('img/x.jpg'),
                    imgUrl1: require('img/note2_1.png'),
                    imgUrl2: require('img/note2_2.png'),
                    imgUrl3: require('img/note2_3.png'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note3_1.png'),
                    imgUrl2: require('img/note3_2.png'),
                    imgUrl3: require('img/note3_3.png'),
                    img: require('img/x.jpg'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note4_1.png'),
                    imgUrl2: require('img/note4_2.png'),
                    imgUrl3: require('img/note4_3.png'),
                    img: require('img/x.jpg'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note5_1.png'),
                    imgUrl2: require('img/note5_2.png'),
                    imgUrl3: require('img/note5_3.png'),
                    img: require('img/x.jpg'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note1_1.png'),
                    imgUrl2: require('img/note1_2.png'),
                    imgUrl3: require('img/note1_3.png'),
                    img: require('img/b.jpg'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    img: require('img/b.jpg'),
                    imgUrl1: require('img/note3_1.png'),
                    imgUrl2: require('img/note3_2.png'),
                    imgUrl3: require('img/note3_3.png'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note4_1.png'),
                    imgUrl2: require('img/note4_2.png'),
                    imgUrl3: require('img/note4_3.png'),
                    img: require('img/x.jpg'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note1_1.png'),
                    imgUrl2: require('img/note1_2.png'),
                    imgUrl3: require('img/note1_3.png'),
                    img: require('img/x.jpg'),
                    name: '小飞侠'
                },
                {
                    data: '2019-5-3',
                    content: '大佬，666',
                    imgUrl1: require('img/note2_1.png'),
                    imgUrl2: require('img/note2_2.png'),
                    imgUrl3: require('img/note2_3.png'),
                    img: require('img/x.jpg'),
                    name: '小飞侠'
                }
            ],
            showModel: false,
            form: {
                name: '',
                desc: '',
                email: '',
                url: '',
                qq: '',
                city: '',
            }
        }
    },
    created() {},
    methods: {
        // 刷新数据
        refreshData() {
            this.refresh = 'icon refresh active'
            setTimeout(() => {
                this.refresh = 'icon refresh'
                this.handlePosition()
            }, 1000)
        },
        // 位置重新排列
        handlePosition() {
            let oH = document.getElementsByClassName('contentBar')[0].clientHeight
            let oW = document.getElementsByClassName('contentBar')[0].clientWidth
            let oLeftMax = oW - 255
            let oHeightMax = oH - 255
            this.contentList.forEach(o => {
                o.top = Math.floor(Math.random() * oHeightMax) + 'px'
                o.left = Math.floor(Math.random() * oLeftMax) + 'px'
            })
        },
        // 打开提交评论框
        handleMessage() {
            this.showModel = true
        },
        // 提交评论
        submitMessage() {
            this.showModel = false
        }
    },
    watch: {},
    mounted() {
        this.handlePosition()
    }
}
</script>

<style scoped lang="stylus">
.contentBar
    min-height 100vh
    width 100%
    .title
        width 2.5rem
        height .8rem
        background-image url("~img/issue.png")
        position absolute
        left 50%
        top .1rem
        -webkit-transform translateX(-50%)
        -ms-transform translateX(-50%)
        transform translateX(-50%)
        -webkit-transition opacity .5s
        transition opacity .5s
        z-index 98
        cursor pointer
        &:hover
            opacity .8
    .refresh
        position absolute
        color #c1866a
        right .4rem
        top .2rem
        font-size .5rem
        z-index 98
        padding .1rem
        cursor pointer
        &.icon
            width .3rem
            height .3rem
            vertical-align -.045rem
            fill currentColor
        &.active
            -webkit-animation rotate360 1s linear infinite
            animation rotate360 1s linear infinite
    .content
        box-sizing border-box
        position relative
        .item
            cursor move
            position absolute
            .data
                box-sizing border-box
                width 2.35rem
                height .68rem
                padding .45rem .3rem 0
                font-size .16rem
                font-family Georgia
                color #999
            .itemContent
                position relative
                left -.02rem
                box-sizing border-box
                width 2.35rem
                line-height .2rem
                padding 0 .15rem 0 .3rem
                word-wrap break-word
                font-size .14rem
                color #6f5a5a
                overflow hidden
                text-overflow ellipsis
                display -webkit-box
                -webkit-line-clamp 3
                -webkit-box-orient vertical
            .bottom
                box-sizing border-box
                width 2.35rem
                height .72rem
                padding .2rem .2rem .1rem .3rem
                display flex
                justify-content space-between
                img
                    width .3rem
                    height .3rem
                    border-radius 50%
                    object-fit cover
                span
                    max-width 1.5rem
                    line-height .42rem
                    text-align right
                    float right
                    color #333
                    font-size .12rem
                    word-wrap normal
                    white-space nowrap
                    text-overflow ellipsis
                    overflow hidden
    .dialogBox
        /deep/.el-dialog
            border-radius .2rem
            box-shadow 0 .2rem .35rem 0 rgba(0,0,0,.3)
            width 5rem
            margin-top 5vh !important
            .el-dialog__body
                padding-left .5rem
                padding-right .5rem
                padding-bottom 0
                text-align center
            .el-input__inner
                border .01rem solid #e1e8ed
                font-size .12rem
                border-radius .2rem
                padding .12rem
                margin .15rem 0
            .el-textarea__inner
                border .01rem solid #e1e8ed
                font-size .12rem
                border-radius .2rem
                padding .12rem
                height .8rem
                margin .15rem 0
                resize none
            .el-form-item
                margin-bottom 0
            .submit
                margin-top .1rem
                margin-bottom .2rem
                width 1rem
                height .4rem
                background -webkit-linear-gradient(to left,hsla(40,33%,60%,.99),#c1866a 100%)
                background linear-gradient(to left,hsla(40,33%,60%,.99),#c1866a 100%)
                border-radius .2rem
                font-size .14rem
                color #fff
                border none
</style>
<style lang="css">
@keyframes rotate360 {
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
}
</style>
