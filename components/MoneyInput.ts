export default function MoneyInput(input: string): string {
  if (!input) {
    input = "0"
  }
  // Remove any commas from the input string
  const sanitizedInput = input.replace(/,/g, "")

  // Try to parse the sanitized input string into a number
  const parsedNumber = parseFloat(sanitizedInput)

  // Check if the parsed value is a number
  if (isNaN(parsedNumber)) {
    return "0"
  }

  // Format the number with commas as thousands separators and up to two decimal places
  return parsedNumber.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
}

// // Example usage
// try {
//   const input = "1234567.8910"
//   const formattedNumber = MoneyInput(input)
//   console.log(`Formatted number: ${formattedNumber}`) // Output: "1,234,567.89"
// } catch (error) {
//   console.error(error.message)
// }
