import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { navigationData } from './data/navigation';
import './App.css';

function App() {
  return (
    <div id="root">
      <Header />
      <div className="app-container">
        {/* Sidebar - z-index high, fixed height */}
        <Sidebar items={navigationData} />

        {/* Main Content Wrapper - Flex 1 */}
        <div className="main-wrapper">
          <main className="app-content">
            <h1>Welcome</h1>
            <p>Select an item from the sidebar to navigate.</p>

            <div className="placeholder-content">
              Content Area (Z-index 0)
            </div>

            {/* Generate some dummy content to test scrolling */}
            <div style={{ marginTop: '2rem' }}>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} style={{ opacity: 0.5 }}>
                  Scrollable content line {i + 1}...
                </p>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
