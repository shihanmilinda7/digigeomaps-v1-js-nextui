"use client";

import React, { useState, useEffect } from "react";
import "ol/ol.css";

import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { AreaMapWorkspan } from "./area-map-workspan";
import { CompanyMapWorkspan } from "./company-map-workspan";
import { CommodityMapWorkspan } from "./commodity-map-workspan";
import {
  setIsAreaSideNavOpen,
  setIsCommoditySideNavOpen,
  setIsCompanySideNavOpen,
  setSelectedMap,
} from "../../../store/map-selector/map-selector-slice";

export const WorkspanSelector = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectedMap = useSelector(
    (state) => state.mapSelectorReducer.selectedMap
  );
  // console.log("call 2");

  return (
    <div className="h-90">
      <div style={{ display: selectedMap === "area" ? "block" : "none" }}>
        <AreaMapWorkspan />
      </div>
      <div
        style={{ display: selectedMap === "company" ? "block" : "none" }}
        className="absolute right-0"
      >
        {/* <CompanyMapWorkspan /> */}company
      </div>
      <div
        style={{ display: selectedMap === "commodity" ? "block" : "none" }}
        className="absolute right-0"
      >
        {/* <CommodityMapWorkspan /> */}commodity
      </div>
    </div>
  );
};

//map type/lyrs/nav/zoom/center/key
