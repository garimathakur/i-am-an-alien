import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import styled from 'styled-components';

const getImageUrl = (x, y) => {
  const imageNum = (y * 64) + x;
  if (imageNum < 960) {
    try {
      return require(`../images/back/${imageNum}.png`);
    } catch (e) {
      console.log(imageNum);
    }
  }
}

const StyledMap = styled(Map)`
  height: 100%;
`;
// 128x30
class CustomTileLayer extends TileLayer {
  componentWillMount() {
    super.componentWillMount();

    const { map, url, ...props } = this.props;

    this.leafletElement.__proto__.getTileUrl = function (tilePoint) {
      if (tilePoint.z === 4) {
        if (tilePoint.y < 15) {
          return getImageUrl(tilePoint.x, tilePoint.y);
        } else if (tilePoint.y >= 15) {
          const y = tilePoint.y - 15;
          return getImageUrl(tilePoint.x, y);
        }
      }
    };
  }
}

const position = [51.505, -0.09];

const Component = () => (
  <StyledMap center={position} zoom={4} tileSize={128} detectRetina={true}>
    <CustomTileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      getTileUrl={(a) => {
        console.log('a', a);
      }}
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
  </StyledMap>
);

export default Component;
