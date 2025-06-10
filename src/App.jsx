import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="font-['Manrope']">
        <Header />
        <RouterProvider router={appRouter}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
