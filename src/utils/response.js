const successResponse = (data, message = "Success") => ({
  success: true,
  message,
  data,
});

const errorResponse = (message = "Error") => ({
  success: false,
  message,
});

module.exports = {
  successResponse,
  errorResponse,
};