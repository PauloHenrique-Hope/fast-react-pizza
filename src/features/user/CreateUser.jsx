import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      className="flex flex-col justify-center items-center gap-5"
      onSubmit={handleSubmit}
    >
      <p className="text-xl text-center sm:text-2xl">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className="pl-2 py-2 shadow-lg bg-gray-100 text-gray-800 placeholder:text-gray-500 sm:text-xl sm:pl-3 sm:py-3"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== "" && (
        <div>
          <button>Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
