<template>
<div class="home">
  <h4><i>Quote of the day:</i></h4>
  <QuoteList :quotes="chooseRandQuote" />
</div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App" />
// @ is an alias to /src
import QuoteList from '../components/QuoteList.vue'

export default {
  name: 'Home',
  components: {
    QuoteList
  },
  computed: {
    chooseRandQuote() {
      var randInt = Math.floor(Math.random() * this.$root.$data.quotes.length) + 1;
      console.log("randInt: " + randInt);
      return this.$root.$data.quotes.filter(quote => quote.id === randInt)
      //console.log(this.$root.$data.quotes[2]);
      //return this.$root.$data.quotes;
    }
  }
}
</script>

<style scoped>
h4 {
  padding-top: 2%;
  text-align: center;
  text-color: #5C5654;
}
</style>
