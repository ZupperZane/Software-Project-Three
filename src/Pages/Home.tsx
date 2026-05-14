import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import menuData from "../data/menu.json";

function Home() {
  const { scrapedAt, items } = menuData;
  const [searchText, setSearchText] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
  );

  function addFavorite(item: string) {
    const oldFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (oldFavorites.includes(item)) {
      alert("This item is already in favorites.");
      return;
    }

    const newFavorites = [...oldFavorites, item];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    alert("Added to favorites!");
  }

  return (
    <div className="page">
      <Navbar />

      <main className="home-container">
        <section className="hero-card hero-with-image">
          <div className="hero-content">
            <p className="small-title">Live College Dining Menu</p>
            <h1>Hamilton Dining Hall</h1>

            {!scrapedAt ? (
              <p className="muted">
                No data yet — run <code>npm run scrape</code> then refresh.
              </p>
            ) : (
              <p className="muted">
                Updated from the latest scraped dining hall data.
              </p>
            )}

            <div className="hero-actions">
              <a href="#menu" className="primary-action">
                View Menu
              </a>

              <Link to="/Favorites" className="secondary-action">
                My Favorites
              </Link>
            </div>
          </div>

          <div className="hero-image-card">
            <img src="/college.jpg" alt="New College campus" />
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <span>{items.length}</span>
              <p>Total Items</p>
            </div>

            <div className="stat-card">
              <span>{filteredItems.length}</span>
              <p>Showing Now</p>
            </div>

            <div className="stat-card">
              <span>{scrapedAt ? "Live" : "Off"}</span>
              <p>Status</p>
            </div>
          </div>
        </section>

        {scrapedAt && (
          <section className="menu-section" id="menu">
            <div className="section-header">
              <div>
                <p className="section-label">Today’s Selection</p>
                <h2>Available Menu Items</h2>
                <p className="muted">
                  {items.length} items · scraped{" "}
                  {new Date(scrapedAt).toLocaleString()}
                </p>
              </div>

              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search menu item..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            </div>

            {filteredItems.length > 0 ? (
              <div className="menu-grid">
                {filteredItems.map((item, i) => (
                  <div className="menu-card" key={item}>
                    <div className="menu-card-top">
                      <span className="item-number">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="item-tag">Dining Item</span>
                    </div>

                    <h3>{item}</h3>

                    <div className="menu-card-bottom">
                      <button
                        className="favorite-btn"
                        onClick={() => addFavorite(item)}
                      >
                        Add Favorite
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No menu item found</h3>
                <p>Try searching something else.</p>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default Home;