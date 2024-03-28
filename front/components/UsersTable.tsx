import TableLayout from "./layouts/TableLayout";
import TableUsers from "./atoms/TableUsers";
import { IModel } from "@/types";
import useUsersFilter from "@/hooks/useUsersFilter";

export default function UsersTable({
  users,
}: {
  users: IModel.User[] | undefined;
}) {
  const {
    handleChangeSearch,
    handleColors,
    handleOrder,
    handleReset,
    filteredUsers,
    config,
    color,
    search,
  } = useUsersFilter(users);
  return (
    <TableLayout
      search={search}
      onChangeSearch={handleChangeSearch}
      onColorsClick={handleColors}
      onOrderClick={handleOrder}
      onRestartClick={handleReset}
    >
      {filteredUsers && (
        <TableUsers
          users={filteredUsers}
          config={config}
          activeColors={color}
        />
      )}
    </TableLayout>
  );
}
