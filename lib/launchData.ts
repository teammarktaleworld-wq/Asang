// launchData.ts — All user data for ASANG Brand Launch page

export interface UserComment {
  avatar: string;
  name: string;
  city: string;
  message: string;
  type: "greeting" | "emoji" | "question" | "congrats" | "comment";
}

export const LAUNCH_COMMENTS: UserComment[] = [
  // ── Greetings ──────────────────────────────────────────────────────────────
  { avatar: "🟠", name: "Priya Sharma",       city: "Mumbai",     message: "Hi everyone! So excited to be here! 👋",                             type: "greeting" },
  { avatar: "🟡", name: "Arjun Mehta",        city: "Delhi",      message: "Helloo!! Finally the day is here 🎉",                                type: "greeting" },
  { avatar: "🔵", name: "Sneha Patel",        city: "Surat",      message: "Hi ASANG!! Watching from Surat 🙌",                                  type: "greeting" },
  { avatar: "🟢", name: "Rahul Verma",        city: "Ahmedabad",  message: "Hello from Ahmedabad! Big fan 🌟",                                   type: "greeting" },
  { avatar: "🟣", name: "Kavya Nair",         city: "Kochi",      message: "Hi hi hi!! Watching from Kochi 🥰",                                  type: "greeting" },
  { avatar: "🟤", name: "Rohit Gupta",        city: "Jaipur",     message: "Heyyyy! ASANG fans from day 1 here 🙏",                              type: "greeting" },
  { avatar: "🔴", name: "Aditi Bose",         city: "Kolkata",    message: "Nomoshkar from Kolkata! 🌸 So happy to be here",                     type: "greeting" },
  { avatar: "🟠", name: "Karthik Subramani",  city: "Chennai",    message: "Vanakkam ASANG! Watching live from Chennai 🙏",                      type: "greeting" },
  { avatar: "🟡", name: "Ishaan Kapoor",      city: "Chandigarh", message: "Finally!! Was waiting for this day 🎊",                              type: "greeting" },
  { avatar: "🟢", name: "Riya Menon",         city: "Trivandrum", message: "Hi from Kerala! Love what ASANG is doing ❤️",                       type: "greeting" },

  // ── Congratulations ────────────────────────────────────────────────────────
  { avatar: "🔴", name: "Anjali Singh",       city: "Lucknow",    message: "Congratulations ASANG!! 🎊🎊🎊 So proud!",                           type: "congrats" },
  { avatar: "🟠", name: "Vikram Joshi",       city: "Pune",       message: "Badhai ho ASANG team! Bahut sundar! 🎉",                             type: "congrats" },
  { avatar: "🟡", name: "Meera Iyer",         city: "Bangalore",  message: "Congratulations!! This is absolutely incredible!! ✨",               type: "congrats" },
  { avatar: "🟢", name: "Deepak Rao",         city: "Hyderabad",  message: "Bohot achha kaam hai yaar 🔥🔥 Congrats!",                           type: "congrats" },
  { avatar: "🔵", name: "Pooja Krishnan",     city: "Bangalore",  message: "Congratulations ASANG 🙌 From Namma Bengaluru! ❤️",                 type: "congrats" },
  { avatar: "🟣", name: "Aakash Malhotra",    city: "Gurgaon",    message: "This launch is 🔥🔥 Congrats to the whole team!!",                   type: "congrats" },
  { avatar: "🟤", name: "Divya Reddy",        city: "Hyderabad",  message: "Telugu lo cheppali ante — Chala Baagundi ASANG! 🏆",                type: "congrats" },
  { avatar: "🔴", name: "Sameer Shaikh",      city: "Nagpur",     message: "Masha Allah what a brand launch! Congrats 🌙✨",                     type: "congrats" },
  { avatar: "🟠", name: "Nandita Pillai",     city: "Thiruvananthapuram", message: "Congratulations!! Kerala is proud of you ASANG 🌴❤️",        type: "congrats" },
  { avatar: "🟡", name: "Gaurav Saxena",      city: "Noida",      message: "Yaar yeh dekh ke dil khush ho gaya! Congrats ASANG 💛",             type: "congrats" },
  { avatar: "🟢", name: "Sweta Mishra",       city: "Bhopal",     message: "Hardik Shubhkamnayein ASANG Design Studio! 🙏🎊",                    type: "congrats" },
  { avatar: "🔵", name: "Pranav Desai",       city: "Vadodara",   message: "Congrats! ASANG is going to be massive! 🚀",                        type: "congrats" },

  // ── Emoji reactions ────────────────────────────────────────────────────────
  { avatar: "🔴", name: "Ritu Agarwal",       city: "Delhi",      message: "❤️❤️❤️❤️❤️❤️",                                                       type: "emoji" },
  { avatar: "🟤", name: "Siddharth Kumar",    city: "Patna",      message: "🔥🔥🔥 ASANG 🔥🔥🔥",                                               type: "emoji" },
  { avatar: "🟠", name: "Nisha Pillai",       city: "Kochi",      message: "✨✨✨✨✨✨✨✨",                                                      type: "emoji" },
  { avatar: "🟡", name: "Karan Bhatt",        city: "Rajkot",     message: "👏👏👏👏👏 Amazing!!",                                               type: "emoji" },
  { avatar: "🟢", name: "Simran Kaur",        city: "Amritsar",   message: "😍😍😍 Waah waah waah!",                                            type: "emoji" },
  { avatar: "🔵", name: "Manish Tiwari",      city: "Indore",     message: "🙌🙌🙌🙌🙌 ASANG rocks!!",                                          type: "emoji" },
  { avatar: "🟣", name: "Harleen Sethi",      city: "Ludhiana",   message: "💫💫💫💫 Speechless!!",                                             type: "emoji" },
  { avatar: "🟤", name: "Rohan Pillai",       city: "Mangalore",  message: "🏆🏆🏆 Champions!!",                                                type: "emoji" },

  // ── Brand comments ─────────────────────────────────────────────────────────
  { avatar: "🟣", name: "Shreya Desai",       city: "Ahmedabad",  message: "The logo is absolutely stunning. So minimal yet so powerful 😍",     type: "comment" },
  { avatar: "🟤", name: "Nikhil Jain",        city: "Jaipur",     message: "ASANG ka aesthetic is on another level entirely 🔥",                 type: "comment" },
  { avatar: "🔴", name: "Ananya Kapoor",      city: "Mumbai",     message: "This brand identity is so refined. Love every detail ✨",             type: "comment" },
  { avatar: "🟠", name: "Suresh Nambiar",     city: "Kozhikode",  message: "Interior design mein ASANG ka koi jawab nahi 🏆",                   type: "comment" },
  { avatar: "🟡", name: "Tanvi Bhat",         city: "Manipal",    message: "The colour palette is *chef's kiss* 🤌 So elegant",                 type: "comment" },
  { avatar: "🔵", name: "Lakshmi Menon",      city: "Chennai",    message: "Such an elegant launch. Worth every second of the wait! 🙏",         type: "comment" },
  { avatar: "🟣", name: "Parth Trivedi",      city: "Surat",      message: "ASANG is going to redefine Indian interiors forever 🏛️",            type: "comment" },
  { avatar: "🟢", name: "Ritika Malhotra",    city: "Delhi",      message: "The typography and visual language is so sophisticated 🖤",          type: "comment" },
  { avatar: "🔴", name: "Varun Nanda",        city: "Chandigarh", message: "Clean, minimal, powerful. This is what Indian design needed! 👌",   type: "comment" },
  { avatar: "🟠", name: "Poornima Venkat",    city: "Coimbatore", message: "As an interior designer myself, I'm floored by this 🙌",            type: "comment" },
  { avatar: "🟡", name: "Dev Chauhan",        city: "Udaipur",    message: "The spaces ASANG creates are poetry in concrete and light 🌿",       type: "comment" },
  { avatar: "🟤", name: "Shruti Bhosale",     city: "Nashik",     message: "This is what aspirational Indian design looks like. Stunning! ✨",   type: "comment" },

  // ── Questions ──────────────────────────────────────────────────────────────
  { avatar: "🟤", name: "Priyanka Sharma",    city: "Pune",       message: "When will ASANG take projects from Pune? 🤔 Would love to work with you!",                 type: "question" },
  { avatar: "🔴", name: "Harish Chandra",     city: "Lucknow",    message: "Do you take residential projects? My new home needs this touch! 🙋‍♂️",                   type: "question" },
  { avatar: "🟠", name: "Aishwarya Menon",    city: "Kochi",      message: "Can we book a design consultation online? 😊",                                            type: "question" },
  { avatar: "🟡", name: "Rajesh Batra",       city: "Delhi",      message: "What is the starting budget for an ASANG project? 🙏",                                    type: "question" },
  { avatar: "🟢", name: "Swati Kulkarni",     city: "Pune",       message: "Are you expanding to Pune and Delhi NCR soon? 🏙️",                                       type: "question" },
  { avatar: "🔵", name: "Dev Maheshwari",     city: "Jaipur",     message: "What software does ASANG use for visualisations? The renders are 🔥",                    type: "question" },
  { avatar: "🟣", name: "Trisha Chatterjee",  city: "Kolkata",    message: "Will ASANG publish a design book or lookbook? Would buy it instantly! 📚",               type: "question" },
  { avatar: "🟤", name: "Farhan Qureshi",     city: "Hyderabad",  message: "Do you collaborate with architects from other cities? 🏗️",                              type: "question" },
  { avatar: "🔴", name: "Megha Bhatia",       city: "Noida",      message: "How long does an ASANG interior project typically take? 🕐",                             type: "question" },
  { avatar: "🟠", name: "Vijay Menon",        city: "Thrissur",   message: "Do you do commercial spaces or only residential? 🏢",                                    type: "question" },
];

export const FLOAT_EMOJIS = ["❤️","🔥","✨","🙌","👏","😍","🎉","💛","🏆","🌟","💫","🥰","🎊","🫶","⭐"];

export const NOTIFS = [
  { emoji: "👥", text: "Someone from Mumbai just joined the launch" },
  { emoji: "🔥", text: "ASANG is trending in Architecture & Design" },
  { emoji: "✨", text: "Rahul Verma just shared this stream" },
  { emoji: "🎉", text: "500+ reactions in the last minute" },
  { emoji: "💛", text: "Priya Sharma and 38 others liked this" },
  { emoji: "🙌", text: "Viewer from Bangalore shared the stream" },
  { emoji: "🏆", text: "This launch is being watched across 12 cities" },
  { emoji: "🌟", text: "Meera Iyer just shared to WhatsApp" },
];