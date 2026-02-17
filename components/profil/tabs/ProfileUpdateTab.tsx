import { User } from "@/types/domain/user";

type Props = {
  user: User | false;
};

const ProfileUpdateTab = ({ user }: Props) => {
  console.log("(ProfileUpdateTab.tsx:4) userData", user);
  return <></>;
};

export default ProfileUpdateTab;
