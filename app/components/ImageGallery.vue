<script setup lang="ts">
const { data: images, refresh } = await useFetch('/api/images');

async function uploadImage(e: Event) {
  const form = e.target as HTMLFormElement;
  const fileInput = form.elements.namedItem('image') as HTMLInputElement;

  if (!fileInput.files?.length) {
    alert('Please select an image to upload.');
    return;
  }

  const file = fileInput.files[0] as File;
  const upload = useUpload('/api/images/upload', {
    multiple: false
  });

  try {
    await upload(file);
    form.reset();
    await refresh();
  } catch (err: any) {
    alert('Failed to upload image:\n' + (err.data?.message || err.message));
  }
}

async function deleteImage(pathname: string) {
  try {
    await $fetch(`/api/images/${pathname}`, { method: 'DELETE' });
    await refresh();
  } catch (err: any) {
    alert('Failed to delete image:\n' + (err.data?.message || err.message));
  }
}
</script>

<template>
  <div class="image-uploader">
    <h3>Images</h3>
    <form @submit.prevent="uploadImage" class="upload-form">
      <label class="upload-label">Upload an image: 
        <input type="file" name="image" accept="image/jpg,image/png" class="upload-input">
      </label>
      <button type="submit" class="upload-button">Upload</button>
    </form>
    <div class="images-container">
      <p v-if="images?.length">
        <img
          v-for="image in images"
          :key="image.pathname"
          width="200"
          :src="`/images/${image.pathname}`"
          :alt="image.pathname"
          class="uploaded-image"
          @dblclick="deleteImage(image.pathname)"
        >
      </p>
      <p v-if="images?.length">
        <i>Tip: delete an image by double-clicking on it.</i>
      </p>
    </div>
  </div>
</template>

<style scoped>
.image-uploader {
  font-family: Arial, sans-serif;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.upload-form {
  margin-bottom: 20px;
}

.upload-label {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.upload-input {
  margin-top: 5px;
}

.upload-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.upload-button:hover {
  background-color: #0056b3;
}

.images-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.uploaded-image {
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;
}

.uploaded-image:hover {
  transform: scale(1.05);
}
</style>
