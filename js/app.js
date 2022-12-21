console.log("hello");

const get = (element) => {
  const select = document.querySelector(element);
  if (select) {
    return select;
  } else {
    throw Error("N-ai selectat nimic");
  }
};

const copyrightYear = get("#date");
copyrightYear.textContent = `${new Date().getFullYear()}`;
