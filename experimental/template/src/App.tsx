import "./styles.css";

let appRender = 0;
export default function App() {
  console.log(`appRender = ${appRender++}`);

  return <div>Hello World</div>;
}
