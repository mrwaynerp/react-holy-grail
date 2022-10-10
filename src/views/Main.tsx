import logo from '../logo.svg';
import { useLayout } from '../LayoutContext'

const MainContent = () => {
  const [layout, setLayout] = useLayout()

  const isLeftPanelOpen = layout.settings.leftPanelActive
  const isRightPanelOpen = layout.settings.rightPanelActive
  const toggleLeftBar = () => setLayout.toggleLeftBar()
  const toggleRightBar = () => setLayout.toggleRightBar()

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Holy Grail
        </h1>
        <img src={logo} className="App-logo" alt="logo" />

        <h4>Toggle Side Panels</h4>
        <div className='main-panel-controls'>
          <button onClick={toggleLeftBar}>Toggle Left ({isLeftPanelOpen ? 'Open' : 'Closed'})</button>
          <button onClick={toggleRightBar}>Toggle Right ({isRightPanelOpen ? 'Open' : 'Closed'})</button>
        </div>

        <p><small>{JSON.stringify(layout.settings, null, 2)}</small></p>
      </header>
    </div>
  )
}

export default MainContent