import './index.css'

const TabItem = props => {
  const {tabDetails, onclick, isActive} = props
  const {tabId, displayText} = tabDetails

  const OnClick = () => {
    onclick(tabId)
  }

  const activetabbtnClsName = isActive ? 'active-tab-btn ' : ''

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activetabbtnClsName}`}
        onClick={OnClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
