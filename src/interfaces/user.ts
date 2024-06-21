import City from "./city";

export default interface User {
  id: string;
  email : string;
  name : string;
  createdAt : string;
  profilePicture : string;
  unit : string;
  cities : City[] | null;
}