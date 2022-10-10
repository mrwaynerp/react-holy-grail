import Layout from './Layout';
import LayoutProvider from './LayoutContext'
import MainContent from './views/Main'
import './App.css';

function App() {

  return (
    <LayoutProvider>
      <Layout
        header={<div>Header</div>}
        left={<div>Navigation</div>}
        main={<MainContent />}
        right={<div>SideBar</div>}
        footer={<div>Footer</div>}
        />
    </LayoutProvider>
  );
}

export default App;
