// Write your code here

import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeamsList: [], isLoader: true}

  componentDidMount() {
    this.getIplTeamsList()
  }

  getIplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({iplTeamsList: updatedData, isLoader: false})
  }

  getLoader = () => {
    return (
      <div testid="loader" className="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    )
  }

  render() {
    const {iplTeamsList, isLoader} = this.state
    return (
      <div className="app-container">
        <div className="title-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="ipl-logo"
            alt="ipl logo"
          />
          <h1 className="title-heading">IPL DASHBOARD</h1>
        </div>
        {isLoader ? (
          <div testid="loader" className="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <ul className="list-item-container">
            {iplTeamsList.map(each => (
              <TeamCard details={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
