import React from "react";
import { generateAvatar } from "ui-avatars";
import "../styles/components/Avatar.scss";

const Avatar = ({ name }) => {
  const avatarUrl = generateAvatar({
    uppercase: true,
    name: name,
    background: "231d83",
    color: "FFFFFF",
    fontsize: 0.5,
    bold: true,
    length: 2,
    rounded: true,
  });
  return (
    <picture className="Avatar">
      <img src={avatarUrl} alt="" />
    </picture>
  );
};

export default Avatar;
