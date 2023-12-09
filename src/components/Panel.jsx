const Panel = ({ active, setActive }) => {
  // const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive();
  };
  return (
    <div className="justify-center m-4 p-4">
      <div className="p-2 m-2 cursor-pointer" onClick={handleClick}>
        panel 1
      </div>
      {active && <span>this is panel</span>}
    </div>
  );
};

export default Panel;
