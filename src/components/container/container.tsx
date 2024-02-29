import clsx from "clsx";
interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx("p-6 bg-white h-full", className)}>{children}</div>
  );
};
export const ContainerBox = ({ children, className }: Props) => {
  return <div className={clsx("p-6 bg-gray-50", className)}>{children}</div>;
};
export const ContainerSection = ({ children }: Props) => {
  return <div style={{ borderBottom: "1px solid #eeeeee" }}>{children}</div>;
};
export default Container;
