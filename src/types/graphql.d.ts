export const typeDefs = ["type SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype Query {\n  sayHello(name: String!): SayHelloResponse!\n}\n\ntype AddInquireResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  AddInquire(companyName: String!, firstName: String!, lastName: String!, email: String!, phoneNumber: String!, budget: String!, content: String): AddInquireResponse!\n}\n\ntype Inquire {\n  id: Int!\n  companyName: String!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  email: String!\n  # verifiedEmail: Boolean!\n  phoneNumber: String!\n  # verifiedPhoneNumber: Boolean!\n  budget: String!\n  content: String\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  sayHello: SayHelloResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface Mutation {
  AddInquire: AddInquireResponse;
}

export interface AddInquireMutationArgs {
  companyName: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  budget: string;
  content: string | null;
}

export interface AddInquireResponse {
  ok: boolean;
  error: string | null;
}

export interface Inquire {
  id: number;
  companyName: string;
  firstName: string;
  lastName: string;
  fullName: string | null;
  email: string;
  phoneNumber: string;
  budget: string;
  content: string | null;
  createdAt: string;
  updatedAt: string | null;
}
