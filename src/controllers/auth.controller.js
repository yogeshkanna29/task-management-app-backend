const authService = require("../services/auth.service");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  try {
    const data = await authService.registerUser(req.body);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: `User registered successfully`,
      data,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const data = await authService.loginUser(req.body);

    res.status(StatusCodes.OK).json({
      success: true,
      message: "Login successful",
      data,
    });
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: error.message,
    });
  }
};

const profile = async (req, res) => {
  res.status(StatusCodes.OK).json({
    success: true,
    data: req.user,
  });
};

module.exports = {
  register,
  login,
  profile,
};
