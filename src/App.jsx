import ShopItemFunc from "./components/ShopItemFunc/ShopItemFunc.jsx";
import ShopItemClass from "./components/ShopItemClass/ShopItemClass.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";

const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
}

const now = new Date();

function App() {

  return (
      <>
          {/* Function Component */}
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <ShopItemFunc item={item} />
            </div>
        </div>

          {/* Class Component */}
          <div className="container">
              <div className="background-element">
              </div>
              <div className="highlight-window">
                  <div className='highlight-overlay'></div>
              </div>
              <div className="window">
                  <ShopItemClass item={item} />
              </div>
          </div>

          {/* Calendar */}
          <div id="calendar">
              <Calendar date={now}/>
          </div>
      </>
    )
}

export default App;
