import { useEffect, useState } from "react";

const Timer = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //   setValue(value + 1);
      setValue((currentValue) => currentValue + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <span className="bg-red-200 p-3 font-semibold">{value}</span>
    </>
  );
};

export default Timer;
