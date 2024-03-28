import { IModel } from "@/types";
import Image from "next/image";

export default function TableUsers({
  users,
  config,
  activeColors = true,
}: {
  users: IModel.User[];
  config: IModel.UserInfo[];
  activeColors?: boolean;
}) {
  return (
    <>
      <thead className="align-bottom">
        <tr
          className={`transition-colors font-semibold text-[0.95rem] text-secondary-dark text-lg text-black ${
            activeColors ? "bg-neutral-400" : "bg-transparent"
          }`}
        >
          <th className="pb-3 text-start min-w-[175px] pl-3">Usuario</th>
          {config.map(
            ({ label, state }, index) =>
              state && (
                <th
                  key={label}
                  className={`${
                    index === config.length - 1 ? "pr-3" : "pr-0"
                  } p-3 text-end min-w-[100px]`}
                >
                  {label}
                </th>
              )
          )}
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={user.login?.uuid}
            className={`border-b-2 border-dashed last:border-b-0 transition-colors ${
              activeColors
                ? index % 2 === 0
                  ? "bg-neutral-200"
                  : "bg-neutral-200/70"
                : "bg-transparent"
            }`}
          >
            <td className="p-3 pl-3">
              <div className="flex items-center">
                <div className="relative inline-block shrink-0 rounded-2xl me-3">
                  <Image
                    width={500}
                    height={500}
                    src={String(user.picture?.large)}
                    className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                    alt=""
                  />
                </div>
              </div>
            </td>
            {config.map(
              ({ keyRef, keyObj, state }, index) =>
                state && (
                  <td
                    key={index}
                    className={`${
                      index === config.length - 1 ? "pr-3" : "pr-0"
                    } p-3  text-end text-sm text-gray-500`}
                  >
                    <span className="font-semibold text-light-inverse text-md/normal">
                      <span>
                        {typeof user[keyRef] === "object" && keyObj
                          ? (user[keyRef] as { [key: string]: any })[keyObj]
                          : user[keyRef]}
                      </span>
                    </span>
                  </td>
                )
            )}
          </tr>
        ))}
      </tbody>
    </>
  );
}
