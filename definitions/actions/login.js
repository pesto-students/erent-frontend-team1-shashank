import MakeAPICall from "@lib/apiCall";

export const loginWithGoogle = async (idToken) => {
    const payload = {};
    const headers = {
        Authorization: "Bearer " + idToken,
    };
    const apiCall = new MakeAPICall("/v1/auth/login", payload, headers);

    try {
        const response = await apiCall.post();
        if (window) {
            window.localStorage.setItem("token", response.data.token);
        }
        return response.data;
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
};

export const guestLogin = () => {};
