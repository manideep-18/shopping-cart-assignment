export function validatePassword(value) {
  if (!/^\S*$/.test(value)) return "Cannot have spaces";
  if (value.length < 6) return "Minimum length 6 characters";
  if (
    !/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9!~@#$%^&*+=`|{}:;!.?\"()\[\]-]+)$/.test(
      value
    )
  ) {
    return "Must have a number and alphabet";
  }
}
