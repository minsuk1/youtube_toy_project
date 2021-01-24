export const join = (req, res) => res.render("Join", {pageTitle:"join"});
export const login = (req, res) => res.render("login", {pageTitle:"log in"});
export const logout = (req, res) => res.send("Logout");
export const users = (req, res) => res.send("Users");
export const userDetail = (req, res) => res.send("User Detail");
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.send("Change Password");
