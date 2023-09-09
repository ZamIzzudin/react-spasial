import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const mapStyle = {
    'height': '500px',
    'width': '500px',
  };

  const middle = [-6.331861605631496, 106.78838480896715]

  const datas = [
    {
      name: 'Alfamart Cinere 4',
      lot: -6.330588583564260,
      lat: 106.7837344930640
    },
    {
      name: 'Alfamart Cinere Raya',
      lot: -6.3445912531582700,
      lat: 106.7774475530750
    },
    {
      name: 'Alfamart Cinere Raya 5 (1M70)',
      lot: -6.3362099692215500,
      lat: 106.78199657913300
    },
    {
      name: 'Alfamart Bukit Cinere',
      lot: -6.334381639064290,
      lat: 106.78600722615300
    },
    {
      name: 'Alfamart Cinere Depok 2',
      lot: -6.34428739126258,
      lat: 106.77787598044900
    },
    {
      name: 'Alfamart Cendana Cinere',
      lot: -6.329273484665370,
      lat: 106.78834732344900
    },
    {
      name: 'Alfamart Cinere Raya Lentera',
      lot: -6.337420289338290,
      lat: 106.78049381619900
    },
    {
      name: 'Alfamart E398 Bukit Cinere',
      lot: -6.334093337517040,
      lat: 106.78409870477300
    },
    {
      name: 'Alfamart Gandul Raya',
      lot: -6.3407898725183600,
      lat: 106.79272468814600
    },
    {
      name: 'Alfamart Gandul Raya 2',
      lot: -6.3380358500388200,
      lat: 106.79458031028700
    },
    {
      name: 'Alfamart Pertamina Gandul',
      lot: -6.340318836463470,
      lat: 106.7944761938370
    },
    {
      name: 'Alfamart Bukit Cinere 2',
      lot: -6.333630674541860,
      lat: 106.78414135326000
    },
    {
      name: 'Alfamart JLN PLN Gandul',
      lot: -6.340356032901490,
      lat: 106.79244735326000
    },
    {
      name: 'Alfamart Cinere Raya 2',
      lot: -6.324627222305130,
      lat: 106.78477050173200
    },
    {
      name: 'Sumber Alfaria Trijaya. PT (Alfamart)',
      lot: -6.337249071540540,
      lat: 106.78159442994700
    }
  ]

  return (
    <div className="App">
      <MapContainer center={middle} zoom={13} scrollWheelZoom={true} style={mapStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {datas.map((data, index) =>
          <Marker position={[data.lot, data.lat]} key={index}>
            <Popup>
              {data.name}
            </Popup>
          </Marker>
        )}
      </MapContainer>

    </div>
  );
}

export default App;
