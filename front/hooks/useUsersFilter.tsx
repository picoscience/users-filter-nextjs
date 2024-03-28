import { useEffect, useState } from "react";
import { User } from "@/types/models";
import { IModel } from "@/types";

export default function useUsersFilter(users: IModel.User[] | undefined) {
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(false);
  const [color, setColors] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState<IModel.User[] | undefined>(
    undefined
  );
  const config: IModel.UserInfo[] = [
    {
      state: true,
      label: "Nombre",
      keyRef: "name",
      keyObj: "first",
    },
    {
      state: true,
      label: "Apellido",
      keyRef: "name",
      keyObj: "last",
    },
    {
      state: true,
      label: "Celular",
      keyRef: "phone",
    },
    {
      state: true,
      label: "País",
      keyRef: "location",
      keyObj: "country",
    },
    {
      state: true,
      label: "Edad",
      keyRef: "dob",
      keyObj: "age",
    },
  ];
  const sortByComparator = (a: User, b: User) => {
    if (a.location && b.location) {
      return a.location.country.localeCompare(b.location.country);
    } else {
      return NaN;
    }
  };
  const handleColors = () => {
    setColors(!color);
  };
  const handleOrder = () => {
    setOrder(!order);
  };
  const handleReset = () => {
    setColors(false);
    setOrder(false);
    setSearch("");
  };
  const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  useEffect(() => {
    if (users) {
      const filtered = users.filter((user) =>
        user.location?.country.toLowerCase().includes(search.toLowerCase())
      );
      if (order) {
        setFilteredUsers(filtered.sort(sortByComparator));
      } else {
        setFilteredUsers(filtered);
      }
    }
  }, [search, users, order]);

  return {
    handleChangeSearch,
    handleColors,
    handleOrder,
    handleReset,
    filteredUsers,
    config,
    color,
    search,
  };
}
