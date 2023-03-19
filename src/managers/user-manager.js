import { login, logout, check, register } from "../api/authentication";
import { getUserMaps } from "../api/kareoke";
import { getUserInfo, saveUserInfo } from "../utility.js/storage";

export default function userFactory() {
  let userData = { isLogin: false };
  const getUserData = () => userData;
  const setUserData = (data) => {};
  const handleLogin = async (authData) => {
    const loginResponse = await login(authData);
    if (loginResponse.success) {
      userData = { ...loginResponse, isLogin: true };
      saveUserInfo(userData);
    }
    return loginResponse;
  };
  const handleRegister = async (data) => {
    const registerResponse = await register(data);

    return registerResponse;
  };
  const isLogin = async () => {
    const userInfo = getUserInfo();
    const response = await check(userInfo);
    if (response.ok) {
      const responseData = await response.json();
      userData = { ...responseData, isLogin: true };
      saveUserInfo(responseData);
    }
  };

  return {
    getUserData,
    setUserData,
    handleLogin,
    handleRegister,
    isLogin,
    logout,
  };
}
