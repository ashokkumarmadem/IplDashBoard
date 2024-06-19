// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  console.log(latestMatchDetails)
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <>
    <p className='latest-match-text'>Latest Matches</p>
    <div className="latest-match-container">
      <div className="match-team-details">
        <p className="team">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="venue">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="competing-team-logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="match-innings-details">
        <p className="first-innings">First Innings</p>
        <p className="first-innings-result">{firstInnings}</p>
        <p className="first-innings">Second Innings</p>
        <p className="first-innings-result">{secondInnings}</p>
        <p className="man-of-the-match">Man Of The Match</p>
        <p className="first-innings-result">{manOfTheMatch}</p>
        <p className="first-innings">Umpires</p>
        <p className="first-innings-result">{umpires}</p>
      </div>
    </div>
    </>
  )
}

export default LatestMatch
