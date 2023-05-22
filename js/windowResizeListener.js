const windowResizeListener = (cb) => {
  window.addEventListener('resize', () => {
    cb();
  });
};

export { windowResizeListener };
