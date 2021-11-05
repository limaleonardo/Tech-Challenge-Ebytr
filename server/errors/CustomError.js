class CustomError extends Error {
  constructor(message = '', status = 0) {
    super(message, status);
    this.name = status;
    this.message = message;
  }
}

export default CustomError;