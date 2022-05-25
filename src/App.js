import "./styles.css";

const SaramTitle = () => {
  return (
    <>
      <h1>길동이의 율도국 풀코스</h1>
      <h2>폐업했습니다</h2>
    </>
  );
};

const Saram = (props) => {
  return (
    <>
      <h3>
        {props.wow}: {props.item}
      </h3>
    </>
  );
};

const SaramItems = ["망해요", "안해요", "안팔아요", "안사요", "아"];

export default function App() {
  return (
    <div className="App">
      <SaramTitle />
      {SaramItems.map((item) => {
        return <Saram wow="wow" item={item} />;
      })}
    </div>
  );
}
