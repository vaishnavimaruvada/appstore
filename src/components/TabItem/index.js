const TabItem = props => {
  const {tabDetails, updatedActiveTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updatedActiveTabId(tabId)
  }
  return (
    <li className="tabs-container">
      <button type="button" className="tab-btn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
