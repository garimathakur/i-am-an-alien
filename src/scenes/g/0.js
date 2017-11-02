import React, { Component } from 'react';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import styled from 'styled-components';
import colors from '../elements/colors';
import background from '../../images/gradient.jpg';

const TOTAL_TILES = 16;
const TILE_COLS = 8;
const TILE_ROWS = 2;
const ZOOM_LEVEL = 3;
const TILE_SIZE = 1024;

const urls = {};

const getImageUrl = (x, y) => {
  const xNeg = x < 0;
  const evenRow = y % 2;
  const xMod = xNeg ? (x + 1) % 8 : x % 8;
  const imageNum = (xNeg ? (evenRow ? xMod + 7 : xMod + 15 : 15) : (evenRow ? xMod : xMod + 8));
  if (urls[imageNum]) {
    return urls[imageNum];
  } else {
    urls[imageNum] = require(`../../images/back/${imageNum}.png`);
    return urls[imageNum];
  }
}

const StyledMap = styled(Map)`
  height: 100%;
  background-image: url(${background});
  background-size: cover;
`;

class CustomTileLayer extends TileLayer {
  componentWillMount() {
    super.componentWillMount();

    const { map, url, ...props } = this.props;

    this.leafletElement.__proto__.getTileUrl = function (tilePoint) {
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

const position = [0, 0];

const OuterDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Caret = styled.button`
  z-index: 1000000000;
  top: calc(50% - 50px);
  left: 81%;
  position: fixed;
  width: 1000px;
  height: 0;
  border-top: 60px solid transparent;
  border-bottom: 60px solid transparent;
  border-left: 60px solid ${colors.pink};
  background: transparent;
  cursor: pointer;
`;

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caret: null,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        caret: (
          <Caret onClick={() => this.props.history.push('/f/0')}/>
        )
      })
    }, 30000);
  }

  render() {
    return (
      <OuterDiv>
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
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
        </StyledMap>
        {this.state.caret}
      </OuterDiv>
    )
  }
}

export default C;
