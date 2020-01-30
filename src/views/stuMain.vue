<template>
    <div>
        <page-head
                :pdesc="userDepart"
                :ptitle="userRealname"
                avator="https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
                callname="同学"
                editable
                personinfoable
                pushpage="stuFirst"
        />
        <van-panel desc="通过以下方式与您的专属招生老师随时取得联系" icon="manager" style="margin-top: 10px" title="招生咨询老师">
            <van-row style="padding: 10px 10px 10px 20px" type="flex">
                <van-col span="16">
                    <van-row type="flex">
                        <van-col style="text-align: left">
                            <div class="teaname">李小明<span class="teacher">老师</span></div>
                            <div class="teapart">西安电子科技大学/信息工程学院</div>
                            <div class="phoneinfo">
                                <van-icon name="phone-o" size="16px"/>
                                <span class="phonenum">13913913919</span>
                            </div>
                        </van-col>

                    </van-row>
                </van-col>
                <van-col span="8" style="text-align: right">
                    <img :src="teaqr" height="65px" width="65px"/>
                </van-col>
            </van-row>
        </van-panel>
        <van-panel desc="请在每阶段考试完成后填报以下信息" icon="column" style="margin-top: 10px" title="阶段填报信息">
            <van-field
                    clearable
                    type="number"
                    label="模考成绩一"
                    placeholder="输入第一次模拟考试成绩"
                    v-model="mkcj1"/>
            <van-field
                    clearable
                    type="number"
                    label="模考成绩二"
                    placeholder="输入第二次模拟考试成绩"
                    v-model="mkcj2"/>
            <van-field
                    clearable
                    type="number"
                    label="模考成绩三"
                    placeholder="输入第三次模拟考试成绩"
                    v-model="mkcj3"/>
            <van-field
                    clearable
                    type="number"
                    label="高考成绩"
                    placeholder="输入您的高考成绩"
                    v-model="gkcj"/>
            <van-field
                    clearable
                    type="number"
                    label="高考排名"
                    placeholder="输入您的高考排名"
                    v-model="gkpm"/>
        </van-panel>
        <van-button block style="margin:20px auto;width: 90%" type="primary">确定提交</van-button>
    </div>
</template>

<script>
    import PageHead from "../components/pagehead";

    export default {
        components: {PageHead},
        data() {
            return {
                userRealname: '张学新',
                userDepart: '西安市第八十二中学/高三12班',
                teaqr: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3602624501,870193918&fm=26&gp=0.jpg',
                mkcj1: '',
                mkcj2: '',
                mkcj3: '',
                gkcj: '',
                gkpm: ''
            }
        }
    }
</script>
<style type="text/css">
    .teaname {
        font-size: 14px;
        font-weight: bold
    }

    .teacher {
        font-size: 12px;
        font-weight: normal;
        margin-left: 5px
    }

    .teapart {
        font-size: 12px;
        color: rgba(0, 0, 0, .5);
        margin-top: 5px
    }

    .phoneinfo {
        margin-top: 5px;
        display: inline-flex;
        align-items: center
    }

    .phonenum {
        font-size: 14px;
        color: rgba(0, 0, 0, .5);
        margin-top: 5px
    }
</style>