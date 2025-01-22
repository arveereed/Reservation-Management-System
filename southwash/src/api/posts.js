import api from "./api";

export const createPost = async (newPost) => {
    try {
      const response = await api.post("/posts", newPost);
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