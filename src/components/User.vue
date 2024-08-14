<script setup lang="ts">
const props = defineProps([
  "login",
  "name",
  "company",
  "bio",
  "followers",
  "following",
  "avatar_url",
  "searchDate"
])

function openGithubProfile() {
  if (props.login) {
    window.open(`https://github.com/${props.login}`, "_blank")
  }
}
</script>

<template>
  <div class="container">
    <div class="image" @click="openGithubProfile">
      <img :src="avatar_url" />
      <strong>@{{ login }}</strong>
    </div>
    <div class="infos">
      <h2>{{ name }}</h2>
      <h3>{{ company }}</h3>
      <p class="limited-text">{{ bio }}</p>
      <div class="spans">
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
      font-size: 0.8rem;
      padding: 1rem 6rem;

      width: 90%;
      align-items: center;
      text-align: center;
    }

    .image {
      padding: 1;
      width: 90%;
    }
  }
}

@media (max-width: 550px) {
  .container {
    .infos {
      padding: 1rem 2rem;
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

  &:hover {
    transform: scale(1.06);
    filter: brightness(1.1);
    cursor: pointer;
  }

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
