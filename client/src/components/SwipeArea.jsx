import TinderCard from "react-tinder-card";
import { useMatchStore } from "../store/useMatchStore";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaStar, FaHeart } from "react-icons/fa";

const SwipeArea = () => {
  const { userProfiles, swipeRight, swipeLeft } = useMatchStore();
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  const handleSwipe = (dir, user) => {
    setSwipeDirection(dir);
    setActiveUser(user);
    if (dir === "right") swipeRight(user);
    else if (dir === "left") swipeLeft(user);

    setTimeout(() => {
      setSwipeDirection(null);
      setActiveUser(null);
    }, 500);
  };

  return (
    <div className="relative flex justify-center items-center h-[34rem]">
      {userProfiles.map((user) => (
        <TinderCard
          className="absolute shadow-none"
          key={user._id}
          onSwipe={(dir) => handleSwipe(dir, user)}
          swipeRequirementType="position"
          swipeThreshold={100}
          preventSwipe={["up", "down"]}
        >
          <motion.div
            className="relative w-96 h-[32rem] select-none rounded-2xl overflow-hidden border border-gray-300 shadow-lg
                        bg-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            initial={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.3)",
            }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* User Image */}
            <figure className="relative h-[75%]">
              <img
                src={user.image || "/avatar.png"}
                alt={user.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full h-[50px] bg-gradient-to-t from-black to-transparent opacity-70"></div>

              {/* Buttons on Image */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
                <motion.button
                  className="p-3 bg-white bg-opacity-30 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition"
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleSwipe("left", user)}
                >
                  <FaTimes className="text-red-500 text-xl" />
                </motion.button>

                <motion.button
                  className="p-3 bg-white bg-opacity-30 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition"
                  whileTap={{ scale: 0.8 }}
                >
                  <FaStar className="text-blue-500 text-xl" />
                </motion.button>

                <motion.button
                  className="p-3 bg-white bg-opacity-30 backdrop-blur-md rounded-full shadow-lg hover:scale-110 transition"
                  whileTap={{ scale: 0.8 }}
                  onClick={() => handleSwipe("right", user)}
                >
                  <FaHeart className="text-green-500 text-xl" />
                </motion.button>
              </div>
            </figure>

            {/* User Details Inside Card - Left Aligned */}
            <div className="absolute bottom-0 w-full h-[25%] bg-white p-4">
              <h2 className="text-2xl font-bold text-gray-800 text-left">
                {user.name}, {user.age}
              </h2>
              <p className="text-gray-600 text-left">{user.bio}</p>
            </div>

            {/* Swipe Feedback Animation */}
            <AnimatePresence>
              {swipeDirection && activeUser?._id === user._id && (
                <motion.div
                  className={`absolute top-10 left-1/2 transform -translate-x-1/2 text-4xl font-bold ${
                    swipeDirection === "right"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.2 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  {swipeDirection === "right" ? "❤️" : "❌"}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </TinderCard>
      ))}
    </div>
  );
};

export default SwipeArea;
