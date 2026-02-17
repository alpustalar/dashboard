"use client";
import { TabPanel } from "@mui/lab";
import ProfileTab from "@/components/profil/tabs/ProfileTab";
import ProfileUpdateTab from "@/components/profil/tabs/ProfileUpdateTab";
import UserLogoutTab from "@/components/profil/tabs/user-logout/UserLogoutTab";
import Shadow from "@/components/_ui/Shadow";
import { User } from "@/types";

interface ProfileTabsPropTypes {
  user: User | false;
}

const ProfileTabs = ({ user }: ProfileTabsPropTypes) => {
  return (
    <>
      <TabPanel value={"1"}>
        <Shadow sx={{ mx: -3 }}>
          <ProfileTab user={user} />
        </Shadow>
      </TabPanel>
      <TabPanel value={"2"}>
        <Shadow sx={{ mx: -3 }}>
          <ProfileUpdateTab user={user} />
        </Shadow>
      </TabPanel>
      <TabPanel value={"3"}>
        <Shadow sx={{ mx: -3 }}>
          <UserLogoutTab />
        </Shadow>
      </TabPanel>
    </>
  );
};

export default ProfileTabs;
