// Write your code here
import './index.css'

const ApptItem = props => {
  const {appDetails} = props
  const {appId, imageURL, appName} = appDetails
  return (
    <>
      <li className="project-item-container">
        <img
          className="project-item-image"
          src={imageURL}
          alt={`project-item ${appId}`}
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{appName}</h1>
        </div>
      </li>
    </>
  )
}

export default ApptItem
