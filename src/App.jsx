import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
function App() {
  return (
    <div className="font-BeVietnamPro text-Gray-950/40 relative z-1 flex min-h-screen flex-col items-center overflow-hidden bg-gray-50">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
