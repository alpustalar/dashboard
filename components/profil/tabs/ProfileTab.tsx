import { User } from "@/types/domain/user";

type Props = {
  user: User | false;
};

const ProfileTab = ({ user }: Props) => {
  console.log("(ProfileTab.tsx:5) userData", user);
  return <></>;
};

export default ProfileTab;
