export type ValueOf<T> = T[keyof T];
//------- userInfo --------//
export interface UserInfo {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  status?: string;
  fullName?: string;
  role?: string;
  image?: string;
  imageId?: number;
  permission: UserPermission[];
}

//------- Permission --------//
export interface UserPermission {
  id?: string;
  keyName: string;
  title_en?: string;
  title_th?: string;
  accessPermission: AccessPermissionType;
}

export type AccessPermissionType = {
  create: boolean;
  update: boolean;
  delete: boolean;
  viewers: boolean;
};
//------- Authentication --------//
export interface Authentication {
  auth: boolean;
  token: Token;
}
export interface Token {
  accessToken?: string | null;
  refreshToken?: string | null;
}
