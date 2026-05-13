import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    // SIMPLE LOGIN (accept ANY email/password)
    localStorage.setItem("user", JSON.stringify({ email }));

    navigate("/dashboard");
  };

  return (
    <div className="flex min-h-screen">
      
      {/* LEFT */}
      <div className="flex flex-1 flex-col items-center justify-center bg-[#f8f9ff] px-8">
        <div className="w-full max-w-md">

          <h1 className="text-3xl font-bold mb-6">
            MoringaTaskFlow
          </h1>

          <div className="bg-white p-8 rounded-lg shadow">

            <h2 className="text-2xl font-bold mb-4">Login</h2>

            <form onSubmit={handleLogin} className="space-y-4">

              <input
                className="w-full border p-3 rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                className="w-full border p-3 rounded"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className="w-full bg-indigo-600 text-white p-3 rounded"
                type="submit"
              >
                Login
              </button>

            </form>

          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hidden lg:flex flex-1 bg-indigo-600 text-white items-center justify-center">
        <h1 className="text-3xl font-bold">
          Manage Tasks Easily 🚀
        </h1>
      </div>

    </div>
  );
}