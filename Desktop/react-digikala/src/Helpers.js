export function partition(number) {
  if (typeof number !== "number" && typeof number(number) !== "number") {
    return "not a number";
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
