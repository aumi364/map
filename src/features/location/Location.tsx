import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LocationStyle } from './Location.style';
import configUrl from './../../helpers/configUrl';
import { fsPlacesUrl } from '../../helpers/apiUrl';
import { monsterLab, radius } from '../../helpers/variables';
import { getRestuarants } from './../map/map.slice';
import AutoSuggestion from './../../components/AutoSuggestion';

type Props = {};

const Location = (props: Props) => {
  const restaurantsUrl = configUrl({
    endpoint: `${fsPlacesUrl}/search`,
    query: {
      ll: `${monsterLab.lat},${monsterLab.lng}`,
      query: 'restaurant',
      radius: radius,
    },
  });
  const dispatch = useAppDispatch();
  const restaurants = useAppSelector(state => state.mapSlice?.restaurants);
  useEffect(() => {
    dispatch(getRestuarants({ url: restaurantsUrl }));
  }, []);
  return (
    <LocationStyle align={'start'}>
      <AutoSuggestion options={restaurants} />
    </LocationStyle>
  );
};

export default Location;
