import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [genderPreference, setGenderPreference] = useState("");

  const { signup, loading } = useAuthStore();

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        signup({ name, email, password, gender, age, genderPreference });
      }}
    >
      {/* NAME */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 font-semibold sm:text-sm "
          />
        </div>
      </div>

      {/* EMAIL */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="appearance-none block w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 font-semibold sm:text-sm "

          />
        </div>
      </div>

      {/* PASSWORD */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-300"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
             className="appearance-none block w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 font-semibold sm:text-sm "

          />
        </div>
      </div>

      {/* AGE */}
      <div>
        <label
          htmlFor="age"
          className="block text-sm font-medium text-gray-300"
        >
          Age
        </label>
        <div className="mt-1">
          <input
            id="age"
            name="age"
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="18"
            max="120"
             className="appearance-none block w-full px-3 py-2 border bg-transparent border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 font-semibold sm:text-sm "

          />
        </div>
      </div>

      {/* GENDER */}
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Your Gender
        </label>
        <div className="mt-2 flex gap-2">
          <div className="flex items-center">
            <input
              id="male"
              name="gender"
              type="checkbox"
              checked={gender === "male"}
              onChange={() => setGender("male")}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label htmlFor="male" className="ml-2 block text-sm text-gray-400">
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="female"
              name="gender"
              type="checkbox"
              checked={gender === "female"}
              onChange={() => setGender("female")}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label
              htmlFor="female"
              className="ml-2 block text-sm text-gray-400"
            >
              Female
            </label>
          </div>
        </div>
      </div>

      {/* GENDER PREFERENCE */}
      <div>
        <label className="block text-sm font-medium text-gray-300">
          Prefer Me
        </label>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <input
              id="prefer-male"
              name="gender-preference"
              type="radio"
              value="male"
              checked={genderPreference === "male"}
              onChange={(e) => setGenderPreference(e.target.value)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
            />
            <label
              htmlFor="prefer-male"
              className="ml-2 block text-sm text-gray-400"
            >
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="prefer-female"
              name="gender-preference"
              type="radio"
              value="female"
              checked={genderPreference === "female"}
              onChange={(e) => setGenderPreference(e.target.value)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300"
            />
            <label
              htmlFor="prefer-female"
              className="ml-2 block text-sm text-gray-400"
            >
              Female
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="prefer-both"
              name="gender-preference"
              type="radio"
              value="both"
              checked={genderPreference === "both"}
              onChange={(e) => setGenderPreference(e.target.value)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 "
            />
            <label
              htmlFor="prefer-both"
              className="ml-2 block text-sm text-gray-400"
            >
              Both
            </label>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            loading
              ? "bg-pink-400 cursor-not-allowed"
              : "bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          }`}
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </div>
    </form>
  );
};
export default SignUpForm;
