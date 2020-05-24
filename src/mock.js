import Mock from "mockjs";
var listData = function() {
    let indexdata = {};
    let carousel = [
        {
            bg: "index1",
        },
        {
            bg: "index2",
        },
    ];
    let me = {
        text:
            "作为一名涉世未深的前端小白，努力在技术的海洋中的遨游，学习知识、充实自己，在技术研发的道路上逐步前进，爱思考，爱钻研，乐于接受新的事物，希望能够遇到更多志同道合的朋友可以进行多多的交流和沟通，也希望大神们能够多多的指点",
        img: require("img/person.jpg"),
    };
    let career = [
        {
            title: "九州通｜前端开发",
            intro:
                "工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的",
            src: require("img/career.jpg"),
        },
        {
            title: "乐步｜前端开发 ",
            intro:
                "工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的",
            src: require("img/career.jpg"),
        },
    ];
    let blog = [
        {
            data: "07-30",
            title: "关于vue遮罩层和底部内容滚动的问题",
            desc:
                "德国著名的字体设计师赫尔曼·察普夫在达姆施塔特的家中离世，享年96岁。他所设计的作品包括Mac预装的字体帕拉提诺体Palatino，从体验度到适用性。技术哥哥前端姐姐提出的中肯建议，设计师们都虚心接受大师的技术，他们都无比的佩服",
        },
        {
            data: "06-18",
            title: "雪碧图和图片映射",
            desc:
                "德国著名的字体设计师赫尔曼·察普夫在达姆施塔特的家中离世，享年96岁。他所设计的作品包括Mac预装的字体帕拉提诺体Palatino，从体验度到适用性。技术哥哥前端姐姐提出的中肯建议，设计师们都虚心接受大师的技术，他们都无比的佩服",
        },
    ];
    let work = [
        {
            src: require("img/list.jpg"),
            name: "HANGER ＆ YARN BALL",
            kinds: "空间设计1",
        },
        {
            src: require("img/list1.jpg"),
            name: "HANGER ＆ YARN BALL",
            kinds: "空间设计2",
        },
        {
            src: require("img/list.jpg"),
            name: "HANGER ＆ YARN BALL",
            kinds: "空间设计3",
        },
        {
            src: require("img/list1.jpg"),
            name: "HANGER ＆ YARN BALL",
            kinds: "空间设计4",
        },
    ];
    let hobby = [
        {
            title: "运动｜Badminton",
            intro:
                "工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的",
            src: require("img/career.jpg"),
        },
        {
            title: "兴趣｜Reading",
            intro:
                "工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的工作积极主动，有持续的热情和责任心，对设计品质有执着追求，善于团队合作，具备良好的",
            src: require("img/career.jpg"),
        },
    ];
    let connect = {
        w: "田洛洛(Tian Luoluo)-个人主页",
        add: "北京市海淀区",
        weChat: "t1763499174",
        qq: "1763499174",
        num: "100000",
        tel: "17854234280",
        email: "tianluoluo666@gmail.com",
    };
    let footer = {
        kinds: "COPYRIGHT (©) 2019 tianluoluo_666@gmail.com - 个人主页网站",
        dev: "技术支持",
        logo: "个人开发",
    };
    indexdata.carousel = carousel;
    indexdata.me = me;
    indexdata.career = career;
    indexdata.blog = blog;
    indexdata.work = work;
    indexdata.hobby = hobby;
    indexdata.connect = connect;
    indexdata.footer = footer;
    //     indexdata.carousel = []
    //     indexdata.me = {}
    //     indexdata.career = []
    //     indexdata.blog = []
    //     indexdata.work = []
    //     indexdata.hobby = []
    //     indexdata.connect = {}
    //     indexdata.footer = {}
    return {
        indexdata: indexdata,
    };
};
Mock.mock("/api/indexdata", "get", listData);
