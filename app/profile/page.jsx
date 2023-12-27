"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Profile from "@components/profile";

const MyProfile = () => {
    const { data: session } = useSession();

    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(
                `/api/users/${session?.user.id}/posts`
            );
            const data = await response.json();

            setMyPosts(data);
        };
        if (session?.user.id) fetchPosts();
    }, []);

    const handleEdit = () => {};
    const handleDelete = () => {};

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
            data={myPosts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default MyProfile;
