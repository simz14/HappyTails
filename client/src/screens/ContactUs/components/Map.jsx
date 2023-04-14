import React from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

const MapWrapper = styled.div`
  .map {
    height: 400px;
    border-radius: ${({ theme }) => theme.radius.large};
    border: 0.5rem solid white;
  }
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Map = ({ lat, lng, zoom }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  if (isLoaded) {
    return (
      <MapWrapper>
        <GoogleMap
          center={{ lat: lat, lng: lng }}
          mapContainerClassName="map"
          zoom={zoom}
        >
          <MarkerF position={{ lat: lat, lng: lng }} />
        </GoogleMap>
      </MapWrapper>
    );
  }
  return (
    <LoadingWrap>
      <CircularProgress />
    </LoadingWrap>
  );
};

Map.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
};

export default Map;
