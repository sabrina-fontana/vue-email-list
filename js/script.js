new Vue({
  el: '#app',
  data: {
    emailsArray: []
  },
  mounted() {
    this.mountedFunction()
  },
  methods: {
    mountedFunction: function() {
      let that = this;
      for (var x = 0; x < 10; x++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(resp) {
          console.log(resp.data.response)
          that.emailsArray.push(resp.data.response);
        });
      }
    },
    deleteEmail: function(index) {
      this.emailsArray.splice(index, 1)
    },
    createEmails: function() {
      this.emailsArray = [];
      this.mountedFunction()
    }
  }
})
Vue.config.devtools = true
