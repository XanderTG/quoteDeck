<template>
<div class="home">
  <h4><i>Quote of the day:</i></h4>
  <QuoteList :quotes="filteredQuotes" />
</div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App" />
// @ is an alias to /src
import QuoteList from '../components/QuoteList.vue'
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      quotes: [],
      filteredQuotes: [],
    }
  },
  components: {
    QuoteList
  },
  created() {
    this.getAllQuotes();
  },
  computed: {},
  methods: {
    getIndex(quote) {
      return this.quotes.indexOf(quote);
    },
    chooseRandQuote() {
      var randInt = Math.floor(Math.random() * this.quotes.length);
      console.log("RANDINT:");
      console.log(randInt);
      this.filteredQuotes = this.quotes.filter(quote => this.getIndex(quote) === randInt);
    },
    async getAllQuotes() {
      try {
        let response = await axios.get("/api/quotes");
        this.quotes = response.data;
        this.chooseRandQuote();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
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
