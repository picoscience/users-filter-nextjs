import { Gender, Title } from "../emuns";

export interface Welcome {
  results: User[];
  info: Info;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface UserInfo {
  state?: boolean;
  label: string;
  keyRef: keyof User;
  keyObj?: keyof Picture | keyof Name | keyof Location | keyof Dob;
}

export interface User {
  gender?: Gender;
  name?: Name;
  location?: Location;
  email?: string;
  login?: Login;
  dob?: Dob;
  registered?: Dob;
  phone?: string;
  cell?: string;
  id?: ID;
  picture?: Picture;
  nat?: string;
}

export interface Dob {
  date: Date;
  age: number;
}

export interface ID {
  name: string;
  value: null | string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Name {
  title: Title;
  first: string;
  last: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}
