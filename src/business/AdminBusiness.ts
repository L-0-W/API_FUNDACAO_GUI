import { AdminData } from "../data/AdminData";
import { ResponseBuilder } from "../ResponseBuilder";

import jwt from "jsonwebtoken";
import argon2 from "argon2";

export class AdminBusiness {
  private adminData = new AdminData();

  deletarExamePorId = (id: number, token: string) => {
    try {
    } catch (err: any) {
      throw new Error(err);
    }
  };
}
