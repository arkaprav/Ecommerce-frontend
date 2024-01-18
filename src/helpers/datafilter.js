/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const filterData = (dataArray, filters) => {
  if (filters.length === 0) {
    return dataArray;
  } else {
    return dataArray.filter((item) => {
      return filters.every((filter) => {
        const [field, value] = Object.entries(filter)[0];
        console.log(Object.entries(filter));
        return item[field] === value;
      });
    });
  }
};
