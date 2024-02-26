export interface Customer {
  memberNumber: string;
  name: string;
  email: string;
  mobile?: string;
  governmentId?: string;
  createdDate: Date;
  updatedDate?: Date;
  profileImage?: string;
}
