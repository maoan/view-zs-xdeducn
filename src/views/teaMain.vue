<template>
    <div>
        <page-head
                :pdesc="userDepart"
                :ptitle="userRealname"
                avator="https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
                callname="老师"
                personinfoable
                pushpage="teaFirst"
                qrable
        />
        <van-row class="szzs-row" type="flex">
            <van-col class="szzs-col" span="12">

                <div class="szzs-cjkss">采集考生数</div>
                <div @click="$router.push('stuinfolist')" class="szzs-cjkss-num">52</div>
                <div class="szzs-qxzs">全校总数：325</div>

            </van-col>

            <van-col span="12">
                <div class="szzs-cjhds">参加活动数</div>
                <div @click="activeZshd=1" class="szzs-cjhds-num">12</div>
                <div class="szzs-hdzs">活动总数：233</div>
            </van-col>
        </van-row>
        <van-tabs animated color="lightgrey" sticky style="margin-top: 10px" swipeable v-model="activeZshd">
            <van-tab info="2" title="最新活动">
                <van-list
                        :finished="finishedzxhd"
                        @load="onLoadzxhd"
                        finished-text="没有更多了"
                        v-model="loadingzxhd"
                >
                    <zshdlist
                            allnum=5
                            fbdw="招生办管理员招生办管理员招生办管理员招生办管理员招生办管理员"
                            fbsj="03-20"
                            hddesc="活动内容描述或者活动内容，最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。
最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。"
                            hdlx="招生咨询招生咨询招生咨询招生咨询招生咨询"
                            hdtitle="NO.1活动标题活动标题活动标题活动标题活动标题活动标题活动标题"
                            hdfj="附件(3)"
                            hdfz="支线(5)"
                            joinnum=2

                    />
                    <zshdlist
                            allnum=5
                            fbdw="招生办管理员招生办管理员招生办管理员招生办管理员招生办管理员"
                            fbsj="03-20"
                            hddesc="活动内容描述或者活动内容，最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。
最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。"
                            hdlx="招生咨询招生咨询招生咨询招生咨询招生咨询"
                            hdtitle="NO.1活动标题活动标题活动标题活动标题活动标题活动标题活动标题"
                            hdfj="附件(3)"
                            hdfz="支线(5)"
                            joinnum=2

                    />
                    <zshdlist
                            allnum=5
                            fbdw="招生办管理员招生办管理员招生办管理员招生办管理员招生办管理员"
                            fbsj="03-20"
                            hddesc="活动内容描述或者活动内容，最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。
最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。"
                            hdlx="招生咨询招生咨询招生咨询招生咨询招生咨询"
                            hdtitle="NO.1活动标题活动标题活动标题活动标题活动标题活动标题活动标题"
                            hdfj="附件(3)"
                            hdfz="支线(5)"
                            joinnum=2

                    />

                </van-list>
            </van-tab>
            <van-tab info="12" title="已参加活动">
                <van-list
                        :finished="finishedcjhd"
                        @load="onLoadcjhd"
                        finished-text="没有更多了"
                        v-model="loadingcjhd"

                >
                    <zshdlist
                            allnum=5
                            fbdw="招生办管理员招生办管理员招生办管理员招生办管理员招生办管理员"
                            fbsj="03-20"
                            hddesc="活动内容描述或者活动内容，最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。
最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。"
                            hdlx="招生咨询招生咨询招生咨询招生咨询招生咨询"
                            hdtitle="NO.1活动标题活动标题活动标题活动标题活动标题活动标题活动标题"
                            hdfj="附件(3)"
                            hdfz="支线(5)"
                            joinnum=2

                    />
                </van-list>
            </van-tab>
            <van-tab info="233" title="全部活动">
                <van-search placeholder="请输入搜索关键词" show-action v-model="valuehdall"/>
                <div style="background-color: white;padding: 0px 10px 10px">
                    <van-tag class="taballzshd" color="#cecece" round size="medium">全部(233)</van-tag>
                    <van-tag class="taballzshd" color="#cecece" round size="medium">招生咨询(36)</van-tag>
                    <van-tag class="taballzshd" color="#cecece" round size="medium">科普讲座(12)</van-tag>
                    <van-tag class="taballzshd" color="#cecece" round size="medium">科普讲座(12)</van-tag>
                    <van-tag class="taballzshd" color="#cecece" round size="medium">科普讲座(12)</van-tag>
                </div>
                <van-list
                        :finished="finishedcjhd"
                        @load="onLoadcjhd"
                        finished-text="没有更多了"
                        v-model="loadingcjhd"

                >
                    <zshdlist
                            allnum=5
                            fbdw="招生办管理员招生办管理员招生办管理员招生办管理员招生办管理员"
                            fbsj="03-20"
                            hddesc="活动内容描述或者活动内容，最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。
最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。最多显示两行，其余文字将省略。"
                            hdlx="招生咨询招生咨询招生咨询招生咨询招生咨询"
                            hdtitle="NO.1活动标题活动标题活动标题活动标题活动标题活动标题活动标题"
                            hdfj="附件(3)"
                            hdfz="支线(5)"
                            joinnum=2

                    />
                </van-list>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
    import PageHead from "../components/pagehead";
    import Zshdlist from "../components/zshdlist";

    export default {
        name: "teaMain",
        components: {Zshdlist, PageHead},
        data() {
            return {
                userRealname: '李小明',
                userDepart: '信息工程学院/副处长',
                teaqr: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3602624501,870193918&fm=26&gp=0.jpg',
                mkcj1: '',
                mkcj2: '',
                mkcj3: '',
                gkcj: '',
                gkpm: '',
                activeZshd: 0,
                valuehdall: '',
                list: [],
                loadingzxhd: false,
                finishedzxhd: false,
                loadingcjhd: false,
                finishedcjhd: false


            }
        },
        methods: {
            onLoadzxhd() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loadingzxhd = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finishedzxhd = true;
                    }
                }, 500);
            },
            onLoadcjhd() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loadingcjhd = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finishedcjhd = true;
                    }
                }, 500);
            }
        }

    }
</script>

<style type="text/css">
    .szzs-row {
        /*height: 110px;*/
        margin-top: 10px;
        background-color: white;
        /*padding-bottom: 8px;*/
    }

    .szzs-col {
        border-style: solid;
        border-color: white #f8f8f8 white white
    }

    .szzs-cjkss {
        text-align: center;
        font-size: 12px;
        color: #7e7e7e;
        padding: 8px 0px
    }

    .szzs-cjkss-num {
        text-align: center;
        font-size: 28px
    }

    .szzs-qxzs {
        text-align: center;
        font-size: 12px;
        color: #7e7e7e;
        padding: 8px 0px
    }

    .szzs-cjhds {
        text-align: center;
        font-size: 12px;
        color: #7e7e7e;
        padding: 8px 0px
    }

    .szzs-cjhds-num {
        text-align: center;
        font-size: 28px
    }

    .szzs-hdzs {
        text-align: center;
        font-size: 12px;
        color: #7e7e7e;
        padding: 8px 0px
    }

    .taballzshd {
        margin: 3px
    }
</style>