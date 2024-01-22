/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
export const filterData = (dataArray, filters) => {
  if (filters.length === 0) {
    return dataArray;
  } else {
    return dataArray.filter((item) => {
      return filters.every((filter) => {
        const { field, value, operator } = filter;

        return operator(item[field], value);
      });
    });
  }
};
