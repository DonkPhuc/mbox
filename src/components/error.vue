<template>
  <div class="container text-center py-5 mt-5">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmexYmh7i0fJ9HY6XD8cqqx2B_Yc7M8XzR3y9--p0GnBZLwEZgNZuiy60V8ZPaG-SwKJ0&usqp=CAU"
      class="img-fluid mb-4"
      alt=""
    />
    <h1>404 - PAGE NOT FOUND</h1>
    <p class="mb-4">
      The page you are looking for might have been removed <br />
      had its name changed or is temporarily unalivable.
    </p>
    <div>
      <router-link to="/">
        <button class="button-53 my-5">GO TO HOMEPAGE</button>
      </router-link>
    </div>
    
  </div>
</template>

<style scoped>
/* CSS */
h1 {
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 20px;
  font-weight: 600;
}
.button-53 {
  background-color: #3dd1e7;
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 0 auto;
}

.button-53:focus {
  outline: 0;
}

.button-53:after {
  content: "";
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

.button-53:hover:after {
  bottom: 2px;
  left: 2px;
}

@media (min-width: 768px) {
  .button-53 {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
}
</style>