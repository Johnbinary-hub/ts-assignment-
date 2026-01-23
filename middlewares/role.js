// role.js

// Allowed roles is an array of roles that can access a route
function authorizeRoles(...allowedRoles) {
  return (req, res, next) => {
    // Make sure req.user exists from registerAuth
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: "Access denied, role not found" });
    }

    // Check if user's role is in allowedRoles
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied, insufficient permissions" });
    }

    // User has proper role, continue
    next();
  };
}

export default authorizeRoles;
