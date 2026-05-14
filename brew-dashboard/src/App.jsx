import {
  LineChart,
  Line,
  XAxis,
  YAxis,
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
      <h1
        style={{
          marginBottom: "2rem",
          textAlign: "center",
        }}
      >
        Hanging Hat Brewery Dashboard
      </h1>

      {/* DASHBOARD CARDS */}

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

      {/* TAPLIST */}

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
      <div
  style={{
    backgroundColor: "#222",
    padding: "1rem",
    borderRadius: "10px",
    marginTop: "1rem",
    display: "flex",
    justifyContent: "center",
  }}
>
  <h2
    style={{
      marginTop: "2rem",
      textAlign: "left",
      fontWeight: "bold",
    }}
    >
    Fermentation Tracking: <h5>Bittersweet Bitter</h5>
    </h2>
  <div
    style={{
      backgroundColor: "#222",
      padding: "1rem",
      borderRadius: "10px",
      marginTop: "1rem",
      position: "relative",
    }}
    >
      <p 
        style={{
          textAlign: "right",
          marginBottom: "0.5rem",
          color: "white",
          fontWeight: "bold",
          fontSize: 14,
          transform: "rotate(-90deg)",
          left: "0.5px",
          top: "80px",
          position: "absolute",
        }}
        >
        Temperature(F)
        </p>
  </div>
  <LineChart
  width={600}
  height={300}
  data={fermentationData}
>
  <XAxis dataKey="day" />
  <YAxis dataKey="temp" />

  <Line
    type="monotone"
    dataKey="temp"
    stroke="orange"
    strokeWidth={3}
    dot={{
      r: 6,
      fill: "orange",
    }}
    label={{
      position: "top",
      fill: "white",
      fontSize: 12,
      offset: 10,
    }}
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