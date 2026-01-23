import jwt from "jsonwebtoken";

function registerAuth(req, res, next) {
  // 1️⃣ Get Authorization header
  const authHeader = req.headers.authorization;

  // 2️⃣ Check if header exists and is in correct format
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access denied, token missing" });
  }

  // 3️⃣ Extract the token
  const token = authHeader.split(" ")[1];

  try {
    // 4️⃣ Verify token using secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5️⃣ Save decoded data on request
    req.user = decoded; // { id, role }

    // 6️⃣ Move to next middleware / controller
    next();
  } catch (error) {
    // 7️⃣ Token is invalid or expired
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

export default registerAuth;
