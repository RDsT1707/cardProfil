
import './App.css'

function App() {
    return (
      
      <div className="main-wrapper">
      {/* Background images */}
      <div className="bg-top">
        <img
          src="/src/assets/img/bg-pattern-top.svg"
          alt="Top background pattern" />
      </div>
      
      <div className="bg-bottom">
        <img
          src="/src/assets/img/bg-pattern-bottom.svg"
          alt="Bottom background pattern" />
      </div>
      
      {/* Profile card container */}
      <div className="profile-container">
        <div className="profile-card">
          {/* Header with pattern */}
          <div className="profile-header">
            <div className="pattern-overlay">
              <img
                src="/src/assets/img/bg-pattern-card.svg"
                alt="Header pattern"
                className="header-pattern" />
            </div>
          </div>

          {/* Profile info */}
          <div className="profile-info">
            {/* Avatar */}
            <div className="avatar-container">
              <div className="avatar">
                <img
                  src="/src/assets/img/image-victor.jpg"
                  alt="Profile"
                  className="avatar-img" />
              </div>
            </div>

            {/* User info */}
            <div className="user-info">
              <div className="name-age">
                <h2 className="name">Victor Crest</h2>
                <span className="age">26</span>
              </div>
              <p className="location">London</p>
            </div>

            {/* Stats */}
            <div className="stats-container">
              <div className="stats">
                <div className="stat-item">
                  <p className="stat-value">80K</p>
                  <p className="stat-label">Followers</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">803K</p>
                  <p className="stat-label">Likes</p>
                </div>
                <div className="stat-item">
                  <p className="stat-value">1.4K</p>
                  <p className="stat-label">Photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App




