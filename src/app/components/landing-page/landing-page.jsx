import { WorkspanSelector } from "../map-workspans/workspan-selector";
import TopSideNavbar from "../side-navbar/topsidenavbar-component";

export const LandingPage = () => {
  return (
    <div className="w-full flex">
      <div className="z-50 fixed top-15 left-0">
        <TopSideNavbar />
      </div>
      <div className="">
        <WorkspanSelector />
      </div>
    </div>
  );
};
