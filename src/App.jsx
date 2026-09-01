import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { createContext } from "react";
export const AppContext = createContext();
import router from "./router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currUser,setCurrUser] = useState({})
  return (
    <AppContext.Provider value={{ users, setUsers,currUser,setCurrUser }}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

// import React, { useState } from "react";
// import Login from "./Login";
// import Register from "./Register";
// import { createContext } from "react";
// export const AppContext= createContext()

// export default function App() {
//   const [users,setUsers] = useState([])
//   return (
//     <AppContext.Provider value={{users,setUsers}}>
//       <Register />
//       <hr />
//       <Login />
//     </AppContext.Provider>
//   );
// }

// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [message, setMessage] = useState();
//   const handleLogin = () => {
//     if (email === "john@gmail.com" && password === "1234") {
//       setMessage("Welcome!");
//     } else {
//       setMessage("Access Denied");
//     }
//   };
//   return (
//     <div>
//       <p>
//         <input
//           type="text"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//       </p>
//       <button onClick={handleLogin}>Login</button>
//       <hr />
//       {message}
//     </div>
//   );
// }

// import React, { useState,useContext } from "react";
// import { createContext } from "react";

// export const AppContext = createContext();

// function Child1() {
//   const {name,setName} = useContext(AppContext)
//   const handleUpdate = () => {
//     setName("Amy");
//   };
//   return (
//     <div>
//       Child 1 - {name} <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// function Child2() {
//   const {name,setName} = useContext(AppContext)
//   const handleUpdate = () => {
//     setName("Amy");
//   };
//   return (
//     <div>
//       Child 2 - {name} <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// export default function App() {
//   const [name, setName] = useState("John");
//   const handleUpdate = () => {
//     setName("Amy");
//   };
//   return (
//     <div>
//       <p>
//         App-{name}
//         <button onClick={handleUpdate}>Update</button>
//       </p>
//       <AppContext.Provider value={{ name, setName }}>
//         <Child1 />
//         <Child2 />'
//       </AppContext.Provider>
//     </div>
//   );
// }

// import React, { useState } from 'react'

// function Child1({name}){
//   return <div>Child 1 - {name}</div>
// }

// function Child2({name}){
//   return <div>Child 2 - {name}</div>
// }

// export default function App() {
//   const [name,setName] = useState("John")
// const handleUpdate = () => {
//   setName("Amy")
// }
//   return (
//     <div>
//       <p>App-{name}<button onClick={handleUpdate}>Update</button></p>
//       <Child1 name={name}/>
//       <Child2 name={name}/>'
//     </div>
//   )
// }

// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   const decrement = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       {count}
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

// import React from 'react'
// import { useState } from 'react'

// export default function App() {
//   const [count, setCount] = useState(0)
//   const increment = () => {
//     setCount(count+1)
//   }
//   return (
//     <div>
//       {count}
//       <p>
//         <button onClick={increment}>Click</button>
//       </p>
//     </div>
//   )
// }

// import React from "react";

// import "./App.css"
// export default function App() {
//   const products = [
//     {
//       id: 1,
//       name: "Product 1",
//       price: 100,
//       description:"This is the description of the product",
//       imageUrl: "https://mystore37.vercel.app/p1.png",
//     },
//     {
//       id: 2,
//       name: "Product 2",
//       price: 120,
//        description:"This is the description of the product",
//       imageUrl: "https://mystore37.vercel.app/p2.png",
//     },
//     {
//       id: 3,
//       name: "Product 3",
//       price: 140,
//        description:"This is the description of the product",
//       imageUrl: "https://mystore37.vercel.app/p3.png",
//     },
//   ];
//   return (
//     <div className="row">
//       {products.map((product) => (
//         <div key={product.id}>
//           <img src={product.imageUrl} width={300} />
//           <h1>{product.name}</h1>
//           <p>{product.description}</p>
//           <h2>${product.price}</h2>
//           <button>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React from 'react'

// export default function App() {
//   const products = ["Product 1","Product 2","Product 3"]
//   return (
//     <div>
//       <ol>
//       {products.map(product => (
//         <li key={product}>{product}</li>
//       ))}
//       </ol>
//     </div>
//   )
// }

// import React from "react";

// function Pass() {
//   return <h3>Pass</h3>;
// }

// function Fail() {
//   return <h3>Fail</h3>;
// }

// function Result({ score }) {
//   if (score > 60) {
//     return <Pass />;
//   } else {
//     return <Fail />;
//   }
// }

// export default function App() {
//   let score = 90;
//   return <Result score={score} />;
// }

// import React from "react";

// function Pass() {
//   return <h3>Pass</h3>;
// }

// function Fail() {
//   return <h3>Fail</h3>;
// }

// function Result({ score }) {
//   return score > 60 ? <Pass /> : <Fail />;
// }

// export default function App() {
//   let score = 90;
//   return <Result score={score} />;
// }

// import React from 'react'
// export default function App() {
//   const handleClick = (name) => {
//     alert("Hello " + name)
//   }
//   return (
//     <div>
//       <button onClick={()=>handleClick("John")}>Click</button>
//     </div>
//   )
// }

// import React from 'react'

// export default function App() {
//   const handleClick = () => {
//     alert("Hello")
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// import React from "react";
// import "./App.css"

// export default function App() {
//   return (
//     <div>
//       <h1 className="header">
//         My Application
//       </h1>
//     </div>
//   );
// }

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
