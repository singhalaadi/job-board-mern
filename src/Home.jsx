function Home(props) {
  return (
    <div className="home" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}
export default Home;
