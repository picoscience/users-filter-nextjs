import { IModel } from "@/types";
import { useEffect, useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState<IModel.User[]>();
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then(async (res) => await res.json())
      .then((data) => {
        setUsers(data.results);
      })
      .catch((error) =>
        console.log("Hubo un problema con la petición Fetch:" + error.message)
      );
  }, []);
  return { users };
}
