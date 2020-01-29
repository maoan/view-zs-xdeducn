<template>
    <div class="xdzs-panel">
        <van-row type="flex" justify="space-around" >
            <van-col class="xdzs-panel__hd van-ellipsis"  span="16">{{hdlx}}</van-col>
            <van-col class="xdzs-panel__hd" span="8" style="text-align: right">
                <div>人数(<span v-model="joinnum">{{joinnum}}</span>/<span v-model="allnum">{{allnum}}</span>)</div>
            </van-col>
        </van-row>

        <div class="xdzs-media-box">
            <h1 class="xdzs-media-box__title ">{{hdtitle}}</h1>
            <p class="xdzs-media-box__desc">{{hddesc}}</p>
            <ul class="xdzs-media-box__info">
                <li class="xdzs-media-box__info__meta">{{fbdw}}</li>
                <li class="xdzs-media-box__info__meta">{{fbsj}}</li>
                <li class="xdzs-media-box__info__meta_extra">{{fujian}}</li>
            </ul>
        </div>
        <van-divider :style="{ padding: '0 16px',margin:'10px 0px' }">附件信息</van-divider>
        <img v-for="img in imageList" v-lazy="img" width="100px" style="margin:0px 5px 5px" @click='showImagePreview(imageList.indexOf(img))'>
        <van-divider :style="{ padding: '0 16px',margin:'10px 0px' }">参加人员</van-divider>
        <img v-for="cjavator in imageListavator" v-lazy="cjavator" width="40px" style="margin:0px 5px;border-radius:50%">
        <van-divider :style="{ padding: '0 16px',margin:'10px 0px' }">活动支线</van-divider>
        <van-steps direction="vertical" :active='-1' >
            <van-step>
                <h3>【西安市】西安市高新一中校内西安市高新一中校内西安市高新一中校内(120人)</h3>
                <p>【会务联系】张老师 - 13333333333</p>
            </van-step>
            <van-step>
                <h3>【西安市】西安市高新一中校内西安市高新一中校内西安市高新一中校内(120人)</h3>
                <p>联系人:张老师 / 电话:13333333333</p>
            </van-step>
            <van-step>
                <h3>【西安市】西安市高新一中校内西安市高新一中校内西安市高新一中校内(120人)</h3>
                <p>联系人:张老师 / 电话:13333333333</p>
            </van-step>
        </van-steps>
        <van-button style="margin:20px auto;width: 90%" type="primary" block>立即参加</van-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';
    import { ImagePreview } from 'vant';
    Vue.use(Lazyload);





    export default {

        data(){
            return{
                hdlx:"招生咨询",
                hdtitle:"NO.1活动标题活动标题动标题活动标题动标题活动标题动标题活动标题动标题活动标题",
                hddesc:"活动内容描述或者活动内容，最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。\n" +
                    "最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。",
                fbdw:"招生办管理员招生办管理员招生办",
                fbsj:"03-20",
                joinnum:'2',
                allnum:'3',
                fujian:'附件(3)',
                imageList: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                imageListavator:[
                    'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg',
                    'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
                ]

            }
        },
        methods:{
            showImagePreview(position,timer){
                const images=this.imageList;
                const instance = ImagePreview({
                    images,
                    lazyLoad: true,
                    swipeDuration: 300,
                    asyncClose: !!timer,
                    closeOnPopstate: true,
                    startPosition: typeof position === 'number' ? position : 0,
                });
                if (timer) {
                    setTimeout(() => {
                        instance.close();
                    }, timer);
                }
            },

        }
    }
</script>

<style type="text/css">
    .xdzs-panel{
        background-color:#FFFFFF;
        margin-top:5px;
        position:relative;
        overflow:hidden;
    }
    .xdzs-panel:first-child{
        margin-top:0;
    }
    .xdzs-panel:before{
        content:" ";
        position:absolute;
        left:0;
        top:0;
        right:0;
        height:1px;
        border-top:1px solid rgba(0, 0, 0, 0.1);
        color:rgba(0, 0, 0, 0.1);
        -webkit-transform-origin:0 0;
        transform-origin:0 0;
        -webkit-transform:scaleY(0.5);
        transform:scaleY(0.5);
    }
    .xdzs-panel:after{
        content:" ";
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        height:1px;
        border-bottom:1px solid rgba(0, 0, 0, 0.1);
        color:rgba(0, 0, 0, 0.1);
        -webkit-transform-origin:0 100%;
        transform-origin:0 100%;
        -webkit-transform:scaleY(0.5);
        transform:scaleY(0.5);
    }
    .xdzs-panel__hd{
        padding:10px 16px 10px;
        color: #989898;
        font-size:12px;
        font-weight:500;
        position:relative;
        text-align: left;

    }
    .xdzs-panel__hd:after{
        content:" ";
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        height:1px;
        border-bottom:1px solid rgba(0, 0, 0, 0.1);
        color:rgba(0, 0, 0, 0.1);
        -webkit-transform-origin:0 100%;
        transform-origin:0 100%;
        -webkit-transform:scaleY(0.5);
        transform:scaleY(0.5);
        left:15px;
    }
    .xdzs-media-box{
        padding:0px 16px;
        position:relative;
    }
    .xdzs-media-box__title{
        font-weight:400;
        font-size:16px;
        line-height:1.4;
        color:rgba(0, 0, 0, 0.9);
        width:auto;
        /*overflow:hidden;*/
        /*text-overflow:ellipsis;*/
        /*white-space:nowrap;*/
        /*word-wrap:normal;*/
        /*word-wrap:break-word;*/
        /*word-break:break-all;*/
        /*max-width: 350px;*/
    }
    .xdzs-media-box__desc{
        color:#989898;
        font-size:14px;
        line-height:1.4;
        /*padding-top:4px;*/
        /*overflow:hidden;*/
        /*text-overflow:ellipsis;*/
        /*display:-webkit-box;*/
        /*-webkit-box-orient:vertical;*/
        /*-webkit-line-clamp:2;*/
    }
    .xdzs-media-box__info{
        margin-top:16px;
        padding-bottom:4px;
        font-size:13px;
        color:#989898;
        line-height:1.2em;
        list-style:none;
        overflow:hidden;
    }
    .xdzs-media-box__info__meta{
        float:left;
        padding-right:10px;
        /*max-width: 200px;*/
    }
    .xdzs-media-box__info__meta_extra{
        float:left;
        /*padding-right:8px;*/
        padding-left:8px;
        border-left:1px solid #989898;
    }
    /*img{*/
    /*    box-sizing: border-box;*/
    /*    width: 100%;*/
    /*    height: 250px;*/
    /*    margin: 10px 10px;*/
    /*    padding:10px;*/
    /*    background-color: white;*/
    /*    background-repeat: no-repeat;*/
    /*    background-size: 100% 100%;*/
    /*    border-radius: 12px;*/
    /*    box-shadow: 0 8px 12px #ebedf0;*/
    /*}*/
    p,
    h3 {
        margin: 0;
        font-weight: normal;
        font-size: inherit;
    }
</style>