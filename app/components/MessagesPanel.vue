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
    <form @submit.prevent="sendMessage" class="message-form">
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
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.message-form {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.message-input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.send-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.send-button:hover {
  background-color: #0056b3;
}

.messages-list {
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
}

.message-item {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.no-messages {
  font-style: italic;
  color: #888;
}
</style>
