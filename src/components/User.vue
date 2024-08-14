<script setup lang="ts">
defineProps(["login", "name", "company", "bio", "followers", "following", "avatar_url"])
</script>

<template>
  <div class="container">
    <div class="image">
      <img :src="avatar_url" />
      <strong>@{{ login }}</strong>
    </div>
    <div class="infos">
      <h2>{{ name }}</h2>
      <h3>{{ company }}</h3>
      <p class="limited-text">{{ bio }}</p>
      <div>
        <span class="followers"><strong>Followers:</strong>{{ followers }}</span>
        <span class="following"><strong>Following:</strong>{{ following }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  min-width: 100%;

  margin-bottom: 2rem;
  gap: 2rem;
}

@media (max-width: 800px) {
  .container {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;

    .infos {
      display: none;
    }

    .image {
      flex: 1;
      padding: 0;
      background-color: var(--secondary-color);
    }
  }
}

.infos {
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  min-height: 16rem;
  max-height: 16rem;
  background-color: var(--background-color);
  padding: 3rem;
  border-radius: 10px;

  h2 {
    color: var(--text-color);
    margin-bottom: 1rem;
  }

  h3 {
    display: block;
    color: var(--white-color);
    margin-bottom: 2rem;
  }

  p {
    margin-bottom: 1rem;
  }

  span {
    strong {
      color: var(--white-color);
      margin-right: 0.5rem;
    }

    & + & {
      margin-left: 1rem;
    }
  }
}

.image {
  background-color: var(--background-color);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  width: 50%;
  text-align: center;

  max-height: 16rem;

  img {
    border-radius: 999px;
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;
  }

  strong {
    display: block;
  }
}
</style>
