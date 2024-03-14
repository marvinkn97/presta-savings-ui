export interface Customer {
  memberNumber: string;
  name: string;
  email: string;
  mobile?: string;
  governmentId?: Number;
  createdDate: Number;
  updatedDate?: Number;
  profileImageId?: string;
  accounts?: [];
}
