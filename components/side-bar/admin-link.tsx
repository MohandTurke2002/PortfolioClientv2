import { User } from "@nextui-org/react";

const AdminLink = () => {
  return (
    <User
      className="w-full justify-start px-3"
      name="Muhannad Hany"
      description="Full Stack Developer"
      avatarProps={{
        src: "/my-image.jpg",
      }}
    />
  );
};

export default AdminLink;
