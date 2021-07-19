<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  background-color: #efefef;
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  background: #fff;
  background-color: rgb(255, 255, 255);
  margin: 0;
  border-radius: 4px;
  overflow: hidden;
  margin: 20px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2c3e50;
  box-sizing: border-box;
  box-shadow:rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
}
</style>
