<template>
    <div class="rightContent">
        <div class="content">
            <div class="meIntro">
                <div class="mao_box"><mao-bar /></div>
                <span class="shadow"></span>
                <ul class="contacts">
                    <li class="me-item">
                        <span>QQ：</span>
                        <span class="me-item-text">1763499174</span>
                    </li>
                    <li class="me-item">
                        <span>Email：</span>
                        <span class="me-item-text">tianluoluo666@gmail.com</span>
                    </li>
                    <li class="me-item">
                        <span>Github：</span>
                        <a href="https://github.com/cd-dongzi" target="_blank" class="me-item-text">点我查看详情</a>
                    </li>
                    <li class="me-item">
                        <span>cnblogs：</span>
                        <a href="https://www.cnblogs.com/tllw/" target="_blank" class="me-item-text">点我查看详情</a>
                    </li>
                </ul>
            </div>
            <div class="commit">
                <div class="editor-box">
                    <textarea placeholder="同道中人，理性留言！！！" class="input-clear editor"></textarea>
                    <div class="editor-foot">
                        <div class="editor-tip">
                            <i class="el-icon-info"></i>
                            <span>可使用部分markdown语法</span>
                        </div>
                        <div>
                            <button class="btn-clear look-style"><span>预览</span></button>
                            <button class="btn-clear hover submit"><span>发布评论</span></button>
                        </div>
                    </div>
                </div>
                <div class="list-box">
                    <div class="message-title">给我留言（{{ num }}）</div>
                    <div class="message-item" v-for="(item, index) of messageList" :key="index">
                        <div class="m-main">
                            <div class="avatar"><img :src="item.avatar" alt="" /></div>
                            <div class="m-content">
                                <div class="leader">
                                    <span class="name">{{ item.name }}</span>
                                    <span class="floor">第{{ item.floor }}楼</span>
                                </div>
                                <div class="txt">{{ item.content }}</div>
                                <div class="time">
                                    {{ item.time }}
                                    <span>回复</span>
                                </div>
                                <div class="m-message">
                                    <textarea maxlength="300" placeholder="我也说一句..." class="editor-textarea"></textarea>
                                    <div class="m-foot">
                                        <div class="m-num">0/300</div>
                                        <div class="m-btns">
                                            <button class="btn-clear cancel">取消</button>
                                            <button class="btn-clear submit">确认发送</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="reply">
                            <div class="reply-item" v-for="(oItem, oIndex) of item.reply" :key="oIndex">
                                <div class="reply-main">
                                    <div class="line1"><div class="line2"></div></div>
                                    <div class="reply-avatar"><img :src="oItem.avatar" alt="" /></div>
                                    <div class="reply-content">
                                        <div class="leader">
                                            <span class="name">{{ oItem.name }}</span>
                                            <span class="to">回复</span>
                                            <span class="name">{{ oItem.to }}</span>
                                        </div>
                                        <div class="txt">{{ oItem.content }}</div>
                                        <div class="time">
                                            {{ oItem.time }}
                                            <span>回复</span>
                                        </div>
                                        <div class="reply-message">
                                            <textarea maxlength="300"  placeholder="我也说一句..." class="editor-textarea"></textarea>
                                            <div class="reply-foot">
                                                <div class="reply-num">0/300</div>
                                                <div class="reply-btns">
                                                    <button class="btn-clear cancel">取消</button>
                                                    <button class="btn-clear submit">确认发送</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import maoBar from './maoBar.vue'
