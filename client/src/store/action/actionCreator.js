const BASE_URL = "http://localhost:3000";

export const addAdmin = payload => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/register", {
        //nanti tambah /admins sebelum register
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw await res.text();
      return { message: "Admin has been added" };
    } catch (err) {
      console.log(err);
    }
  };
};

export const updatePassword = payload => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/auth/admins/update-password", {
        // "/auth/admins/update-password"
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw await res.text();
      return { message: "Password has been changed" };
    } catch (err) {
      console.log(err);
    }
  };
};

// fetching detail
export const fetchDetail = id => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/posts/" + id);

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      dispatch({
        type: "fetchDetailSuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// fetch archieved post

export const fetchArchieved = () => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/posts?status_like=archieved");

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      dispatch({
        type: "fetchArchievedSuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// fetch all posts

export const fetchPosts = () => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/posts");

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      dispatch({
        type: "fetchPostSuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
