<template>
  <header>
    <div class="wrapper">
      <div></div>
      <a href="https:/github.com/eobrunodias">by | <span>eobrunodias 💻 </span></a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: var(--secondary-color);
  height: 6rem;
  display: flex;
}

a {
  span {
    color: #d1cccc;
  }
}

.wrapper {
  grid-area: header;

  width: 100%;
  margin: 0 auto;
  max-width: 80rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
}
</style>
