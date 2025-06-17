function minDate(dates) {
  if (dates.length === 0) return null; // Edge case: empty array

  // Use spread operator to avoid modifying the original array
  return [...dates].reduce((min, curr) => {
    return new Date(curr) < new Date(min) ? curr : min;
  });
}

// Example usage:
const sampleDates = ["2023/01/01", "2023/02/02", "2022/12/31"];
console.log(minDate(sampleDates)); // Output: "2022/12/31"
