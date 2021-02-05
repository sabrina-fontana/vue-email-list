new Vue({
  el: '#app',
  data: {
    emailsArray: []
  },
  mounted() {
    let that = this;
    for (var x = 0; x < 10; x++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        console.log(resp.data.response)
        that.emailsArray.push(resp.data.response);
      });
    }
  }
})
Vue.config.devtools = true
