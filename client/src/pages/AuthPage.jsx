import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/png1.jpg')" }} // ✅ Background Image Added
    >
      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <div className="relative z-10 w-full max-w-md">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-white mb-6"
        >
          {isLogin ? "Sign in to Swipe" : "Create a Swipe Account"}
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={isLogin ? "login" : "signup"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-lg shadow-lg rounded-xl p-8 border border-white/20"
          >
            {isLogin ? <LoginForm /> : <SignUpForm />}

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-300">
                {isLogin ? "New to Swipe?" : "Already have an account?"}
              </p>
              <button
                onClick={() => setIsLogin((prev) => !prev)}
                className="mt-2 text-pink-400 hover:text-pink-500 font-medium transition"
              >
                {isLogin ? "Create a new account" : "Sign in to your account"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AuthPage;
