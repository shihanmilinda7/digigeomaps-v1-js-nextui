"use client";

import React, { Suspense, useEffect } from "react";
import "ol/ol.css";
import { Map } from "@react-ol/fiber";
import { useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Button, ButtonGroup } from "@nextui-org/react";

export const AreaMap = async () => {
  let pathname = "";
  try {
    pathname = window.location.href;
  } catch (error) {}
  // console.log("pathname", pathname);
  const viewRef = useRef(null);
  const router = useRouter();

  const isAreaSideNavOpen = useSelector(
    (state) => state.mapSelectorReducer.isAreaSideNavOpen
  );

  // useEffect(()=> {

  // },[])

  return (
    <div className="relative">
      <ButtonGroup
        variant="faded"
        className="absolute left-0 bottom-0 z-50"
        color="primary"
      >
        <Button onClick={()=>(router.push(pathname+"lyrs=s"))}>Map</Button>
        <Button>Satelite</Button>
        <Button>Terrain</Button>
      </ButtonGroup>
      <Map
        style={{
          width: "100vw",
          // width: `${isAreaSideNavOpen ? "75vw" : "100vw"}`,
          height: "90vh",
        }}
        controls={[]}
      >
        <olView initialCenter={[0, 0]} initialZoom={2} />
        <olLayerTile preload={Infinity}>
          {/* <olSourceOSM /> */}
          <olSourceXYZ
            args={{
              url: "https://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
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
