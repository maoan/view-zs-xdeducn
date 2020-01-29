<template>
    <van-row class="page_hd"  type="flex"  align="center" >
        <van-col>
            <img
                    class="avator"
                    :src="avator" />
        </van-col>
        <van-col class="page_cont">

            <van-row type="flex" justify="space-around">
                <van-col span="18">
                <span class="page_title" >
                    {{ptitle}}
                    <span style="font-size: 14px;margin-left:3px">{{callname}}</span>
                </span>
                </van-col>
                <van-col span="6" style="text-align: right">
                    <a
                            @click="onpushpage"
                            v-if="personinfoable"
                            href="javascript:void(0)"

                    >
                        <van-icon name="qr" v-if="qrable" size="16px" />
                        <van-icon name="records" v-if="editable" size="16px" />
                        <van-icon name="arrow" size="16px" />
                    </a>
                </van-col>
            </van-row>



            <span class="page_desc" >{{pdesc}}</span><!--我们会尊重并保护您的个人隐私。-->

        </van-col>
    </van-row>
</template>

<script>
    export default {
        name: "page-head",
        methods:{
            onpushpage() {

                this.$router.push(this.pushpage);

            },
        },
        props:{
            avator:String,
            ptitle:String,
            pdesc:String,
            callname:String,
            personinfoable:Boolean,
            qrable:Boolean,
            editable:Boolean,
            pushpage:String
        }
    }
</script>

<style scoped>
    .page_hd {

        background-color: white;
    }
    .page_title {

        text-align: left;


    }
    .page_desc {
        display: block;
        margin-top: 5px;
        color: #989898;
        text-align: left;
        font-size: 14px
    }
    img.avator{
        margin: 14px 10px 10px;
        height: 45px;
        width: 45px;
        border-radius:50%
    }
    .page_cont{

        width: 100%;
        padding: 15px 0;
        margin: 0px 10px 0px 0px
    }
</style>