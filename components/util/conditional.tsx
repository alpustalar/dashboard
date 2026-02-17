type Props = {
  show: boolean;
  children: Readonly<React.ReactNode>;
};

const Conditional = ({ show, children }: Props) => {
  return show ? <>{children}</> : null;
};
export default Conditional;
