<script setup lang="ts">

const { data: redirects, refresh } = await useFetch('/api/redirects', {
  transform: (data: { [key: string]: string }) => {
    // Transform to text for the textarea
    return Object.entries(data).map(([from, to]) => `${from} ${to}`).join('\n')
  }
});

async function updateRedirects() {
  const body = Object.fromEntries(
    redirects.value!.split('\n').map(line => line.split(' '))
  );
  await $fetch('/api/redirects', {
    method: 'PUT',
    body
  });
  await refresh();
}
</script>

<template>
  <div class="redirect-container">
    <h3>Server redirects</h3>
    <form @submit.prevent="updateRedirects" class="redirect-form">
      <p>
        <textarea
          v-model="redirects"
          rows="6"
          placeholder="/from /to (one redirect per line)"
          class="redirect-textarea"
        />
      </p>
      <button type="submit" class="save-button">Save redirects</button>
    </form>
  </div>
</template>

<style scoped>
.redirect-container {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.redirect-form {
  display: flex;
  flex-direction: column;
}

.redirect-textarea {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.save-button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #0056b3;
}
</style>
