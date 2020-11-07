<template>
<div id="wrapper">

  <div id="quote-list" v-for="quote in quotes" :key="quote.id">
    <h2>{{quote.Quote}}</h2>
    <p>- {{quote.author}}</p>
  </div>

</div>
</template>

<script>
export default {
  name: 'QuoteList',
  props: {
    quotes: Array,
  }
}
</script>

<style scoped>
#quote-list {
  width: 50%;
  font-size: 12px;
}

#quote-list h2 {
  font-size: 20px;
}

#wrapper {
  margin-top: 4%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
</style>
