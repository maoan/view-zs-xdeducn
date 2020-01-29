<template>
    <div>

        <page-head
                avator="https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg"
                ptitle="尊敬的老师"

                pdesc="您好！请如实填写以下信息以便我们更好的为您服务。"

        />
        <van-cell-group style="margin-top: 10px">

            <van-field
                    v-model="name"
                    label="姓名"
                    placeholder="输入您的姓名"
                    clearable



            />
            <van-field  v-model="gzh" label="工资号" placeholder="输入本人在校的工资号" clearable/>
            <van-field  v-model="sjhm" label="手机号码" placeholder="输入您的手机号码" clearable/>

        </van-cell-group>
        <van-collapse v-model="activeSexkl" style="margin-top: 10px">
            <van-collapse-item title="性别" name="1">
                <van-radio-group v-model="radioSex">

                    <van-cell title="男" clickable @click="radioSex = '1'">
                        <van-radio slot="right-icon" name="1" />
                    </van-cell>
                    <van-cell title="女" clickable @click="radioSex = '2'">
                        <van-radio slot="right-icon" checked-color="red" name="2" />
                    </van-cell>

                </van-radio-group>
            </van-collapse-item>


        </van-collapse>
        <van-field
                style="margin-top: 10px"
                readonly
                clickable
                :value="dzzw"
                label="党政职务"
                placeholder="选择您担任的党政职务"
                @click="showPickerdzzw = true"
                rightIcon="arrow"/>


        <van-popup v-model="showPickerdzzw" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columnsdzzw"
                    @cancel="showPickerdzzw = false"
                    @confirm="onConfirmdzzw"
            />
        </van-popup>

        <van-field

                readonly
                clickable
                :value="jszc"
                label="技术职称"
                placeholder="选择您的技术职称"
                @click="showPickerjszc = true"
                rightIcon="arrow"/>


        <van-popup v-model="showPickerjszc" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columnsjszc"
                    @cancel="showPickerjszc = false"
                    @confirm="onConfirmjszc"
            />
        </van-popup>
        <van-field

                readonly
                clickable
                :value="szdw"
                label="所在单位"
                placeholder="选择您工作的单位"
                @click="showPickerszdw = true"
                rightIcon="arrow"/>


        <van-popup v-model="showPickerszdw" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columnsszdw"
                    @cancel="showPickerszdw = false"
                    @confirm="onConfirmszdw"
            />
        </van-popup>


        <van-button style="margin:20px auto;width: 90%" type="primary" block>确定提交</van-button>
    </div>
</template>
<script>


    import PageHead from "../components/pagehead";
    export default {
        components: {PageHead},
        data() {
            return {
                name: '',

                radioSex: '1',

                activeSexkl: [''],
                gzh: '',

                sjhm: '',

                showPickerdzzw: false,
                showPickerjszc: false,
                showPickerszdw: false,
                dzzw:'',
                jszc:'',
                szdw:'',
                columnsdzzw: ['处长', '副处长', '科长', '副科长', '科员'],
                columnsjszc: ['博导', '教授', '副教授', '讲师', '助教'],
                columnsszdw: ['信息工程学院', '通信工程学院', '综合办公室', '教务处', '学生处']



            }


        },
        methods:{

            onConfirmdzzw(value) {
                this.dzzw = value;
                this.showPickerdzzw = false;
            },
            onConfirmjszc(value) {
                this.jszc = value;
                this.showPickerjszc = false;
            },
            onConfirmszdw(value) {
                this.szdw = value;
                this.showPickerszdw = false;
            }





        },



    }
</script>
<style type="text/css">




</style>