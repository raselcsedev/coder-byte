import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


const User = () => {
    const [user] = useAuthState(auth);
    const email = user?.email

    return email
};

export default User;