export default {
    name: 'rightBar',
    components: {
        maoBar
    },
    data() {
        return {
            num: 50,
            messageList: [
                {
                    avatar: require('img/x.jpg'),
                    name: 'yuanxin',
                    floor: 1,
                    content: '老铁666！',
                    time: '2019-04-28 09:53:36',
                    reply: [
                        {
                            avatar: require('img/x.jpg'),
                            name: '作者',
                            to: 'yuanxin',
                            content: '老铁666！',
                            time: '2019-04-28 09:53:36'
                        },
                        {
                            avatar: require('img/x.jpg'),
                            name: '洛',
                            to: 'yuanxin',
                            content: '老铁666！',
                            time: '2019-04-28 09:53:36'
                        }
                    ]
                },
                {
                    avatar: require('img/b.jpg'),
                    name: '流星泪',
                    floor: 2,
                    content: '大神膜拜！',
                    time: '2019-04-28 09:53:36'
                }
            ]
        }
    }
}
</script>
<style scoped lang="stylus">
.rightContent
    margin-left 3rem
    min-height calc(100vh - .01rem)
    border .01rem solid transparent
    .content
        font-family "PingFangSC-Regular", "Helvetica Neue", "Helvetica", "Arial", "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei"
        margin 0 .3rem
        .meIntro
            position relative
            width 90%
            margin .2rem auto
            padding .3rem .2rem
            border-radius .1rem
            background-color #fff
            .mao_box
                position relative
            .shadow
                display block
                position absolute
                background-color rgba(0,0,0,.1)
                border-radius 50%
                -webkit-transform rotateX(100deg)
                transform rotateX(100deg)
                top 2.4rem
                width 1.5rem
                height .15rem
                left calc(50% - .75rem)
                -webkit-animation buddha-shadow 3s linear infinite
                animation buddha-shadow 3s linear infinite
            .contacts
                margin-top 1rem
                padding-left .2rem
                .me-item
                    font-size .16rem
                    margin .1rem 0
                    color #bba477
                    .me-item-text
                        font-size .14rem
                        color #bba477
        .commit
            margin .2rem auto
            position relative
            width 90%
            padding .3rem .2rem
            border-radius .1rem
            background-color #fff
            .editor-box
                width 100%
                .editor
                    width 100%
                    box-sizing border-box
                    display block
                    resize none
                    max-height 1.32rem
                    min-height .9rem
                    padding .06rem .12rem
                    border-radius .04rem
                    font-size .14rem
                    line-height 1.42858
                    border .01rem solid #ccc
                    -webkit-transition all .5s
                    transition all .5s
                    color #333
                    &:focus
                        outline none
                        border .01rem solid #bba477
                        box-shadow 0 0 .03rem 0 #bba477
                .editor-foot
                    display flex
                    justify-content space-between
                    align-items center
                    .editor-tip
                        font-size .12rem
                        color #998f8f
                        i
                            padding-right .05rem
                    .btn-clear
                        border none
                        background none
                        outline none
                        font-size .12rem
                        color #bba477
                        margin-right .06rem
                        &.submit
                            margin-top .10rem
                            width 1rem
                            height .34rem
                            background -webkit-linear-gradient(right,#c3b69c,#ceaa98 100%)
                            background linear-gradient(270deg,#c3b69c,#ceaa98)
                            border-radius .17rem
                            line-height .34rem
                            font-size .14rem
                            color #fff
            .list-box
                margin-top .2rem
                .message-title
                    color #bba477
                    line-height .3rem
                    border-bottom .01rem solid #ededed
                    font-size .16rem
                .message-item
                    padding .15rem 0 .05rem
                    border-top .01rem solid #ededed
                    .m-main
                        display flex
                        .avatar
                            width .45rem
                            height .45rem
                            img
                                height .45rem
                                border-radius .04rem
                        .m-content
                            width 100%
                            margin-left .2rem
                            .leader
                                .name
                                    font-size .16rem
                                    color #bba477
                                    &:hover
                                        text-decoration underline
                                .floor
                                    font-size .14rem
                                    color #b5a8a8
                                    margin-left .1rem
                            .txt
                                box-sizing border-box
                                min-height .7rem
                                line-height .2rem
                                color #6f6560
                                padding .1rem 0
                                font-size .16rem
                            .time
                                color #b5a8a8
                                font-size .14rem
                                margin-bottom .1rem
                                span
                                    color #bba477
                                    margin-left .08rem
                                    &:hover
                                        text-decoration underline
                            .m-message
                                padding-top .08rem
                                padding-bottom .08rem
                                .editor-textarea
                                    box-sizing border-box
                                    border none
                                    background none
                                    outline none
                                    width 100%
                                    height .34rem
                                    display block
                                    resize none
                                    padding .06rem .12rem
                                    border-radius .04rem
                                    font-size .14rem
                                    line-height 1.42858
                                    border .01rem solid #ccc
                                    -webkit-transition all .5s
                                    transition all .5s
                                    color #333
                                    &:focus
                                        outline none
                                        border .01rem solid #bba477
                                        box-shadow 0 0 .03rem 0 #bba477
                                        height .70rem
                                .m-foot
                                    display flex
                                    justify-content space-between
                                    .m-num
                                        line-height .28rem
                                        font-size .12rem
                                        color #998f8f
                                    .m-btns
                                        box-sizing border-box
                                        height .28rem
                                        .btn-clear
                                            border none
                                            background none
                                            outline none
                                            &.cancel
                                                line-height .28rem
                                                font-size .12rem
                                                color #998f8f
                                                margin-right .10rem
                                            &.submit
                                                line-height .28rem
                                                font-size .14rem
                                                color #bba477
                    .reply
                        margin-left .65rem
                        margin-top .1rem
                        .reply-main
                            position relative
                            display flex
                            padding-bottom .1rem
                            border-top .01rem solid #ededed
                            .line1
                                position absolute
                                top -.14rem
                                left .1rem
                                border .07rem solid #fff
                                border-bottom-color #ededed
                                .line2
                                    position absolute
                                    top -.05rem
                                    left -.06rem
                                    border 6px solid transparent
                                    border-bottom-color #fff
                            .reply-avatar
                                padding-top .08rem
                                width .3rem
                                height .3rem
                                img
                                    height .3rem
                                    border-radius .04rem
                            .reply-content
                                width 100%
                                margin-left .1rem
                                padding .08rem 0
                                .leader
                                    .name
                                        font-size .16rem
                                        color #bba477
                                        &:hover
                                            text-decoration underline
                                    .to
                                        font-size .14rem
                                        color #b5a8a8
                                        margin 0 .05rem
                                .txt
                                    box-sizing border-box
                                    min-height .5rem
                                    line-height .2rem
                                    color #6f6560
                                    padding .1rem 0
                                    font-size .16rem
                                .time
                                    color #b5a8a8
                                    font-size .14rem
                                    span
                                        color #bba477
                                        margin-left .08rem
                                        &:hover
                                            text-decoration underline
                            .reply-message
                                padding-top .08rem
                                .editor-textarea
                                    box-sizing border-box
                                    border none
                                    background none
                                    outline none
                                    width 100%
                                    display block
                                    resize none
                                    height .34rem
                                    padding .06rem .12rem
                                    border-radius .04rem
                                    font-size .14rem
                                    line-height 1.42858
                                    border .01rem solid #ccc
                                    -webkit-transition all .5s
                                    transition all .5s
                                    color #333
                                    &:focus
                                        outline none
                                        border .01rem solid #bba477
                                        box-shadow 0 0 .03rem 0 #bba477
                                        height .70rem
                                .reply-foot
                                    display flex
                                    justify-content space-between
                                    .reply-num
                                        line-height .28rem
                                        font-size .12rem
                                        color #998f8f
                                    .reply-btns
                                        box-sizing border-box
                                        height .28rem
                                        .btn-clear
                                            border none
                                            background none
                                            outline none
                                            &.cancel
                                                line-height .28rem
                                                font-size .12rem
                                                color #998f8f
                                                margin-right .10rem
                                            &.submit
                                                line-height .28rem
                                                font-size .14rem
                                                color #bba477
</style>
<style>
@keyframes buddha-translate {
    0%,
    100% {
        top: 0;
    }
    25%,
    75% {
        top: 0.1rem;
    }
    50% {
        top: 0.2rem;
    }
}
@keyframes buddha-shadow {
    0%,
    100% {
        transform: scale(0.5);
    }
    25%,
    75% {
        transform: scale(0.75);
    }
    50% {
        transform: scale(1);
    }
}
</style>
