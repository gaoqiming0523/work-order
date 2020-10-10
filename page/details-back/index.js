var app = new Vue({
  el: '#app',
  data() {
    return {
      token: localStorage.getItem('sToken'),
      infoObj: {},
      id: location.href.split('?')[1].split('=')[1],
      uploader: [],
      showPicker: false,
      value: '',
      columns: [
        {
          text: '故障类型一',
          children: [
            {
              text: '软件问题',
              children: [{ text: '问题一' }, { text: '问题二' }],
            }
          ],
        },
        {
          text: '故障类型二',
          children: [
            {
              text: '线路问题',
              children: [{ text: '未连接' }, { text: '已断开' }],
            }
          ],
        },
      ],
      columns2: ['杆线', '主线'],
      columns3: ['外力', '自然', '设计施工', '运行维护'],
      columns4: ['小类问题一', '小类问题二'],
      emNumber: 0,
      faultCause: '',
      faultDescribe: '',
      timeoutDesc: '',
      checked: false,
      faultTypeFlag: false,
      faultCauseFlag: false,
      faultCauseFlagTwo: false,
      message: '',
      formData: {
        id: location.href.split('?')[1].split('=')[1],
        startRegion: '',
        endRegion: '',
        isFindRegion: false,
        isUserFault: false,
        faultDeviceFault: '', // 0
        faultRegionStart: 0,
        faultRegionEnd: 0,
        faultPointPhoto: '',
        faultRegionPoint: '',
        faultCauseOne: '', // 1
        faultCauseTwo: '', // 2
        desc: '',
        isFaultHandle: false,
        isElectricJob: false,
        faultDescribePhoto: '',
      }
    };
  },
  created() { },
  destroyed() { },
  mounted() {
    this.getInfo()
  },
  filters: {
    formatTime(val) {
      val = val ? val : new Date().getTime()
      var dajsTime = dayjs(val)
      return dajsTime.format('HH:mm')
    }
  },
  methods: {
    // 订单详情
    getInfo() {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/info/' + this.id,
        headers: { token: this.token },
      })
        .then(function (response) {
          that.infoObj = response.data.data
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
          location.href = '../login/index.html'
        });
    },
    onConfirm(value) {
      console.log('value', value)
      this.value = value;
      this.showPicker = false;
    },
    onConfirm2(value) {
      console.log('123')
      this.formData.faultDeviceFault = value
      this.faultTypeFlag = false;
    },
    onConfirm3(value) {
      console.log('123')
      this.formData.faultCauseOne = value
      this.faultCauseFlag = false;
    },
    onConfirm4(value) {
      console.log('123')
      this.formData.faultCauseTwo = value
      this.faultCauseFlagTwo = false;
    },
    setBack(id) {
      this.setSingle(id)
    },
    // 回单 单户
    setSingle() {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/handle-single',
        headers: { token: this.token },
        data: {
          "confirmTime": dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          "emNumber": parseInt(this.emNumber),
          "faultCause": this.faultCause,
          "faultDescribe": this.faultDescribe,
          "finishTime": dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
          "id": this.id,
          "reporterUserNumber": "",
          "sitePhoto": "",
          "timeoutDesc": this.timeoutDesc || "故障定位超时",
          "typeOne": 1,
          "typeThree": 2,
          "typeTwo": 3
        }
      })
        .then(function (response) {
          console.log(response.data)
          location.href = '../../index.html'
        })
        .catch(function (error) {
          console.log(error);
          // location.href = '../login/index.html'
        });
    },
    // 回单 10kv
    set10kv() {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/handle-10kv',
        headers: { token: this.token },
        data: {
          id: this.id,
          startRegion: this.formData.startRegion,
          endRegion: this.formData.endRegion,
          isFindRegion: this.formData.isFindRegion ? 1 : 0,
          isUserFault: this.formData.isUserFault ? 1 : 0,
          faultDeviceFault: 1, // 0
          faultRegionStart: 10,
          faultRegionEnd: 20,
          faultPointPhoto: '',
          faultRegionPoint: this.formData.faultRegionPoint,
          faultCauseOne: 1, // 1
          faultCauseTwo: 2, // 2
          isFaultHandle: this.formData.isFaultHandle ? 1 : 0,
          isElectricJob: this.formData.isElectricJob ? 1 : 0,
          faultDescribePhoto: '',
        }
      })
        .then(function (response) {
          console.log(response.data)
          location.href = '../../index.html'
        })
        .catch(function (error) {
          console.log(error);
          // location.href = '../login/index.html'
        });
    },
    // 回单-无网络 单户
    setNoNetworkSingle() {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/handle-single/no-network',
        headers: { token: this.token },
      })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
          location.href = '../login/index.html'
        });
    },
    // 回单-无网络 10kv
    setNoNetwork10kv() {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/handle-10kv/no-network',
        headers: { token: this.token },
      })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
          location.href = '../login/index.html'
        });
    },

  },
});
Vue.use(vant.Lazyload)
// Vue.use(vant.Uploader);