import React from 'react';
import AutoSuggestion from '../components/AutoSuggestion';
import { CustomSpace } from '../style/StyledComponents/CustomSpace';
import Map from '../features/map/Map';
import Location from './../features/location/Location';
type Props = {};

const home = (props: Props) => {
  return (
    <CustomSpace>
      <Location />
      <Map />
    </CustomSpace>
  );
};

export default home;
