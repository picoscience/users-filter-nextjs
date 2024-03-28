export default function TableLayout({
  children,
  search,
  onColorsClick,
  onOrderClick,
  onRestartClick,
  onChangeSearch,
}: {
  children: React.ReactNode;
  search: string;
  onColorsClick?: () => void | undefined;
  onOrderClick?: () => void | undefined;
  onRestartClick?: () => void | undefined;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-wrap -mx-3 mb-5">
      <div className="w-full max-w-full px-3 mb-6  mx-auto">
        <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
          <div className="relative flex flex-col min-w-0 break-words  rounded-2xl  bg-light/30">
            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
              <h3 className="flex flex-col mr-3 items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark ">
                <span className="mr-3 font-semibold text-dark">
                  Filtrado de usuarios
                </span>
                <span className="mt-1 font-medium text-secondary-dark text-lg/normal">
                  Nextjs 14 and react app
                </span>
              </h3>
              <div className="flex-1 flex flex-wrap justify-center items-center gap-12 my-3">
                <div className="flex-1 flex flex-wrap gap-6 justify-center items-center">
                  <button
                    onClick={onColorsClick}
                    className="transition-colors text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-0 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Colores filas
                  </button>
                  <button
                    onClick={onOrderClick}
                    className="transition-colors text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-0 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Ordena por país
                  </button>
                  <button
                    onClick={onRestartClick}
                    className="transition-colors text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-0 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                  >
                    Restaura estado inicial
                  </button>
                </div>
                <input
                  className="outline-none ring-0 border-solid border  border-black px-3 py-1 rounded"
                  placeholder="Filtrar por país"
                  onChange={onChangeSearch}
                  value={search ? search : ""}
                  type="text"
                />
              </div>
            </div>
            <div className="flex-auto block py-8 pt-6 px-9">
              <div className="overflow-x-auto">
                <table className="w-full my-0 align-middle text-dark rounded-xl">
                  {children}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
