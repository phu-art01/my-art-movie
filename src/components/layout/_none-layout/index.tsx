import { Outlet } from "react-router-dom";

const NoLayout = () => {
  return (
    <div>
      NoLayout <Outlet />
    </div>
  );
};

export default NoLayout;
