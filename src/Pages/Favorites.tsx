import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setFavorites(savedFavorites);
  }, []);

  function removeFavorite(item: string) {
    const updatedFavorites = favorites.filter((favorite) => favorite !== item);

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  function clearFavorites() {
    setFavorites([]);
    localStorage.removeItem("favorites");
  }

  return (
    <div className="page">
      <Navbar />

      <main className="home-container">
        <section className="hero-card">
          <div>
            <p className="small-title">Saved Menu Items</p>
            <h1>Favorites</h1>
            <p className="muted">
              These are the dining hall items you saved from the menu.
            </p>
          </div>
        </section>

        <section className="menu-section">
          <div className="section-header">
            <div>
              <p className="section-label">My List</p>
              <h2>Favorite Items</h2>
              <p className="muted">{favorites.length} saved items</p>
            </div>

            {favorites.length > 0 && (
              <button className="clear-btn" onClick={clearFavorites}>
                Clear All
              </button>
            )}
          </div>

          {favorites.length > 0 ? (
            <div className="menu-grid">
              {favorites.map((item, i) => (
                <div className="menu-card" key={item}>
                  <div className="menu-card-top">
                    <span className="item-number">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="item-tag">Favorite</span>
                  </div>

                  <h3>{item}</h3>

                  <div className="menu-card-bottom">
                    <button
                      className="favorite-btn"
                      onClick={() => removeFavorite(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No favorites yet</h3>
              <p>Go to the menu and click Add Favorite.</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Favorites;