const Box = ({ color }) => {
  return (
    <div className="box">
      <div style={{ backgroundColor: color, width: 100, height: 100 }}></div>
      <p className="text-bold">{color}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      {['red', 'green', 'blue'].map((color, key) => (
        <Box {...{ color, key }} />
      ))}
    </div>
  );
};

export default App;
