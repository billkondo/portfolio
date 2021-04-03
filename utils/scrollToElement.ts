const scrollToElement = (window: Window, id: string) => {
  const doc = document.getElementById(id);

  window.scrollTo({
    behavior: 'smooth',
    top: doc.offsetTop,
  });
};

export default scrollToElement;
