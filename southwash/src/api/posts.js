import api from "./api";

export const createPost = async (newPost) => {
    try {
      const response = await api.post("/posts", newPost);
      return response.data;
    } catch (err) {
      console.log(err.message);
    }
}

export const deletePost = async (id) => {
  try {
    await api.delete(`/posts/${id}`)
  } catch (err) {
    console.log(err.message)
  }
}

export const editPost = async (id, updatedPost) => {
  try {
    const response = await api.put(`/posts/${id}`, updatedPost);
    return response.data
  } catch (err) {
    console.log(err.message);
  }
}



/* #########################################  */

export const createBook = async (newBook) => {
  try {
    const response = await api.post("/booked", newBook);
    return response.data;
  } catch (err) {
    console.log(err.message);
  }
};