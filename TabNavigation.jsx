import React , {useState} from 'react'

const TabNavigation = () => {

    const [activeTab, setActiveTab] = useState("Home")




  return (
    <div>
      <h1>Tab Navigation</h1>

      <button onClick={() => setActiveTab("Home")}>Home</button>
      <button onClick={() => setActiveTab("profile")}>Profile</button>
      <button onClick={() => setActiveTab("setting")}>Setting</button>


      {activeTab === "Home" && (
        <div>
            <h2>Home</h2>
            <p>Welcome to the home section</p>
        </div>
      )}

      {activeTab === "profile" && (
        <div>
            <h2>Profile</h2>
            <p>welcome to profile section</p>
        </div>
      )}

      {activeTab === "setting" && (
        <div>
            <h2>setting</h2>
            <p>Lorem ipsum dolor sit amet consectetur </p>
        </div>
      )}
    </div>
  )
}

export default TabNavigation
