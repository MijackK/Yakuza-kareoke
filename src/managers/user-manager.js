import { login, logout, check, register } from "../api/authentication";
import { getUserInfo, saveUserInfo } from "../utility.js/storage";

export default function userFactory() {
  let userData = { isLogin: false };
  const getUserData = () => userData;
  const handleLogin = async (authData) => {
    const loginResponse = await login(authData);
    userData = { ...loginResponse, isLogin: true };
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
    if (response.ok) {
      const responseData = await response.json();
      userData = { ...responseData, isLogin: true };
      saveUserInfo(responseData);
    }
  };
  const handleLogout = async () => {
    const userInfo = getUserInfo();
    const logoutResponse = await logout(userInfo);
    return logoutResponse;
  };

  return {
    getUserData,
    handleLogin,
    handleRegister,
    isLogin,
    handleLogout,
  };
}
