function validate(password) {
  return /[a-zA-Z]+[0-9]{6}|[0-9][a-zA-Z]/.test(password);
  }
