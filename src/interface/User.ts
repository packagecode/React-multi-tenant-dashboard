import Territory from "./Territory";
import Role from "./Role";

export default interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  phone: string;
  address: string;
  gender: string;
  territory_id: number;
  created_at: string;
  updated_at: string;
  territory : Territory | null,
  roles: Role | null,
  device_id: string | null,
  permission: Array<string> | null,
  managed_territory: number|null;
}
