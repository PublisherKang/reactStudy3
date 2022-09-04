import React from "react";

const profileData = {
  first: {
    name: "홍길동",
    description: "프론트엔드 리액트 개발자",
  },
  second: {
    name: "김영희",
    description: "창조적인 디자이너",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>
        {username} ({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
