var app = new Vue({
  el: '#app',
  data() {
    return {
      token: localStorage.getItem('sToken'),
      infoObj: {},
      id: location.href.split('?')[1].split('=')[1]
    };
  },
  created() {},
  destroyed() {},
  mounted() {
    this.getInfo()
  },
  filters: {
    formatTime(val) {
      val = val?val:new Date().getTime()
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
    // 接单
    setAccept(id) {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/accept/' + id,
        headers: { token: this.token },
      })
        .then(function (response) {
          console.log(response.data)
          that.getInfo()
        })
        .catch(function (error) {
          console.log(error);
          location.href = '../login/index.html'
        });
    },
    // 到达现场/确认
    setArrive(id) {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/arrive/' + id,
        headers: { token: this.token },
      })
        .then(function (response) {
          console.log(response.data)
          that.getInfo()
        })
        .catch(function (error) {
          console.log(error);
          location.href = '../login/index.html'
        });
    },
    setBack(id) {
      // this.setSingle(id)
      location.href = '../details-back/index.html?id='+id
    },
    // 回单 单户
    setSingle() {
      var that = this
      axios({
        method: 'post',
        url: 'http://121.42.233.49:7888/job/handle-single',
        headers: { token: this.token },
      })
        .then(function (response) {
          console.log(response.data)
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
      })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
          location.href = '../login/index.html'
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