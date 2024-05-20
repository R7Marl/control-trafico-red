export const checkLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).send("Faltan datos");
  next();
};

export const checkRegister = (req, res, next) => {
  const { name, email, password, sexo, age } = req.body;
  if (!name || !email || !password || !sexo || !age) return res.status(400).send("Faltan datos");
  next();
};
