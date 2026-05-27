import Home from '../pages/Home'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#081422', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1 }}>
        <Home />
      </main>
    </div>
  )
}
