const API_URL_BASE = process.env.REACT_APP_API_URL || "";

const loginAccount = () => {};

const registerAccount = async (user) => {
  try {
    const payload = {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${API_URL_BASE}/api/users`, payload);
    const newUser = await response.json();

    return newUser;
  } catch (err) {
    throw Error("OHHPS");
  }
};

const forgotPassword = () => {};

export { loginAccount, registerAccount, forgotPassword };
