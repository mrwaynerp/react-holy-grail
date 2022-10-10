import { useLayout } from './LayoutContext'
import './Layout.css'

export type LayoutProps = {
  header?: JSX.Element;
  left?: JSX.Element;
  main?: JSX.Element;
  right?: JSX.Element;
  footer?: JSX.Element;
}

export default function Layout(props: LayoutProps) {
  const { header, left, main, right, footer} = props
  const [layout, setLayout] = useLayout()

  const isLeftPanelOpen = layout.settings.leftPanelActive
  const isRightPanelOpen = layout.settings.rightPanelActive
  const toggleLeftBar = () => setLayout.toggleLeftBar()
  const toggleRightBar = () => setLayout.toggleRightBar()

  return (
    <div className='container'>
      <header>{header}</header>
      <nav className={isLeftPanelOpen ? '' : 'collapse'}>
        <div className="sidebar-header">
          {left}
          <button onClick={toggleLeftBar}>Close Panel</button>
        </div>
      </nav>

      <main>
        {main}
      </main>

      <aside className={isRightPanelOpen ? '' : 'collapse'}>
        <div className="sidebar-header">
          {right}
          <button onClick={toggleRightBar}>Close Panel</button>
        </div>
      </aside>

      <footer>{footer}</footer>
    </div>
  )
}
