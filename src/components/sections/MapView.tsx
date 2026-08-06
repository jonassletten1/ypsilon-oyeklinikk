"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

const LAT = 59.749566;
const LON = 10.174102;

// Brand-coloured pin as an inline SVG divIcon (avoids Leaflet's default marker
// image assets, which are awkward to bundle).
const pinSvg =
  '<svg width="30" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M12 0C6.5 0 2 4.48 2 10c0 7 10 14 10 14s10-7 10-14C22 4.48 17.5 0 12 0z" fill="#40577C" stroke="#ffffff" stroke-width="1.2"/>' +
  '<circle cx="12" cy="10" r="3.4" fill="#ffffff"/></svg>';

export default function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      if (cancelled || !containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: [LAT, LON],
        zoom: 15,
        scrollWheelZoom: false,
      });
      mapRef.current = map;

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>',
      }).addTo(map);

      const icon = L.divIcon({
        html: pinSvg,
        className: "",
        iconSize: [30, 40],
        iconAnchor: [15, 40],
      });
      L.marker([LAT, LON], { icon, title: "Ypsilon Øyeklinikk" }).addTo(map);
    })();

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Kart til Ypsilon Øyeklinikk, Hotvetalleen 15A, Drammen"
      style={{ height: 460, width: "100%" }}
    />
  );
}
