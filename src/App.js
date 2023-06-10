import './App.css';
import {Layout} from "antd";
import {Header} from "antd/es/layout/layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import LandingPage from "./pages/LandingPage";
import NewJobPage from "./pages/NewJobPage";
import JobRunsPage from "./pages/JobRunsPage";
import JobDetailsPage from "./pages/JobDetailsPage";

function App() {
  return (
      <div>
        <Layout style={{height: '100%'}}>
          <Header style={{ height: "5vh", color: 'white', fontSize: 25}}>
            Sizif
          </Header>
          <Layout style={{ backgroundColor: 'white', heigth: '75%'}}>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<LandingPage />} />
                <Route path="/new-job" exact element={< NewJobPage/>}/>
                <Route path="/job/:id" element={<JobRunsPage />} />
                <Route path="/job/:id/details" element={<JobDetailsPage />} />
              </Routes>
            </BrowserRouter>
          </Layout>
        </Layout>
      </div>
  );
}

export default App;
