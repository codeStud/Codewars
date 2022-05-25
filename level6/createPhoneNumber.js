// My Solution
function createPhoneNumber(numbers) {
  let phoneNumber = "(" + numbers.slice(0, 3).join("") + ") ";
  phoneNumber += numbers.slice(3, 6).join("") + "-";
  phoneNumber += numbers.slice(6).join("");
  return phoneNumber;
}
