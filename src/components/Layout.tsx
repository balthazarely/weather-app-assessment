interface iLayout {
  children: JSX.Element[];
}

export default function Layout({ children }: iLayout) {
  return (
    <div className="bg-gradient-to-tr from-sky-600  to-cyan-400 min-h-screen flex-col flex justify-center items-center relative overflow-x-hidden">
      {children}
    </div>
  );
}
