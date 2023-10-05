export type Request = {
  Route: string
  AccessToken?: string
  RefreshToken?: string
  RefreshFunc?: any
}

export interface DeleteRequest extends Request {
  Body: any
}

export interface GetRequest extends Request {
  ID?: string
}

export interface CreateRequest extends Request {
  Body: any
}

export interface DeleteRequest extends Request {
  ID?: string
}

export enum RequestType {
  CREATE,
  READALL,
  READONE,
  UPDATE,
  DELETE,
}
