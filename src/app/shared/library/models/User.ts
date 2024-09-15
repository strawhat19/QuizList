export default class User {
  [key: string]: any;
  constructor(userObj: {
    // Required
    ID: string,
    id: string,
    uid: string,
    type: string,
    uuid: string,
    name: string,
    created: any,
    updated: any,
    email: string,
    lastSignIn: any,
    validSince: any,
    lastRefresh: any,
    lastUpdated: any,
    providerId: string,
    playerLink: boolean,
    operationType: string,
    emailVerified: boolean,
    // Optional
    auth?: any,
    roles?: any[],
    image?: string,
    source?: string,
    active?: boolean,
    password?: string,
    firebaseUser?: any,
    properties?: number,
    uniqueIndex: number,
    playerUUID?: string,
    userCredential?: any,
    passwordUpdatedAt?: any,
  }) {
    Object.assign(this, userObj);
  }
}