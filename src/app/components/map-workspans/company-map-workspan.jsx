"use client";

import React, { Suspense } from "react";
import { useRef } from "react";
import Spinner from "../spinner";
import { useSelector } from "react-redux";
import CompanyBottomSideNavbar from "../side-navbar/company-bottomsidenavbar-component";
import { CompanyMap } from "../maps/company-map";

export const CompanyMapWorkspan = () => {
  const isCompanySideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isCompanySideNavOpen
  );

  const viewRef = useRef(null);
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div
          className={`${
            isCompanySideNavOpen ? "z-40" : "fixed top-15 left-0 z-40"
          }`}
        >
          <div className="mt-24">
            <CompanyBottomSideNavbar />
          </div>
        </div>
      </div>
      <div className="z-0">
        <Suspense fallback={<Spinner />}>
          <CompanyMap />
        </Suspense>
      </div>
    </div>
  );
};
