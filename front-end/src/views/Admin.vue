<template>
<div>
  <div class="heading">
    <div class="circle"></div>
  </div>

  <div class="adminOptions">
    <div class="option">
      <h2>Add a quote</h2>
      <div class="form">
        <textarea v-model="quote" placeholder="Quote"></textarea>
        <p></p>
        <input v-model="author" placeholder="Author">
        <p></p>
        <input v-model="topic" placeholder="Topic">
        <p></p>
        <button type="button" class="btn btn-primary" @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addItem">
        <h3 class="added">Quote added!</h3>
      </div>
    </div>

    <div class="option">
      <h2>Delete a quote</h2>
      <div class="form">
        <input v-model="findQuote" placeholder="Start typing a quote">
        <div class="suggestions" v-if=" suggestions.length > 0 && findQuote">
          <div class="suggestion" v-for="s in suggestions" :key="s.id" @click="selectItem(s)">{{s.quote}}
          </div>
        </div>
      </div>
      <div class="upload" v-if="findItem">
        <input v-model="findItem.quote">
      </div>
      <div class="actions" v-if="findItem">
        <button type="button" class="btn btn-primary" @click="remove(findItem)">Delete</button>
      </div>
    </div>

  </div>


</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      id: null,
      author: "",
      quote: "",
      topic: "",
      addItem: null,
      findQuote: "",
      findItem: null,
      quotes: [],
    }
  },
  computed: {
    suggestions() {
      let items = this.quotes.filter(item => item.quote.toLowerCase().startsWith(this.findQuote.toLowerCase()));
      return items.sort((a, b) => a.quote > b.quote);
    }
  },
  created() {
    this.getAllQuotes();
  },
  methods: {
    selectItem(item) {
      this.findQuote = "";
      this.findItem = item;
    },
    async upload() {
      try {
        let r1 = await axios.post('/api/quotes', {
          id: this.id,
          author: this.author,
          quote: this.quote,
          topic: this.topic
        });
        this.addItem = r1.data;
      } catch (error) {
        console.log(error);
      }
    },
    async getAllQuotes() {
      try {
        let response = await axios.get("/api/quotes");
        this.quotes = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async remove(item) {
      try {
        await axios.delete("/api/quotes/" + item._id);
        this.findItem = null;
        this.getAllQuotes();
        return true;
      } catch (error) {
        console.log(error);
      }
    }


  }
}
</script>

<style scoped>
input {
  width: 300px;
  margin-bottom: 15px;
}

textarea {
  width: 300px;
  height: 200px;
}

h2 {
  margin-bottom: 20px;
}

.added {
  margin-top: 10px;
}

.adminOptions {
  margin-top: 4%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.option {
  margin-bottom: 30px;
  padding: 15px;
}

.suggestion {
  border: 1px solid #ccc;
  padding: 5px;
  margin: 10px;
}

.suggestions {
  border: 2px solid #5C5654;
  max-width: 300px;
  margin: 10px;
}

.btn.btn-primary {
  background-color: #A095F5;
  border: none;
}
</style>
