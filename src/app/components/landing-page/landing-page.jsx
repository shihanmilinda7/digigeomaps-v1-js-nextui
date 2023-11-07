"use client";

import { useDispatch, useSelector } from "react-redux";
import { WorkspanSelector } from "../map-workspans/workspan-selector";
import TopSideNavbar from "../side-navbar/topsidenavbar-component";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  setAreaInitialCenter,
  setAreaLyrs,
  setAreaZoomLevel,
  setCommodityInitialCenter,
  setCommodityLyrs,
  setCommodityZoomLevel,
  setCompanyInitialCenter,
  setCompanyLyrs,
  setCompanyZoomLevel,
  setCurrentSearchString,
  setIsAreaSideNavOpen,
  setIsCommoditySideNavOpen,
  setIsCompanySideNavOpen,
  setSelectedMap,
} from "@/store/map-selector/map-selector-slice";

export const LandingPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const mapType = searchParams.get("t");
  const isSideNavOpen = searchParams.get("sn");
  const mapLyrs = searchParams.get("lyrs");
  const mapZoom = searchParams.get("z");
  const mapCenter = searchParams.get("c");

  const currentSearchString = useSelector(
    (state) => state.mapSelectorReducer.currentSearchString
  );

  useEffect(() => {
    updateRedux();
  }, []);

  useEffect(() => {
    router.push(currentSearchString, undefined, { shallow: true });
    // router.push(currentSearchString);
  }, [currentSearchString]);

  const updateRedux = async () => {
    // console.log("call 1");
    //TODO>>>>>>>>>>>>>>>>>>> handle if useSearchParam Accidantally change
    if (mapType) {
      dispatch(setSelectedMap(mapType));
      switch (mapType) {
        case "area":
          dispatch(
            setIsAreaSideNavOpen(String(isSideNavOpen).toLowerCase() === "true")
          );
          dispatch(setAreaLyrs(mapLyrs));
          dispatch(setAreaZoomLevel(mapZoom));
          dispatch(setAreaInitialCenter(mapCenter));

          break;
        case "company":
          dispatch(
            setIsCompanySideNavOpen(
              String(isSideNavOpen).toLowerCase() === "true"
            )
          );
          dispatch(setCompanyLyrs(mapLyrs));
          dispatch(setCompanyZoomLevel(mapZoom));
          dispatch(setCompanyInitialCenter(mapCenter));

          break;
        case "commodity":
          dispatch(
            setIsCommoditySideNavOpen(
              String(isSideNavOpen).toLowerCase() === "true"
            )
          );
          dispatch(setCommodityLyrs(mapLyrs));
          dispatch(setCommodityZoomLevel(mapZoom));
          dispatch(setCommodityInitialCenter(mapCenter));

          break;

        default:
          break;
      }
    } else {
      // console.log("currentSearchString", currentSearchString);
      dispatch(setCurrentSearchString());
    }
  };

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
