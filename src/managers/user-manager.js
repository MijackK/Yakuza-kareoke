import {
  login,
  logout,
  check,
  register,
  changePassword,
  editAccountInfo,
  generateEmailVerifyToken,
} from "../api/authentication";
import { getUserInfo, saveUserInfo } from "../utility.js/storage";

export default function userFactory() {
  let userData = { isLogin: false };
  const getUserData = () => userData;
  const setUserData = (property, value) => {
    userData[property] = value;
  };
  const handleLogin = async (authData) => {
    const loginResponse = await login(authData);
    userData = { ...loginResponse, isLogin: true };
    sessionStorage.setItem("csrfToken", userData.csrfToken);
    saveUserInfo(userData);
  };
  const handleRegister = async (data) => {
    const registerResponse = await register(data);

    return registerResponse;
  };
  const isLogin = async () => {
    const userInfo = getUserInfo();
    if (!userInfo) {
      return;
    }

    const response = await check(userInfo);
    const responseData = await response.json();
    userData = { ...responseData, isLogin: true };
    sessionStorage.setItem("csrfToken", userData.csrfToken);
    saveUserInfo(responseData);
  };
  const handleLogout = async () => {
    const userInfo = getUserInfo();
    const logoutResponse = await logout(userInfo);
    return logoutResponse;
  };
  const handlePasswordChange = async (currentPassword, newPassword) => {
    const response = await changePassword(
      userData.email,
      currentPassword,
      newPassword
    );
    return response;
  };

  const handleEditAccount = async (password, column, value) => {
    const response = await editAccountInfo(
      password,
      userData.email,
      column,
      value
    );
    return response;
  };
  const handleEmailVerifyGeneration = async () => {
    const response = await generateEmailVerifyToken();
    return response;
  };

  return {
    getUserData,
    setUserData,
    handleLogin,
    handleRegister,
    isLogin,
    handleLogout,
    handlePasswordChange,
    handleEditAccount,
    handleEmailVerifyGeneration,
  };
}
