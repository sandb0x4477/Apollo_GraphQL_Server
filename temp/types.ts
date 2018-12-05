export enum CacheControlScope {
  Public = "PUBLIC",
  Private = "PRIVATE"
}

/** A date string, such as 2007-12-03, compliant with the `full-date` formatoutlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard forrepresentation of dates and times using the Gregorian calendar. */
export type Date = any;

export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  _?: boolean | null;

  customers?: Customer[] | null;

  customer?: Customer | null;

  bicycles?: Bicycle[] | null;

  bicycle?: Bicycle | null;

  rentals?: Rental[] | null;

  rental?: Rental | null;

  users?: User[] | null;

  user: User;
}

export interface Customer {
  id: string;

  customerName: string;
}

export interface Bicycle {
  id: string;

  bicycleModel: string;

  bicycleRate: number;
}

export interface Rental {
  id: string;

  startDate: Date;

  endDate: Date;

  rentalFee: number;

  bicycle: Bicycle;

  customer: Customer;
}

export interface User {
  id: string;

  username: string;

  email: string;
}

export interface Mutation {
  _?: boolean | null;

  createCustomer: Customer;

  deleteCustomer: boolean;

  updateCustomer: Customer;

  createBicycle: Bicycle;

  deleteBicycle: boolean;

  updateBicycle: Bicycle;

  createRental: Rental;

  register: User;

  login: Token;
}

export interface Token {
  token: string;
}

export interface Subscription {
  _?: boolean | null;
}

// ====================================================
// Arguments
// ====================================================

export interface CustomerQueryArgs {
  id: string;
}
export interface BicycleQueryArgs {
  id: string;
}
export interface RentalQueryArgs {
  id: string;
}
export interface UserQueryArgs {
  id: string;
}
export interface CreateCustomerMutationArgs {
  customerName: string;
}
export interface DeleteCustomerMutationArgs {
  id: string;
}
export interface UpdateCustomerMutationArgs {
  id: string;

  customerName?: string | null;
}
export interface CreateBicycleMutationArgs {
  bicycleModel: string;

  bicycleRate: number;
}
export interface DeleteBicycleMutationArgs {
  id: string;
}
export interface UpdateBicycleMutationArgs {
  id: string;

  bicycleModel?: string | null;

  bicycleRate?: number | null;
}
export interface CreateRentalMutationArgs {
  startDate: Date;

  endDate: Date;

  rentalFee: number;

  bicycleId?: string | null;

  customerId?: string | null;
}
export interface RegisterMutationArgs {
  username: string;

  email: string;

  password: string;
}
export interface LoginMutationArgs {
  email: string;

  password: string;
}
