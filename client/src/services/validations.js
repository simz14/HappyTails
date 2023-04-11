export const validateAdoptionData = ({
  firstName,
  lastName,
  age,
  email,
  phone,
  date,
  reason,
}) => {
  if (!firstName || !lastName || !age || !email || !phone || !date || !reason) {
    console.log(firstName);
    throw new Error("All fields are required");
  } else {
    return true;
  }
};
