<template>
    <div class="xdzs-panel">
        <van-row justify="space-around" type="flex">
            <van-col class="xdzs-panel__hd van-ellipsis" span="16">{{hdlx}}</van-col>
            <van-col class="xdzs-panel__hd" span="8" style="text-align: right">
                <div>人数(<span v-model="joinnum">{{joinnum}}</span>/<span v-model="allnum">{{allnum}}</span>)</div>
            </van-col>
        </van-row>

        <div class="xdzs-media-box">
            <h1 class="xdzs-media-box__title van-ellipsis">{{hdtitle}}</h1>
            <p class="xdzs-media-box__desc van-multi-ellipsis--l2">{{hddesc}}</p>
            <ul class="xdzs-media-box__info">
                <li class="xdzs-media-box__info__meta van-ellipsis">{{fbdw}}</li>
                <li class="xdzs-media-box__info__meta">{{fbsj}}</li>
                <li class="xdzs-media-box__info__meta_extra">
                    <a @click="onpushhdxq"
                       href="javascript:void(0)">查看详情</a>
                    <a @click="onpushhdzj"
                       href="javascript:void(0)"
                       style="margin-left: 20px"
                       v-if="hdzjable"
                    >活动总结</a>
                </li>


            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "zshdlist",
        props: {
            hdlx: String,
            hdtitle: String,
            hddesc: String,
            fbdw: String,
            fbsj: String,
            joinnum: String,
            allnum: String,
            hdzjable: Boolean
        },
        methods: {
            onpushhdxq() {
                this.$router.push('zshddetails');
            },
            onpushhdzj() {
                this.$router.push('/');
            }
        }
    }
</script>

<style type="text/css">
    .xdzs-panel {
        background-color: #FFFFFF;
        margin-top: 5px;
        position: relative;
        overflow: hidden;
    }

    .xdzs-panel:first-child {
        margin-top: 0;
    }

    .xdzs-panel:before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .xdzs-panel:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }

    .xdzs-panel__hd {
        padding: 10px 16px 10px;
        color: #989898;
        font-size: 12px;
        font-weight: 500;
        position: relative;
        text-align: left;

    }

    .xdzs-panel__hd:after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 100%;
        transform-origin: 0 100%;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        left: 15px;
    }

    .xdzs-media-box {
        padding: 0px 16px 16px;
        position: relative;
    }

    .xdzs-media-box__title {
        font-weight: 400;
        font-size: 16px;
        line-height: 1.4;
        color: rgba(0, 0, 0, 0.9);
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        word-wrap: break-word;
        word-break: break-all;
        max-width: 350px;
    }

    .xdzs-media-box__desc {
        color: rgba(0, 0, 0, 0.3);
        font-size: 14px;
        line-height: 1.4;
        /*padding-top:4px;*/
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .xdzs-media-box__info {
        margin-top: 16px;
        padding-bottom: 4px;
        font-size: 13px;
        color: #CECECE;
        line-height: 1em;
        list-style: none;
        overflow: hidden;
    }

    .xdzs-media-box__info__meta {
        float: left;
        padding-right: 5px;
        max-width: 110px;
    }

    .xdzs-media-box__info__meta_extra {
        float: left;
        /*padding-right:8px;*/
        padding-left: 5px;
        border-left: 1px solid #CECECE;
    }
</style>