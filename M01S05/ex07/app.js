let dateBuilder = [
  () => {
    return '2019';
  },
  () => {
    return 'Februarie';
  },
  () => {
    return '24';
  },
];

dateBuilder[3] = () => {
  return 'Duminica';
};
