const registerUser = (req, res) => {
  const { email, f_name, l_name, phone_number, image, password } = req.body;
  if (!email || !f_name || !l_name || !phone_number) {
    res.status(400);
    throw new Error("Please enter the relevant fields");
  }

  res.json({
    email,
    f_name,
    l_name,
    phone_number,
  });
};

module.exports = {
  registerUser,
};
