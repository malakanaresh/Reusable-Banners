// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {userDetails} = props
  const {headerText, description, className} = userDetails
  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default BannerCardItem
