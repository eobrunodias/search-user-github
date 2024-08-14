<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <span><strong>S</strong>earch <strong>U</strong>ser <strong>G</strong>ithub</span>
      </div>
      <nav>
        <ul>
          <slot></slot>
        </ul>
      </nav>
    </div>
  </header>
  <div class="point">.</div>
</template>

<style scoped>
header {
  background-color: var(--secondary-color);
  height: 6rem;
  display: flex;

  position: fixed;
  width: 100%;

  z-index: 1000;

  margin-bottom: 2rem;
}

.point {
  margin-bottom: 7rem;
}

span {
  display: block;
  color: white;
  width: 60px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 300;
}

strong {
  margin-right: 0.2rem;
}

.wrapper {
  width: 100%;
  margin: 0 auto;
  max-width: 80rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
}

nav ul {
  display: flex;
  flex-wrap: wrap;
}
</style>
