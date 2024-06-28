import React from 'react';
import { RingLoader } from 'react-spinners';
import styled from '@emotion/styled';

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full viewport height */
  width: 100%; /* Full viewport width */
`;

const Loader: React.FC = () => {
  return (
    <LoaderWrapper>
      <RingLoader size={150} color="#123abc" />
    </LoaderWrapper>
  );
};

export default Loader;
