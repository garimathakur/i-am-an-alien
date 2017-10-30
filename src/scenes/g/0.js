import React from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import colors from '../elements/colors';

const TOTAL_TILES = 16;
const TILE_COLS = 8;
const TILE_ROWS = 2;
const ZOOM_LEVEL = 3;
const TILE_SIZE = 1024;

const urls = {};

const getImageUrl = (x, y) => {
  const parsedX = Math.abs(x) < TILE_COLS ? (x < 0 ? (TILE_COLS + x) : x) : (TILE_COLS + (Math.abs(x) % TILE_COLS));
  const imageNum = (Math.abs(y) * 8) + parsedX;
  const parsedImageNum = imageNum < TOTAL_TILES ? imageNum : imageNum % TOTAL_TILES;

  if (urls[parsedImageNum]) {
    console.log('urls[parsedImageNum]:1', urls[parsedImageNum]);
    return urls[parsedImageNum];
  } else {
    urls[parsedImageNum] = require(`../../images/back/${parsedImageNum}.png`);
    console.log('urls[parsedImageNum]:2', urls[parsedImageNum]);
    return urls[parsedImageNum];
  }
}

const StyledMap = styled(Map)`
  height: 100%;
  background: linear-gradient(${colors.maroon}, yellow, ${colors.maroon});
`;
// 128x30
class CustomTileLayer extends TileLayer {
  componentWillMount() {
    super.componentWillMount();

    const { map, url, ...props } = this.props;

    this.leafletElement.__proto__.getTileUrl = function (tilePoint) {
      console.log('tilePoint', tilePoint);
      if (tilePoint.z === ZOOM_LEVEL) {
        if (tilePoint.y < TILE_COLS) {
          return getImageUrl(tilePoint.x, tilePoint.y);
        } else if (tilePoint.y >= TILE_COLS) {
          const y = tilePoint.y - TILE_COLS;
          return getImageUrl(tilePoint.x, y);
        }
      }
    };
  }
}

const position = [51.505, -0.09];

const Component = () => (
  <StyledMap
    center={position}
    crs={L.CRS.Simple}
    zoom={ZOOM_LEVEL}
    maxZoom={ZOOM_LEVEL}
    minZoom={ZOOM_LEVEL}
    zoomControl={false}
    tileSize={TILE_SIZE}
    detectRetina={true}>
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
