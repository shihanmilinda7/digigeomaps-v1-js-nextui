"use client";

import React, { Suspense } from "react";
import { useRef } from "react";
import Spinner from "../spinner";
import { useSelector } from "react-redux";
import { CommodityMap } from "../maps/commodity-map";
import CommodityBottomSideNavbar from "../side-navbar/commodity-bottomsidenavbar-component";

export const CommodityMapWorkspan = () => {
  const isCommoditySideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isCommoditySideNavOpen
  );

  const viewRef = useRef(null);
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div
          className={`${
            isCommoditySideNavOpen ? "z-40" : "fixed top-15 left-0 z-40"
          }`}
        >
          <div className="mt-24">
            <CommodityBottomSideNavbar />
          </div>
        </div>
      </div>
      <div className="z-0">
        <Suspense fallback={<Spinner />}>
          <CommodityMap />
        </Suspense>
      </div>
    </div>
  );
};
