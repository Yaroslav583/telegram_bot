<template>
  <div id="app">
    <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/page1">Page 1</router-link>
      <router-link to="/page2">Page 2</router-link>
      <router-link to="/page3">Page 3</router-link>
    </nav>
    <router-view></router-view>
  </div>
  <div>
    <button @click="sendNotification">Отправить уведомление</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  methods: {
    async sendNotification() {
      try {
        const response = await axios.post('https://us-central1-telegram-web-app-9e595.cloudfunctions.net/sendNotification');
        console.log(response.data);
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    }
  }
}
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  background-color: #eee;
  padding: 10px;
}
nav a {
  text-decoration: none;
  color: #333;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
