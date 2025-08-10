import { Express } from "express";
import infoApi from "./info/info.api";

export default function api(app: Express): void {
  infoApi(app);
}
