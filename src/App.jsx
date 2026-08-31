import React from "react";
import "./App.css"

export default function App() {
  return (
    <div>
      <h1 className="header">
        My Application
      </h1>
    </div>
  );
}

// import React from "react";

// export default function App() {
//   return (
//     <div>
//       <h1 style={{ color: "blue", backgroundColor: "Orange" }}>
//         My Application
//       </h1>
//     </div>
//   );
// }




// import React from "react";

// function Child1() {
//   return <div>Child 1</div>;
// }

// function Child2() {
//   return <div>Child 2</div>;
// }

// function Home({children}) {
//   return <div style={{ color: "blue" }}>{children}</div>;
// }

// export default function App() {
//   return (
//     <Home>
//       <Child1 />
//       <Child2 />
//     </Home>
//   );
// }

// function Greet({name,age}) {
//   return <h2>Hello {name}-{age}</h2>;
// }

// export default function App() {
//   return (
//     <div>
//       <Greet name="Amy" age={21} />
//     </div>
//   );
// }

// import React from "react";

// function Greet(props) {
//   return <h2>Hello {props.name}-{props.age}</h2>;
// }

// export default function App() {
//   return (
//     <div>
//       <Greet name="Amy" age={21} />
//     </div>
//   );
// }

// import Header from "./Header";
// import Footer from "./Footer"
// import Home from "./Home"

// function App() {
//   return (
//     <>
//       <Header />
//       <Home/>
//       <Footer/>
//    </>
//   )
// }

// export default App;
