const names = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Vihaan",
  "Arjun",
  "Sai",
  "Reyansh",
  "Ayaan",
  "Krishna",
  "Ishaan",
  "Rohan",
  "Kabir",
  "Atharv",
  "Shivansh",
  "Ansh",
  "Om",
  "Yuvan",
  "Aryan",
  "Kartik",
  "Laksh",
  "Samar",
  "Rudra",
  "Dhruv",
  "Tanish",
  "Nirvaan",
  "Ranveer",
  "Devansh",
  "Param",
  "Harsh",
  "Neil",
  "Mehul",
  "Manav",
  "Rahul",
  "Sameer",
  "Jay",
  "Rajat",
  "Siddharth",
  "Vishal",
  "Nikhil",
  "Arnav",
  "Anaya",
  "Diya",
  "Isha",
  "Tara",
  "Meera",
  "Simran",
  "Kriti",
  "Avni",
  "Riya",
  "Priya",
  "Sanya",
  "Ira",
  "Aisha",
  "Naina",
  "Trisha",
  "Sneha",
  "Nandini",
  "Shruti",
  "Pooja",
  "Radhika",
];

const comments = [
  "This is awesome!",
  "Really helpful, thanks!",
  "I totally agree with you.",
  "Well explained.",
  "Could you elaborate more?",
  "Haha, that was funny!",
  "Nice work!",
  "Subscribed just for this!",
  "Thanks for sharing this info.",
  "This made my day!",
  "I didn’t understand that part.",
  "Keep it up!",
  "Where did you get this info?",
  "Wow, impressive!",
  "You're amazing!",
  "This is gold 🔥",
  "I was looking for this!",
  "Very informative.",
  "This helped me a lot.",
  "Is this still working?",
  "Waiting for your next post.",
  "That’s a new perspective.",
  "Mind blown 🤯",
  "Love this!",
  "Please make more like this.",
  "Not sure I agree, but interesting.",
  "So true!",
  "This deserves more likes.",
  "You saved my time!",
  "Thanks a ton!",
  "How did you do this?",
  "Legend!",
  "Bookmarking this!",
  "This is underrated.",
  "Anyone else here in 2025?",
  "You made it look easy.",
  "Can you help with this?",
  "Big fan of your work.",
  "I’m learning a lot from you.",
  "Respect 🙌",
  "Super useful!",
  "You're the best!",
  "Exactly what I needed!",
  "I tried this and it works.",
  "You're a lifesaver!",
  "Brilliant explanation.",
  "Where can I learn more?",
  "First time commenting here!",
  "Commenting to boost the algorithm 😅",
  "Who else thinks this is great?",
];

// Generate a random element from any array
const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

// Get a random name
const getRandomName = () => getRandomElement(names);

// Get a random comment
const getRandomComment = () => getRandomElement(comments);

const getRandomAvatar = () => {
  const id = Math.floor(Math.random() * 70) + 1;
  return `https://i.pravatar.cc/150?img=${id}`;
};

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findNthPrime(n) {
  let count = 0;
  let num = 1;
  while (count < n) {
    num++;
    if (isPrime(num)) {
      count++;
    }
  }
  return num;
}

export { getRandomName, getRandomComment, getRandomAvatar, findNthPrime };
