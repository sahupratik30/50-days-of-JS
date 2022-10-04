// Write a function to remove array element based on object property

const array = [
  { field: "id", operator: "eq" },
  { field: "cStatus", operator: "eq" },
  { field: "money", operator: "eq" },
];

const filterField = "money";

function removeArrayElement(filterField) {
  let result = array.filter((val) => {
    return val.field !== filterField;
  });
  return result;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`);
