// Write your code here
import './index.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isLoading: true, teamMatchData: {}}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(each =>
        this.getFormattedData(each),
      ),
    }
    this.setState({isLoading: false, teamMatchData: formattedData})
  }

  getColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxip'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
    }
  }

  getLoader = () => {
    return (
      <div testid="loader" className="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
      </div>
    )
  }

  getTeamMatches = () => {
    const {teamMatchData} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamMatchData
    return (
      <div className="responsiive-container">
        <img src={teamBannerUrl} className="banner-img" alt="team banner" />
        <LatestMatch latestMatchDetails={latestMatch} />
        <ul className="recent-matches-container">
          {recentMatches.map(each => (
            <MatchCard details={each} key={each.id} />
          ))}
        </ul>
        <button className="back-btn">Back</button>
      </div>
    )
  }

  render() {
    const {isLoading, teamMatchData} = this.state
    const className = `${this.getColor()}`
    console.log(className)
    return (
      <div className={className}>
        {isLoading ? this.getLoader() : this.getTeamMatches()}
      </div>
    )
  }
}
export default TeamMatches
