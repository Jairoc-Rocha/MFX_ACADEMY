const OnlineOffline = ({ isOnline = true }) => {
  const styles = isOnline ? "bg-green-300" : "bg-red-500";
  return (
    <>
      <span className={`${styles} p-2`}>{isOnline ? "Online" : "Offline"}</span>
    </>
  );
};

export default OnlineOffline;
