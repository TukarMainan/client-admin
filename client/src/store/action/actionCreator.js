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
  console.log("payload :", payload);
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
      const res = await fetch(BASE_URL + "/posts?status_like=archive");

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

// fetch open reports
export const fetchReports = () => {
  return async dispatch => {
    try {
      const res = await fetch(
        BASE_URL + "/reports?status_like=open&_embed=posts"
      );

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      dispatch({
        type: "fetchReportSuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// archive post
export const updateStatusPost = id => {
  console.log("id :", id);
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + `/posts/${id}/suspend`, {
        //nanti tambah /admins sebelum register
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      if (!res.ok) throw await res.text();
      return { message: "Post has been archived" };
    } catch (err) {
      console.log(err);
    }
  };
};

// bann
export const banUser = id => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + `/user/${id}/suspend`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });

      if (!res.ok) throw await res.text();
      return { message: "Post has been archived" };
    } catch (err) {
      console.log(err);
    }
  };
};

// fetch all categories
export const fetchCategories = () => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/categories");

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      dispatch({
        type: "fetchCategorySuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// add category
export const addCategory = payload => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/categories", {
        //nanti tambah /admins sebelum register
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw await res.text();

      const response = await res.json();
      dispatch(fetchCategories());
    } catch (err) {
      console.log(err);
    }
  };
};

// fetch one category

export const fetchOneCategory = id => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/categories/" + id);

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      dispatch({
        type: "fetchOneCategorySuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// update category
export const updateCategory = (id, value) => {
  console.log("id, value :", id, value.name);
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + `/categories/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({
          name: value.name,
        }),
      });

      if (!res.ok) throw await res.text();
      console.log(res.text());
      return { message: "Category has been updated" };
    } catch (err) {
      console.log(err);
    }
  };
};

// fetch all logs
export const fetchLogs = () => {
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/logs");

      //   error handling
      if (!res.ok) {
        throw await res.text();
      }

      const response = await res.json();
      // console.log("response :", response);
      dispatch({
        type: "fetchLogSuccess",
        payload: response,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginAdmin = payload => {
  console.log("payload :", payload);
  return async dispatch => {
    try {
      const res = await fetch(BASE_URL + "/auth/admins/login", {
        // "/auth/admins/update-password"
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw await res.text();
      return { message: "Login Success" };
    } catch (err) {
      console.log(err);
      return { message: "Login Failed" };
    }
  };
};
