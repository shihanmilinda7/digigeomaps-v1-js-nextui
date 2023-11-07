"use client";

import React, { Suspense } from "react";
import { useRef } from "react";
import AreaBottomSideNavbar from "../side-navbar/area-bottomsidenavbar-component";
import Spinner from "../spinner";
import { useSelector } from "react-redux";
import { AreaMap } from "../maps/area-map";

export const AreaMapWorkspan = () => {
  const isAreaSideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isAreaSideNavOpen
  );
  // console.log("call 3");

  const viewRef = useRef(null);
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div
          className={`${
            isAreaSideNavOpen ? "z-40" : "fixed top-15 left-0 z-40"
          }`}
        >
          <div className="mt-24">
            <AreaBottomSideNavbar />
          </div>
        </div>
      </div>
      <div className="z-0">
        <Suspense fallback={<Spinner />}>
          <AreaMap />
        </Suspense>
      </div>
    </div>
  );
};
