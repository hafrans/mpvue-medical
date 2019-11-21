import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        healthExamItem: [
            {
              name: "血液检查",
              children: [
                {
                  name: "血常规检查",
                  url: "/pages/healthExamUpload/main?test=1",
                  desc: "血常规中的许多项具体指标都是一些常用的敏感指标，对机体内许多病理改变都有敏感反映，其中又以白细胞计数、红细胞计数、血红蛋白和血小板最具有诊断参考价值。",
                },
                {
                  name: "血糖血脂检查",
                  url: "/pages/healthExamUpload/main?test=1",
                  desc: ""
                },
                {
                  name: "肝功检查",
                  url: "/pages/healthExamUpload/main?test=1",
                  desc: "肝功能检查，就是通过抽血或者其他检查方式查看患者肝脏功能代谢有关的各项指标，用于诊断患者是否患有肝脏疾病、肝脏是否有所损害等。"
                },
                {
                  name: "其他血液检查",
                  url: "/pages/healthExamUpload/main?test=1",
                  desc: ""
                }
              ]
            },
            {
                name: "医学超声检查",
                children: [
                    {
                        name: "B超检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "B超超声波检查是超声波检查的一种方式，是一种非手术的诊断性检查，一般在临床应用方面。对受检者无痛苦、无损伤、无放射性，可以放心接受检查。B超可以清晰地显示各脏器及周围器官的各种断面像，应用超声检查可以早期明确诊断。"
                    },
                    {
                        name: "彩超检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "B超超声波检查是超声波检查的一种方式，是一种非手术的诊断性检查，一般在临床应用方面。对受检者无痛苦、无损伤、无放射性，可以放心接受检查。B超可以清晰地显示各脏器及周围器官的各种断面像，由于图像富于实体感，接近于解剖的真实结构，所以应用超声检查可以早期明确诊断。"
                    }
                ]
            },
            {
                name: "大小便检查",
                children: [
                    {
                        name: "尿液检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "尿液检查，是医学的一种检测方式。包括尿常规分析、尿液中有形成分检测( 如尿红细胞、白细胞等)、蛋白成分定量测定、尿酶测定等。尿液检查对临床诊断、判断疗效和预后有着十分重要的价值。"
                    },
                    {
                        name: "粪便检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "通过此项检查可较直观地了解胃肠道一些病理现象，间接地判断消化道、胰腺、肝胆的功能状况。"
                    }
                ]
            },
            {
                name: "放射学检查",
                children: [
                    {
                        name: "X-射线检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "X射线检查是用X射线诊断疾病的方法。分普通检查 、 特殊检查和造影检查。透视是一种简便而常用的检查方法，可从不同角度观察脏器的形态及功能改变。"
                    },
                    {
                        name: "CT检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "检查方便、迅速而安全，只需患者不动，即可顺利完成检查，易为患者接受，且随诊方便，尤其是对于急诊病人能较快做出诊断，对争取时间抢救病人起到重要作用。此外，CT还可以对急症在短期内重复检查，有利于观察病变的演变。"
                    },
                    {
                        name: "核磁共振检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "核磁共振通常被认为是对人体没有辐射并且无害的一种影像检查方式，是用原子核在磁场中发生了共振而重建的一种成像的技术，并且在重建图像时不受骨质的影响、成像序列的方式的多样化更加能有针对性的获得检查结果。在各种专项检查中能获得较为准确的结果并且对人体无害是核磁共振的两项突出优势。"
                    }

                ]
            },
            {
                name: "其他检查",
                children: [
                    {
                        name: "心电检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "心电图不仅对慢性缺血性心脏病、急性冠脉综合征、心肌炎、心包炎、肺栓塞以及心律失常等部分心血管疾病有确诊价值，而且在遗传性离子通道疾病、心脏结构异常、电解质紊乱等的诊断中也具有重要的辅助价值。"
                    },
                    {
                        name: "内窥镜检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: "内窥镜检查是由体外经过人体自然腔道送入体内，对体内疾病进行检查的一种光学仪器检查。 "
                    },
                    {
                        name: "其他项目检查",
                        url: "/pages/healthExamUpload/main?test=1",
                        desc: ""
                    }
                ]
            }
    
          ],
        healthExamUploadedStorage: {
            "example": [
                { url: '/static/images/hotel3.jpeg' },
                { url: '/static/images/hotel2.jpeg' },
                { url: '/static/images/hotel1.jpeg' },
            ]

        }
         
    },
    getters: {
        test(){
            return 3;
        },
        /**
         *  获取整个storage中的内容
         * @param {*} state 
         */
        getHealthExamUploadedStorage(state){
            return state.healthExamUploadedStorage
        },
       
    },
    mutations: {
        /**
         * 设置整个Storage not recommended.
         * @param {*} state 
         * @param {*} payload 
         */
        setHealthExamUploadedStorage(state, payload = {}) {
            state.healthExamUploadedList = payload
        }, 
        /**
         * 设置Storage中单个Item的信息
         * @param {*} state 
         * @param {*} payload 
         */
        setHealthExamUploadedItemStorage(state, payload = { name: null, obj: {} }) {
            if (payload.name === null){
                throw new Error("Name is null")
            }
            state.healthExamUploadedStorage[payload.name] = payload.obj
        },
        /**
         * 添加单条信息 ** NOT recomended. **
         * @param {*} state 
         * @param {*} payload 
         */
        appendHealthExamUploadedItemStorage(state, payload = { name: null, obj: {} }) { // 没啥用
            if (payload.name === null){
                throw new Error("Name is null")
            }
            if (typeof state.healthExamUploadedStorage[payload.name] === "undefined") {
                state.healthExamUploadedStorage[payload.name] = []
            }
            state.healthExamUploadedStorage[payload.name].append(payload.obj)
        },
         /**
         * 获取单个Item的内容
         * @param {*} state 
         * @param {*} payload 
         */
        getHealthExamUploadedItemStorage(state, payload = {name: null}) {
            if (payload.name === null){
                throw new Error("Name is null")
            }
            if (typeof state.healthExamUploadedStorage[payload.name] === "undefined"){
                return []
            } else {
                return state.healthExamUploadedStorage[payload.name]
            }
        },
        /**
         * 计算单个Item中的数量
         * @param {*} state 
         * @param {*} payload 
         */
        getHealthExamUploadedItemCounter(state, payload = {name: null}){ // recommended.
            if (payload.name === null){
                throw new Error("Name is null")
            }
            if (typeof state.healthExamUploadedStorage[payload.name] === "undefined") {
                return 0;
            } else {
                return state.healthExamUploadedStorage[payload.name].length;
            }
        }
        
    },
    actions: {
        async uploadAllStorage({commit, getters}){
            // TODO
            commit("setHealthExamUploadedStorage", {})
        }
        
    }
});

export default store;