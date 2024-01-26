type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-white flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      {children}
    </div>
  );
}
