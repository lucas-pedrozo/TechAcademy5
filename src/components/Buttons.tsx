import "./Buttons.css";

type btnProps = {
  onClick: () => void;
};

function Buttons({ children, onClick }: React.PropsWithChildren<btnProps>) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttons;
