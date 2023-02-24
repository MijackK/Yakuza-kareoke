import { login, logout, check } from "../api/authentication";
import { getUserInfo, saveUserInfo } from "../utility.js/storage";

function userManager() {
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
    isLogin,
    logout,
  };
}

const user = userManager();

export default user;
