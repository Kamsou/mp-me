<script setup lang="ts">

const { data: messages, refresh } = await useFetch('/api/messages');
const newMessage = ref('');

async function sendMessage() {
  if (!newMessage.value.trim()) return;
  await $fetch('/api/messages', {
    method: 'POST',
    body: {
      text: newMessage.value
    }
  });
  newMessage.value = '';
  await refresh();
}
</script>

<template>
  <div class="message-container">
    <h3>Messages</h3>
    <form class="message-form" @submit.prevent="sendMessage">
      <input v-model="newMessage" placeholder="Type a message" class="message-input">
      <button type="submit" class="send-button">Send</button>
    </form>
    <div class="messages-list">
      <p v-for="message in messages" :key="message.id" class="message-item">
        {{ message.text }} - {{ message.created_at ? new Date(message.created_at).toLocaleString('fr-FR') : '' }}
      </p>
      <p v-if="!messages?.length" class="no-messages">
        No messages yet
      </p>
    </div>
  </div>
</template>

<style scoped>
.message-container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.message-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

.message-input:focus {
  border-color: #007bff;
}

.send-button {
  padding: 10px 20px;
  background-color: #000000;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.send-button:hover {
  background-color: grey;
}

.messages-list {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.message-item {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: #f1f1f1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #333;
}

.no-messages {
  font-style: italic;
  color: #888;
  text-align: center;
}
</style>
