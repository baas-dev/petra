export type Request = {
  Route: string
}

export interface GetRequest extends Request {
  ID?: string
}

export interface CreateRequest extends Request {
  Body: any
}

export enum RequestType {
  CREATE,
  READALL,
  READONE,
  UPDATE,
  DELETE,
}
