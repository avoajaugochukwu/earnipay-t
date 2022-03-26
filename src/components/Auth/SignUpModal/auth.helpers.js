export const isFormValid = (validation) => {
  const check = Object.values(validation)
    .filter((i) => typeof i === "boolean")
    .every((val) => val === true);

  return check;
};

