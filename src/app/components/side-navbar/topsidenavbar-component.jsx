"use client";

import React, { useState, useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiTwotoneGold } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import MapSearchInputField from "./search-component";
import { setSelectedMap } from "@/store/map-selector/map-selector-slice";

const TopSideNavbar = () => {
  let pathname = "";

  try {
    pathname = window.location.href;
  } catch (error) {}

  if (pathname) {
    const r = pathname.indexOf("/", 9);
    if (r !== -1) {
      pathname = pathname.substring(0, r);
    }
  }

  const dispatch = useDispatch();

  const selectedMap = useSelector(
    (state) => state.mapSelectorReducer.selectedMap
  );

  const mapButtonHandler = async (selectedValue) => {
    dispatch(setSelectedMap(selectedValue));
  };

  return (
    <div className="rounded m-2 w-96 flex gap-2">
      <div className="flex flex-col w-full gap-1">
        <div className="flex gap-2 w-full">
          <Button
            color={selectedMap == "area" ? "primary" : "default"}
            className={`w-full flex gap-1`}
            onClick={() => mapButtonHandler("area")}
          >
            <MdLocationOn className="h-4 w-4" />
            Area
          </Button>
          <Button
            color={selectedMap == "company" ? "primary" : "default"}
            className={`w-full flex gap-1`}
            onClick={() => mapButtonHandler("company")}
          >
            <BsFillBuildingsFill className="h-4 w-4" />
            Company
          </Button>
          <Button
            color={selectedMap == "commodity" ? "primary" : "default"}
            className={`w-full flex gap-1`}
            onClick={() => mapButtonHandler("commodity")}
          >
            <AiTwotoneGold className="h-4 w-4" />
            Commodity
          </Button>
        </div>
        <div>
          <div
            style={{
              display: selectedMap === "area" ? "block" : "none",
            }}
          >
            <MapSearchInputField
              label=""
              placeholder="Search area"
              list="area"
            />
            <datalist
              id="area"
              style={{
                position: "absolute",
                top: 0,
                left: "100%",
                marginLeft: "10px",
              }}
            >
              <option value="Area 1" />
              <option value="Area 2" />
              <option value="Area 3" />
            </datalist>
          </div>
          <div
            style={{ display: selectedMap === "company" ? "block" : "none" }}
          >
            <MapSearchInputField
              label=""
              placeholder="Search company"
              list="company"
            />
            <datalist
              id="company"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <option value="Company 1" />
              <option value="Company 2" />
              <option value="Company 3" />
            </datalist>
          </div>
          <div
            style={{
              display: selectedMap === "commodity" ? "block" : "none",
            }}
          >
            <MapSearchInputField
              label=""
              placeholder="Search commodity"
              list="commodity"
            />
            <datalist
              id="commodity"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <option value="commodity 1" />
              <option value="commodity 2" />
              <option value="commodity 3" />
            </datalist>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopSideNavbar;
