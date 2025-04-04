import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import dotenv from "dotenv";

dotenv.config();

const maleNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Arjun",
  "Rohan",
  "Krishna",
  "Kunal",
  "Raj",
  "Vikram",
  "Siddharth",
  "Manish",
  "Uday",
  "Kartik",
  "Suresh",
  "Amit",
  "Prakash",
  "Harsh",
  "Jayesh",
  "Varun",
  "Yash",
  "Deepak",
  "Sandeep",
  "Naveen",
  "Rahul",
  "Ravi",
];

const femaleNames = [
  "Aanya",
  "Diya",
  "Isha",
  "Kavya",
  "Pooja",
  "Ritika",
  "Sanya",
  "Neha",
  "Simran",
  "Tanya",
  "Meera",
  "Swati",
  "Anjali",
  "Bhavana",
  "Roshni",
  "Priya",
  "Sneha",
  "Nisha",
  "Suman",
  "Jhanvi",
  "Aditi",
  "Sakshi",
  "Payal",
  "Komal",
  "Chitra",
];

const genderPreferences = ["male", "female", "both"];

const bioDescriptors = [
  "Coffee lover",
  "Tech geek",
  "Foodie",
  "Traveler",
  "Bookworm",
  "Fitness freak",
  "Movie buff",
  "Music enthusiast",
  "Pet lover",
  "Nature explorer",
  "Startup enthusiast",
  "Gamer",
  "Yoga lover",
  "Night owl",
  "Early riser",
  "Adventurous spirit",
  "Poetry lover",
  "Anime fan",
  "Chess master",
  "Cricket fan",
];

const generateBio = () => {
  return bioDescriptors
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .join(" | ");
};

const generateRandomUser = (gender, index) => {
  const names = gender === "male" ? maleNames : femaleNames;
  const name = names[index];
  const age = Math.floor(Math.random() * (45 - 21 + 1) + 21);
  return {
    name,
    email: `${name.toLowerCase()}${age}@example.com`,
    password: bcrypt.hashSync("password123", 10),
    age,
    gender,
    genderPreference:
      genderPreferences[Math.floor(Math.random() * genderPreferences.length)],
    bio: generateBio(),
    image: `/${gender}/${index + 1}.jpg`,
  };
};

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await User.deleteMany({});

    const maleUsers = maleNames.map((_, i) => generateRandomUser("male", i));
    const femaleUsers = femaleNames.map((_, i) =>
      generateRandomUser("female", i)
    );

    const allUsers = [...maleUsers, ...femaleUsers];
    await User.insertMany(allUsers);
    console.log("Database seeded successfully with 50 Indian users");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.disconnect();
  }
};

seedUsers();
