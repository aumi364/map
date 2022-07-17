import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { mapKey } from '../../helpers/secretKeys';
import { monsterLab } from '../../helpers/variables';

type Props = {};

const containerStyle = {
  width: 'calc(100vw - 300px)',
  height: '100vh',
};
type LatlongLiteral = google.maps.LatLngLiteral;
type MapOptions = google.maps.MapOptions;

const Map = (props: Props) => {
  const mapRef = useRef<GoogleMap>();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: mapKey || '',
  });
  const [map, setMap] = useState(null);

  const center = useMemo<LatlongLiteral>(
    () => ({
      lat: monsterLab.lat,
      lng: monsterLab.lng,
    }),
    [],
  );

  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  );

  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={options}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};
export default Map;
