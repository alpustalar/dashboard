export interface User {
  _id: string;
  accountStatus: string;
  email: string;
  firstName: string;
  googleId: null | string;
  isVerified: boolean;
  lastName: string;
  role: string;
  successAppointments: string[];
  username: string;
  createdAt: string | Date;
  updatedAt: string | Date;
}
