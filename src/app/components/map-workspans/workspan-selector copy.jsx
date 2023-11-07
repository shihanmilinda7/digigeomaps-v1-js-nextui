// "use client";

// import React, { useState, useEffect } from "react";
// import "ol/ol.css";

// import { useDispatch, useSelector } from "react-redux";
// import { useRouter, useSearchParams } from "next/navigation";
// import { AreaMapWorkspan } from "./area-map-workspan";
// import { CompanyMapWorkspan } from "./company-map-workspan";
// import { CommodityMapWorkspan } from "./commodity-map-workspan";
// import {
//   setIsAreaSideNavOpen,
//   setIsCommoditySideNavOpen,
//   setIsCompanySideNavOpen,
//   setSelectedMap,
// } from "../../../store/map-selector/map-selector-slice";

// export const WorkspanSelector = () => {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const searchParams = useSearchParams();
//   const mapType = searchParams.get("t");
//   const isSideNavOpen = searchParams.get("sn");

//   const selectedMapWorkspan = useSelector(
//     (state) => state.mapSelectorReducer.selectedMap
//   );

//   const [activeWorskpan, setActiveWorskpan] = useState("area");

//   useEffect(() => {
//     setActiveWorskpan(selectedMapWorkspan);
//   }, [selectedMapWorkspan]);

//   useEffect(() => {
//     switch (mapType) {
//       case "area":
//         console.log("ajskjasldjalksjdl", isSideNavOpen);
//         dispatch(setIsAreaSideNavOpen(isSideNavOpen));
//         break;
//       case "Company":
//         dispatch(setIsCompanySideNavOpen(isSideNavOpen));
//         break;
//       case "Commodity":
//         dispatch(setIsCommoditySideNavOpen(isSideNavOpen));
//         break;

//       default:
//         break;
//     }
//     setActiveWorskpan(selectedMapWorkspan);
//   }, [isSideNavOpen]);

//   useEffect(() => {
//     if (mapType) {
//       dispatch(setSelectedMap(mapType));
//     } else {
//       router.push("?t=area");
//       dispatch(setSelectedMap("area"));
//     }
//   }, [mapType]);

//   return (
//     <div className="h-90">
//       <div style={{ display: activeWorskpan === "area" ? "block" : "none" }}>
//         <AreaMapWorkspan />
//       </div>
//       <div style={{ display: activeWorskpan === "Company" ? "block" : "none" }}>
//         <CompanyMapWorkspan />
//       </div>
//       <div
//         style={{ display: activeWorskpan === "Commodity" ? "block" : "none" }}
//       >
//         <CommodityMapWorkspan />
//       </div>
//     </div>
//   );
// };

// //map type/lyrs/zoom/center/key
