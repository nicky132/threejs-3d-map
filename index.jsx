import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './index.scss';
import request from 'umi-request';
import errorHandler from '@/errorHandler';
import lineMap from './map/map';
class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.init();
  }
  componentWillUnmount() {
    this.setState = (status, callback) => {
      return;
    };
  }
  init() {
    this.mapObj = new lineMap(this.VisualAnalysisPage, document.querySelector('#mapContainer'), {
      tagClick: this.tagClick.bind(this),
    });
    this.mapObj.init();
  }
  render() {
    return (
      <div id="WorldMapPage">
        <div
          id="mapContainer"
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, zIndex: 0 }}
        ></div>
      </div>
    );
  }
}
export default WorldMap;
