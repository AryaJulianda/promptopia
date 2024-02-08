"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState([]);

  const name = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name}'s personalize profile page. Explore ${name}'s exceptional prompts and inspire others with the power of their imagination`}
      data={posts}
    />
  );
};

export default UserProfile;
