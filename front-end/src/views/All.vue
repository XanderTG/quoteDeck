<template>
<div id="browse-wrapper">
  <div id=" quoteListWrapper">

    <QuoteList :quotes="quotes" />
  </div>

</div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App" />
// @ is an alias to /src
import QuoteList from '../components/QuoteList.vue'
import axios from 'axios';

export default {
  name: 'All',
  components: {
    QuoteList
  },
  data() {
    return {
      quotes: [],
    }
  },
  created() {
    this.getAllQuotes();
  },
  computed: {
    allQuotes() {
      return this.$root.$data.quotes
    }
  },
  methods: {
    async getAllQuotes() {
      try {
        let response = await axios.get("/api/quotes");
        this.quotes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.btn.btn-primary {
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  background-color: #A095F5;
  border: none;
}

#menu-buttons {
  margin-top: 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#quote-list p {
  margin-bottom: 40px;
}

#quoteListWrapper {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
</style>
