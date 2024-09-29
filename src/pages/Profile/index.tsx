import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { handleVerify } from "../../lib/api";
import { IWideUser } from "../../lib/types";

export const Profile = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState<IWideUser | null>(null);

  useEffect(() => {
    handleVerify()
    .then((response) => {
      if (!response.user) {
        navigate("/login");
      } else {
        setAccount(response.user);
      }
    });
  }, []);

  return account && (
    <>
      <nav>
        <NavLink to="/profile" end>Profile</NavLink>
        <NavLink to="/profile/settings">Settings</NavLink>
        <NavLink to="/profile/search">Search</NavLink>
        <NavLink to="/profile/posts">Posts</NavLink>
        <NavLink to="/profile/followers">Followers</NavLink>
        <NavLink to="/profile/followings">Followings</NavLink>
        <button>Logout</button>
      </nav>
      <Outlet context={{ account, setAccount }} />
    </>
  );
};
