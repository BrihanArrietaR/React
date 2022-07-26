import React, {useState, useEffect} from "react";
import Login from "./components/Login";
import Order from "./components/ListOrders";
import LoadingListOrders from "./components/LoadingList";
import {deleteFetch, getFetch, postFetch, putFetch} from "./components/FetchMethods";
import './App.css';

function App() {

  const LoadingList = LoadingListOrders(Order);

  const [appStateLoading, setAppStateLoading] = useState(false)
  const [appStateObject, setAppStateObject] = useState(null)

  useEffect(() => {
      setAppStateLoading(true);
      getFetch("users").then(val => setAppStateObject(val))
      setAppStateLoading(false);
  }, [setAppStateLoading, setAppStateObject])

  return (
      <div>
        <LoadingList isLoading={appStateLoading} contents={appStateObject} />
     </div> 
  );
}

export default App;