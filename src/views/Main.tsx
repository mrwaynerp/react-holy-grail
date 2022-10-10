import logo from '../logo.svg';
import { useLayout } from '../LayoutContext'

const MainContent = () => {
  const [layout, setLayout] = useLayout()

  const isLeftSidebarOpen = layout.settings.leftActive
  const isRightSidebarOpen = layout.settings.rightActive
  const toggleLeftBar = () => setLayout.toggleLeftBar()
  const toggleRightBar = () => setLayout.toggleRightBar()

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React Holy Grail
        </h1>
        <img src={logo} className="App-logo" alt="logo" />

        <h4>Toggle Side Drawers</h4>
        <div className='main-panel-controls'>
          <button onClick={toggleLeftBar}>Toggle Left ({isLeftSidebarOpen ? 'Open' : 'Closed'})</button>
          <button onClick={toggleRightBar}>Toggle Right ({isRightSidebarOpen ? 'Open' : 'Closed'})</button>
        </div>

        <p><small>{JSON.stringify(layout.settings, null, 2)}</small></p>
      </header>
    </div>
  )
}

export default MainContent