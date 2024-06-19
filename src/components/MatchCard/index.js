// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  console.log(details)
  const {competingTeamLogo, matchStatus, competingTeam, result} = details
  const color = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="recent-matches-item-container">
      <img
        src={competingTeamLogo}
        className="logo-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competingTeam-heading">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={color}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
