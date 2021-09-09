export const emailValidation = (value) => {
  if (value.trim() === '') {
    return 'The email is required!';
  }

  return null;
};

export const passwordValidation = (value) => {
  if (value.trim() === '') {
    return 'The password is required!';
  }

  return null;
};

export const confirmPasswordValidation = (value) => {
  if (value.trim() === '') {
    return 'Password confirmation is required!';
  }

  return null;
};

export const nameValidation = (value) => {
  if (value.trim() === '') {
    return 'The name is required!';
  }

  return null;
};

export const lastNameValidation = (value) => {
  if (value.trim() === '') {
    return 'The last name is required!';
  }

  return null;
};
