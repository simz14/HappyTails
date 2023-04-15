const useValidationMessage = () => {
  const required = {
    firstName: "First name is required!",
    lastName: "Last name is required!",
    email: "Email is required!",
    subject: "Subject is required!",
    message: "Message is required!",
    phoneNumber: "Phone number is required!",
    age: "Age is required!",
    date: "Date is required!",
    reason: "Reason is required!",
    cardNumber: "Card number is required!",
    expirationDate: "Expiration date is required!",
    cvv: "CVV is required!",
  };

  const valid = {
    firstName: "First name is not valid!",
    lastName: "Last name is not valid!",
    email: "Email is not valid!",
    subject: "Subject is not valid!",
    message: "Message is not valid!",
    phoneNumber: "Phone number is not valid!",
    age: "Age is not valid!",
    date: "Date is not valid!",
    reason: "Reason is not valid!",
    cardNumber: "Card number is not valid!",
    expirationDate: "Expiration date is not valid!",
    cvv: "CVV is not valid!",
  };

  return { required, valid };
};

export default useValidationMessage;
