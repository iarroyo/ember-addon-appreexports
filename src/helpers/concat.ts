const concat = function (a: string, b: string) {
  console.log('concat from addon');
  return a + b;
};

export { concat, concat as default };
