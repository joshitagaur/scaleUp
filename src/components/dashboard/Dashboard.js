import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DonutChartContainer } from '../Graphs/DonutChartContainer';
import { CardContainer } from './card.js'
import { getGraphData } from '../../store/actions/graphActions'
import { withRouter } from 'react-router-dom';

const card1 = {
  'title': 'Total Revenue',
  'amount': '$15000.0'
}

const card2 = {
  'title': 'New Orders',
  'amount': '3500'
}

const card3 = {
  'title': 'Product Views',
  'amount': '6000'
}

class Dashboard extends Component {
  componentDidMount() {
    this.props.getGraphData();
  }

  render() {
    
    // console.log(this.props);
    const { graph } = this.props;
    
    return (
      <div className="dashboard container">
        <h5 className="center section">Dashboard</h5>
        <div className="row">
          <CardContainer data = {card1} />
          <CardContainer data = {card2} />
          <CardContainer data = {card3} />

          <div className="col s6 m4">
            {graph.users && <DonutChartContainer graphData={graph.users.data} />}
            <div>Users Logged-in per hour on 10th Sept 2019</div>
          </div>
          <div className="col s6 m4">
            {graph.users && <DonutChartContainer graphData={graph.users.data} />}
            <div>Users Logged-in per hour on 11th Sept 2019</div>
          </div>
          <div className="col s12 m4">
            {graph.users && <DonutChartContainer graphData={graph.users.data} />}
            <div>Users Logged-in per hour on 12th Sept 2019</div>
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    graph: state.graph
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGraphData: () => dispatch(getGraphData())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
