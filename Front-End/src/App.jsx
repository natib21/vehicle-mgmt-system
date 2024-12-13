import Header from "./components/header/Header";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center md:w-[1200px] md:mx-auto">
      <Header />
      <Layout />
    </div>
  );
};
export default App;
