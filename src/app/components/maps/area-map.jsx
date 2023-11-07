"use client";

import React, { Suspense, useEffect, useState } from "react";
import "ol/ol.css";
import { Map } from "@react-ol/fiber";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@nextui-org/react";
import {
  setAreaInitialCenter,
  setAreaLyrs,
  setAreaZoomLevel,
} from "@/store/map-selector/map-selector-slice";

export const AreaMap = async () => {
  let pathname = "";
  try {
    pathname = window.location.href;
  } catch (error) {}

  // const searchParams = useSearchParams();
  // const mapLyrs = searchParams.get("lyrs");

  // console.log("pathname", pathname);
  const mapRef = useRef();
  const dispatch = useDispatch();

  const mapLyrs = useSelector((state) => state.mapSelectorReducer.areaLyrs);
  const areaZoomLevel = useSelector(
    (state) => state.mapSelectorReducer.areaZoomLevel
  );
  const areaInitialCenter = useSelector(
    (state) => state.mapSelectorReducer.areaInitialCenter
  );

  useEffect(() => {
    mouseScrollEvent();
  }, []);

  const mouseScrollEvent = () => {
    const map = mapRef.current;

    // console.log("mapRef", mapRef.current?.getZoom());
    const handleMoveEnd = () => {
      const tmpZoomLevel = map.getView().getZoom();
      const tmpinitialCenter = map.getView().getCenter();
      dispatch(setAreaZoomLevel(tmpZoomLevel));
      dispatch(setAreaInitialCenter(tmpinitialCenter));
      // console.log("Current Zoom Level:", tmpinitialCenter);
      // console.log("Current Zoom Level:", tmpZoomLevel);
      // You can perform actions with the zoom level here
    };

    map?.on("moveend", handleMoveEnd);

    return () => {
      map?.un("moveend", handleMoveEnd);
    };
  };

  return (
    <div className="relative">
      <ButtonGroup
        variant="faded"
        className="absolute left-0 bottom-0 z-50 m-2"
        color="primary"
      >
        <Button onClick={() => dispatch(setAreaLyrs("m"))}>Map</Button>
        <Button onClick={() => dispatch(setAreaLyrs("s"))}>Satelite</Button>
        <Button onClick={() => dispatch(setAreaLyrs("p"))}>Terrain</Button>
      </ButtonGroup>
      <Map
        ref={mapRef}
        style={{
          width: "100vw",
          // width: `${isAreaSideNavOpen ? "75vw" : "100vw"}`,
          height: "90vh",
        }}
        controls={[]}
      >
        <olView
          initialCenter={areaInitialCenter}
          initialZoom={2}
          zoom={areaZoomLevel}
        />
        <olLayerTile preload={Infinity}>
          {/* <olSourceOSM /> */}
          <olSourceXYZ
            args={{
              url: `https://mt0.google.com/vt/lyrs=${mapLyrs}&hl=en&x={x}&y={y}&z={z}`,
              // url: `https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}`,
            }}
          ></olSourceXYZ>
        </olLayerTile>
      </Map>
    </div>
  );
};
{
  /* <olLayerTile>
        {/* <olSourceOSM /> */
}
//     <olSourceXYZ args={{ url: "https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}", }} > map=m terr=p satt=s
//   </olSourceXYZ>
// </olLayerTile> */}
