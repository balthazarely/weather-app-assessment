import "./App.scss";
import ChangeCityModal from "./components/ChangeCityModal";
import CityInfomation from "./components/CityInfomation";
import Layout from "./components/Layout";
import WeatherAppUIContainer from "./components/WeatherAppUIContainer";
import GlobalProvider from "./store/store";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Layout>
          <CityInfomation />
          <WeatherAppUIContainer />
          <ChangeCityModal />
        </Layout>
      </GlobalProvider>
    </div>
  );
}

export default App;
