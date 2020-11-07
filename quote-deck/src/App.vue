<template>
<div id="app">
  <div class="main-container">
    <div id="nav">
      <router-link class="menuItem" to="/">Home</router-link>
      <router-link class="menuItem" to="/browse">Browse</router-link>
      <router-link class="menuItem" to="/all">Library</router-link>
    </div>
    <div id="mainTitle">
      <h1>Quote Deck</h1>
      <hr>
    </div>

    <router-view />

    <div class="footer">
      <a href="https://github.com/XanderTG/quoteDeck"><i class="fab fa-github"></i></a>
    </div>
  </div>
</div>
</template>

<style>
* {
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  position: relative;
}

.main-container {
  min-height: 100vh;
  /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 70px;
  /* height of your footer */
}

.fab.fa-github {
  color: rgb(100, 100, 100);
  font-size: 2.5rem;
  padding: .5em;
}

.fab.fa-github:hover {
  color: rgb(60, 60, 60);
}

.footer {
  background-color: rgba(135, 245, 125, 0.2);
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menuItem {
  margin-left: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#mainTitle {
  padding-top: 8%;
  color: #5C5654;
  text-align: center;
  font-family: 'Cinzel', serif;
}

#mainTitle hr {
  width: 50%;
}

#nav {
  width: 100%;
  float: left;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #4DA845;
}
</style>
