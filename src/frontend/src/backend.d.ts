import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Lead {
    country: string;
    createdAt: bigint;
    fullName: string;
    email: string;
    targetJobRole: string;
}
export enum LeadError {
    duplicateEmail = "duplicateEmail"
}
export interface backendInterface {
    createLead(fullName: string, email: string, country: string, targetJobRole: string): Promise<LeadError | null>;
    getAllLeads(): Promise<Array<Lead>>;
    getLead(email: string): Promise<Lead | null>;
    getLeadsCount(): Promise<bigint>;
}
