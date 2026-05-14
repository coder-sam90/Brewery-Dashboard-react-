import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

import {
  dashboardStats,
  taplist,
  fermentationData,
} from "./data/mockData"

function App() {
  return (
    <div
      style={{
        backgroundColor: "#111",
        color: "white",
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ marginBottom: "2rem" }}>
        Hanging Hat Brewery Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {dashboardStats.map((stat) => (
          <DashboardCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <h2
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Taplist
      </h2>

      <div
        style={{
          backgroundColor: "#222",
          borderRadius: "10px",
          padding: "1rem",
          marginTop: "1rem",
          maxWidth: "800px",
        }}
      >
        {taplist.map((beer) => (
          <div
            key={beer.name}
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1.5fr 1fr 1fr 1fr",
              padding: "0.75rem 0",
              borderBottom: "1px solid #444",
            }}
          >
            <span>{beer.name}</span>
            <span>{beer.style}</span>
            <span>{beer.abv}</span>
            <span>{beer.kegLevel}</span>
            <span>{beer.status}</span>
          </div>
        ))}
      </div>

      <h2
        style={{
          marginTop: "3rem",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Fermentation Tracking
      </h2>

      <div
        style={{
          backgroundColor: "#222",
          padding: "1rem",
          borderRadius: "10px",
          marginTop: "1rem",
          width: "fit-content",
        }}
      >
        <LineChart
          width={600}
          height={300}
          data={fermentationData}
        >
          <CartesianGrid stroke="#444" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#f59e0b"
          />
        </LineChart>
      </div>
    </div>
  )
}

function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        backgroundColor: "#222",
        padding: "1rem",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}

export default App