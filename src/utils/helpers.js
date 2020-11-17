export const generateCellValues = (rowCount = 10, colCount = 10) => {
  let availableValues = [
    { value: 0, usedTime: 0 },
    { value: 1, usedTime: 0 },
    { value: 2, usedTime: 0 },
    { value: 3, usedTime: 0 },
  ];
  const resultObj = {};

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const randomIndexValue =
        availableValues[Math.floor(Math.random() * availableValues.length)];
      resultObj[`${i}${j}`] = { value: randomIndexValue?.value, show: false };

      availableValues[randomIndexValue?.value] = {
        ...availableValues[randomIndexValue?.value],
        usedTime: availableValues[randomIndexValue?.value]?.usedTime + 1,
      };
      if (availableValues[randomIndexValue?.value]?.usedTime >= 25) {
        // availableValues.splice(randomIndexValue, 1);
      }
    }
  }
  return resultObj;
};
