interface Props {
  children: JSX.Element | JSX.Element[] | string;
}

export function Layout({ children }: Props) {
  return (
    <div className="bg-neutral-900 h-screen">
      <div className="container mx-auto py-10">{children}</div>
    </div>
  );
}

