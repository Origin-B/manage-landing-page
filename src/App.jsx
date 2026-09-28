import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
function App() {
  return (
    <div className="font-BeVietnamPro text-Gray-950/40 relative z-1 flex min-h-screen flex-col items-center bg-gray-50">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="814"
        height="814"
        className="fill-Orange-50 absolute -z-1 translate-x-[29%_-40%] md:hidden"
      >
        <rect
          width="300"
          height="900"
          x="774"
          y="-62"
          fill-rule="evenodd"
          rx="218"
          transform="rotate(45 718.814 -291.157)"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1439"
        className="fill-Orange-400 absolute -z-1 h-screen overflow-hidden"
      >
        <g fill-rule="evenodd" opacity=".071" transform="translate(-171 -373)">
          <rect
            width="310.431"
            height="708"
            x="205"
            y="410"
            rx="155.215"
            transform="scale(1 -1) rotate(-45 -1484.244 0)"
          />
          <rect
            width="310.431"
            height="708"
            x="1269"
            y="7"
            rx="155.215"
            transform="scale(1 -1) rotate(-45 552.684 0)"
          />
        </g>
      </svg>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
