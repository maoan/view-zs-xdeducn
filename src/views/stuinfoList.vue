<template>
    <div>
        <van-search @cancel="$router.push('teamain')" placeholder="请输入搜索关键词" show-action v-model="valuestuall"/>
        <div style="background-color: white;padding: 0px 10px 10px;font-size:13px;color: #989898">
            共搜索到记录{{itemnum}}条
        </div>
        <van-list
                :finished="finishedstulist"
                @load="onLoadstulist"
                finished-text="没有更多了"
                v-model="loadingstulist"
        >
            <van-cell-group :key="item" v-for="item in list">
                <van-cell @click="onlistitemclick(item)" clickable value-class="stulistvalue">
                    <div class="stunametel">
                        张三 13333333333
                    </div>
                    <div class="stuzxmcbj">陕西省/西安市/高新第一中学/高三12班高三12班高三12班高三12班</div>
                    <van-icon
                            :name="arrowupdown[item]"
                            class="stulisticon"
                            slot="right-icon"
                    />

                </van-cell>
                <van-cell v-show=showcj[item] value-class="stuzxmcbj">
                    模1-528 / 模2-562 / 模3-610 / 高考-621 / 排名-81%
                </van-cell>

            </van-cell-group>
        </van-list>
    </div>
</template>

<script>
    export default {
        data() {
            return {

                arrowupdown: ['arrow-down'],
                showcj: [false],
                valuestuall: '',
                loadingstulist: false,
                finishedstulist: false,
                list: [],
                itemnum: '10'

            }
        },
        methods: {
            onlistitemclick(key) {


                if (this.arrowupdown[key] === "arrow-down") {

                    this.$set(this.arrowupdown, key, "arrow-up");

                    this.showcj[key] = true;


                } else {
                    this.$set(this.arrowupdown, key, "arrow-down");
                    this.showcj[key] = false;

                }


            },
            onLoadstulist() {
                // 异步更新数据
                // setTimeout 仅做示例，真实场景中一般为 ajax 请求
                setTimeout(() => {
                    for (let i = 0; i < 5; i++) {
                        this.list.push(this.list.length + 1);
                        this.arrowupdown.push("arrow-down");
                        this.showcj.push(false)
                    }

                    // 加载状态结束
                    this.loadingstulist = false;

                    // 数据全部加载完成
                    if (this.list.length >= 10) {
                        this.finishedstulist = true;

                    }
                }, 1000);
            }
        }
    }
</script>

<style>
    .stunametel {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        font-size: 16px;
        line-height: 22px;
    }

    .stulistvalue {
        padding-right: 44px
    }

    .stulisticon {
        position: absolute;
        top: 50%;
        right: 16px;
        color: #969799;
        font-size: 18px;
        transform: translate(0, -50%);
    }

    .stuzxmcbj {
        color: #989898;
        font-size: 14px;
        line-height: 18px;
    }
</style>