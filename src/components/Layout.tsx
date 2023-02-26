interface iLayout {
  children: JSX.Element[];
}

export default function Layout({ children }: iLayout) {
  return (
    <div className=" overflow-hidden bg-gradient-to-tr from-weatherBlue  to-weatherCyan min-h-screen flex-col flex p-2 justify-center items-center relative">
      {children}
    </div>
  );
}
