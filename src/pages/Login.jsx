import { useState } from "react";

const Login = () => {
  const [name, setName] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!name) return alert("نام را وارد کنید");

    alert(name + " وارد شد!");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>ورود</h1>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="نام"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>ورود</button>
      </form>
    </div>
  );
};

export default Login;