let vm = new Vue({
  el: "#app",
  data: {
    results: []
  },
  mounted() {
    fetch("https://randomuser.me/api/?results=25").then(response => {
      response.json().then(data => {
        this.results = data.results;
      });
    });
  }
});
