import Navbar from '../Components/Navbar';
import menuData from '../data/menu.json';

function Home() {
  const { scrapedAt, items } = menuData;

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '2rem auto', padding: '0 1rem' }}>
      <Navbar />
      <h1>Hamilton Dining Hall</h1>

      {!scrapedAt ? (
        <p style={{ color: '#888' }}>No data yet — run <code>npm run scrape</code> then refresh.</p>
      ) : (
        <>
          <p style={{ color: '#888', fontSize: 13 }}>
            {items.length} items &nbsp;·&nbsp; scraped {new Date(scrapedAt).toLocaleString()}
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, columns: 2, columnGap: '2rem' }}>
            {items.map((item, i) => (
              <li key={i} style={{ padding: '4px 0', borderBottom: '1px solid #eee', breakInside: 'avoid' }}>
                {item}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Home;
