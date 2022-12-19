import './App.css';

function AppJSX() {
  const name = "user";
  const list = ['apple', 'banana', 'cranberry'];
  return (
    <>
      <h1>Hello! {name}</h1>
      <h1>{`Hello! ${name}`}</h1>

      <ul>
        {list.map((item) =>
          <li>{item}</li>
        )}
      </ul>
    </>
  );
}

export default AppJSX;
