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

  const isLeftSidebarOpen = layout.settings.leftActive
  const isRightSidebarOpen = layout.settings.rightActive
  const toggleLeftBar = () => setLayout.toggleLeftBar()
  const toggleRightBar = () => setLayout.toggleRightBar()

  return (
    <div className='container'>
      <header>{header}</header>
      <nav className={isLeftSidebarOpen ? '' : 'collapse'}>
        <div className="sidebar-header">
          {left}
          <button onClick={toggleLeftBar}>Close Panel</button>
        </div>
      </nav>

      <main>
        {main}
      </main>

      <aside className={isRightSidebarOpen ? '' : 'collapse'}>
        <div className="sidebar-header">
          {right}
          <button onClick={toggleRightBar}>Close Panel</button>
        </div>
      </aside>

      <footer>{footer}</footer>
    </div>
  )
}
