interface IOwnProps {
  children: React.ReactNode;
}

export const Container = ({ children }: IOwnProps) => {
  return <div className="app container mx-auto px-20">{children}</div>;
};
