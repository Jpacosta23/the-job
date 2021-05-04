const API_URL_BASE = process.env.REACT_APP_API_BASE || "";

const loginAccount = async () => {};

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

const forgotPassword = async () => {};

const getEmails = async () => {
  try {
    const RES = await fetch(`${API_URL_BASE}/api/users`);
    const data = await RES.json();

    return data;
  } catch (err) {
    throw Error("something went wrong");
  }
};

export { loginAccount, registerAccount, forgotPassword, getEmails };
