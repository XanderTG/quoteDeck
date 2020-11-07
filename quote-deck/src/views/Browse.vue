<template>
<div id="browse-wrapper">

  <div id="menu-buttons">
    <button type="button" class="btn btn-primary" @click="select('Advice')">Advice</button>
    <button type="button" class="btn btn-primary" @click="select('Encouragement')">Encouragement</button>
    <button type=" button" class="btn btn-primary" @click="select('Relationships')">Relationships</button>
    <button type=" button" class="btn btn-primary" @click="select('Religion')">Religion</button>
  </div>

  <div id=" quoteListWrapper">
    <div id="quote-list" v-for="quote in quotes" :key="quote.id">
      <h2>{{quote.Quote}}</h2>
      <p>- {{quote.author}}</p>
    </div>
    <QuoteList :quotes="quotesByTopic" />
  </div>

</div>
</template>

<script>
//<HelloWorld msg="Welcome to Your Vue.js App" />
// @ is an alias to /src
import QuoteList from '../components/QuoteList.vue'

export default {
  name: 'Browse',
  components: {
    QuoteList
  },
  data() {
    return {
      selectedTopic: 'Encouragement',
    }
  },
  computed: {
    quotesByTopic() {
      return this.$root.$data.quotes.filter(quote => quote.Topic === this.selectedTopic)
    }
  },
  methods: {
    select(topic) {
      this.selectedTopic = topic;
    }
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
