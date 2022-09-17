import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getPosts } from "../modules/posts";
// import PostList from "../components/PostList";
import Post from "../components/Post";

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <Post post={data} />;
};

export default PostListContainer;
