import * as d3 from 'd3';
import React, { Component } from 'react'
import { geoMercator, geoPath } from "d3-geo"
import worlddata from './dataWorld'

class WorldMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cities: [
        { name: "Bogota", coordinates: [-75.166667, 3.03]},
        { name: "New York", coordinates: [-74.0059,40.7128]},
        { name: "Boston", coordinates: [71.8333333,40.8333333]},
        // { name: "San Francisco", coordinates: [-77.548287,1.001649]}


      ],
    }
  }

  projection() {
   return geoMercator()
     .scale(120)
     .translate([ 960 / 2, 500 / 1.5 ])
 }

   render() {
     const w = this.props.width
     const h = this.props.height

      const projection = this.projection();

      const pathGenerator = geoPath()
        .projection(projection)

      const countries = worlddata.features
         .map((d,i) => <path
         key={'path' + i}
         d={pathGenerator(d)}
         fill="white"
         // fill={ `rgba(58,73,86,${ 1 / worlddata.features.length * i})` }
         stroke="rgba(58,73,86)"
         strokeWidth={ 0.5 }
         className='countries'
         />)

     return <svg width={960} height={500}>
     {countries}
     <g className="markers">
         {
           this.state.cities.map((city, i) => (
             <circle
               key={ `marker-${i}` }
               cx={ this.projection()(city.coordinates)[0] }
               cy={ this.projection()(city.coordinates)[1] }
               r={ 5 }
               fill="#2a23e0"
               stroke=""
               className="marker"
             />
           ))
         }
       </g>
     </svg>
   }
}
export default WorldMap
