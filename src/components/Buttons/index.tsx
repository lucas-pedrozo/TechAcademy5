import "./index.css";

type btnProps = {
  onClick: () => void;
};

export default function Buttons({
  children,
  onClick,
}: React.PropsWithChildren<btnProps>) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}
