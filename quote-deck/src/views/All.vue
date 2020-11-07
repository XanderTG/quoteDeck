<template>
<div id="browse-wrapper">
  <div id=" quoteListWrapper">
    <div id="quote-list" v-for="quote in quotes" :key="quote.id">
      <h2>{{quote.Quote}}</h2>
      <p>- {{quote.author}}</p>
    </div>
    <QuoteList :quotes="allQuotes" />
  </div>

</div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App" />
// @ is an alias to /src
import QuoteList from '../components/QuoteList.vue'

export default {
  name: 'All',
  components: {
    QuoteList
  },
  data() {
    return {}
  },
  computed: {
    allQuotes() {
      return this.$root.$data.quotes
    }
  },
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
