import styled from 'styled-components';

export const Planet = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: white;

  position: relative;
  top: 30px;
`;

export const MoonOrbit = styled.View`  
  width: 30px;
  height: 30px;
  border-radius: 15px;

  border: 1px solid white;
`;

export const Moon = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: white;

  position: relative;
  top: 3px
`;

export const ExternalOrbit = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;

  border: 1px solid #6f6969;

  justify-content: center;
  align-items: center;
`;