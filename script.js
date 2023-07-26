console.log("Hello!");

if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("Accept");
  });
}
