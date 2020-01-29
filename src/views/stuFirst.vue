<template>
    <div>

        <PageHead
                avator="https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg"
                ptitle="亲爱的同学"
                pdesc="您好！请如实填写以下信息以便我们更好的为您服务。"
        />
        <van-cell-group style="margin-top: 10px">

            <van-field
                    v-model="name"
                    label="本人姓名"
                    placeholder="输入您的真实姓名"
                    clearable


            />
            <van-field v-model="sfzh" label="身份证号" placeholder="输入本人身份证号码" clearable/>
            <van-field v-model="sjhm" label="手机号码" type="digit" placeholder="输入可联系到您的手机号码" clearable/>
            <van-field v-model="szbj" label="所在班级" type="digit" placeholder="输入班级号 如12班 输入12即可" clearable/>
        </van-cell-group>
        <van-collapse v-model="activeSexkl" style="margin-top: 10px" accordion>
            <van-collapse-item title="性别" :value=radioSex :name="collapsename">
                <van-radio-group v-model="radioSex">

                    <van-cell title="男" clickable @click="radioSex = '男',collapsename='4'">
                        <van-radio slot="right-icon" name="男"/>
                    </van-cell>
                    <van-cell title="女" clickable @click="radioSex = '女',collapsename='3'">
                        <van-radio slot="right-icon" checked-color="red" name="女"/>
                    </van-cell>

                </van-radio-group>
            </van-collapse-item>
            <van-collapse-item title="科类" :value=radioKl :name="colname">
                <van-radio-group v-model="radioKl">

                    <van-cell title="理科" clickable @click="radioKl = '理科',colname='5'">
                        <van-radio slot="right-icon" name="理科"/>
                    </van-cell>
                    <van-cell title="文科" clickable @click="radioKl = '文科',colname='6'">
                        <van-radio slot="right-icon" checked-color="red" name="文科"/>
                    </van-cell>

                </van-radio-group>
            </van-collapse-item>

        </van-collapse>
        <van-field
                style="margin-top: 10px"
                readonly
                clickable
                :value="toareaText"
                label="学校/省市"
                placeholder="选择所在学校的省/市"
                @click="showPickerXxss = true"
                rightIcon="arrow"/>


        <van-popup v-model="showPickerXxss" position="bottom">
            <van-area
                    :area-list="areaList"
                    :columns-num="2"
                    @cancel="showPickerXxss = false"
                    @confirm="onAreaConfirm"
                    v-model="areaText"
            />
        </van-popup>

        <van-field
                readonly
                clickable
                label="学校/名称"
                placeholder="选择学校名称"
                @click="showXxmc = true"
                v-model="valuezxmc"
                rightIcon="arrow"/>
        <van-overlay :show="showXxmc" @click="showXxmc = false">
            <div @click.stop>
                <van-row type="flex" justify="center">
                    <van-col span="24" style="margin:20px 10px 5px 10px">
                        <van-search placeholder="请输入学校名称开始搜索"/>
                    </van-col>
                </van-row>
                <van-row type="flex" justify="center">
                    <van-col span="24" style="margin:0px 10px 10px 10px">
                        <van-list>
                            <van-cell
                                    value="陕西省/西安市/高新区第一中学"
                                    clickable
                                    @click="showXxmc = false,valuezxmc='陕西省/西安市/高新区第一中学'"
                            />
                            <van-cell
                                    value="陕西省/西安市/第一中学"
                                    clickable
                                    @click="showXxmc = false"
                            />
                            <van-cell
                                    value="陕西省/西安市/西北工业大学附属中学"
                                    clickable
                                    @click="showXxmc = false"
                            />
                        </van-list>

                    </van-col>
                </van-row>
            </div>
        </van-overlay>
        <van-button style="margin:20px auto;width: 90%" type="primary" block>确定提交</van-button>
    </div>
</template>
<script>
    import AreaList from '../assets/area';
    import PageHead from "../components/pagehead";

    export default {
        components: {PageHead},
        data() {
            return {
                collapsename:'',
                colname:'1',
                valuezxmc:'',
                name:'',
                radioSex: '',
                radioKl: '',
                activeSexkl: [''],
                sfzh: '',
                szbj: '',
                sjhm: '',
                Xxss: '',
                showPickerXxss: false,
                areaList: AreaList,
                areaText: '',

                province:'',
                city:'',
                showXxmc: false


            }


        },
        methods: {

            onAreaConfirm(values) {
                values= values.filter(value => !!value);
                this.province=values[0].name;
                this.city=values[1].name;
                // console.log(this.city);
                this.showPickerXxss = false;

            }


        },
        computed:{
            toareaText() {



                const arr=[this.province,this.city]

                if (this.province && this.province === this.city) {
                    arr.splice(1, 1);
                }
                return arr.filter(text => text).join('/');


            }
        }








    }
</script>
<style type="text/css">
    .page_hd {

        background-color: white;
    }

    .page_title {
        text-align: left;


    }

    .page_desc {

        color: rgba(0, 0, 0, .5);
        text-align: left;
        font-size: 14px
    }

    img.avator {
        margin: 10px;
        height: 60px;
        width: 60px;
        border-radius: 50%
    }

    .page_cont {
        padding: 10px 0;
        margin: 0px 10px 0px 0px
    }


</style>