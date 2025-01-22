import { createContext,  useEffect,  useState } from "react";
import axios from 'axios';
import useAxiosFetch from '../hooks/useAxiosFetch'
import { deletePost } from "../api/posts";
export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:3500/posts");

  const adminAcc = { username: 'admin', password: 'admin' }
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
  
  const [posts, setPosts] = useState([]);
  const [booked, setBooked] = useState()
  
  const getBooked = async () => {
    const response = await axios.get('http://localhost:3500/booked')
    setBooked(response.data)
  }

  useEffect(() => {
    getBooked()
  }, [])
  

  useEffect(() => {
    if (data) {
      setPosts(data);
    }
  }, [data]);

  const setToken = (token) => {
    _setToken(token)

    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    }
  }

  const handleDelete = (id) => {
    deletePost(id)
    setPosts(posts.filter((post) => post.id !== id))
  }


  return (
    <AppContext.Provider value={{
      token,
      setToken,
      adminAcc,
      posts,
      setPosts,
      isLoading,
      handleDelete,
      booked, setBooked
    }}>
      {children}
    </AppContext.Provider>
  )
}