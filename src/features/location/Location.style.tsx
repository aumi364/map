import styled from '@emotion/styled';
import { Space } from 'antd';

export const LocationStyle = styled(Space)(({ theme }: any) => ({
  background: theme.color.primary.medium,
  height: '100vh',
  width: '300px',
  padding: '20px',
}));
