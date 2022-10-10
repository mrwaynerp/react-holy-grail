import Layout from './Layout';
import MainContent from './views/Main'
import './App.css';

function App() {

  return (
    <Layout
      header={<div>Header</div>}
      left={<div>Navigation</div>}
      main={<MainContent />}
      right={<div>SideBar</div>}
      footer={<div>Footer</div>}
      />
  );
}

export default App;
