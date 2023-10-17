const User = require("../models/user");
const Message = require("../models/message");

const jwt = require("jsonwebtoken");

// --------- registration of the user --------- //
const registerUser = async (req, res) => {
  const { name, email, password, image } = req.body;

  // create a new User object
  const newUser = new User({
    name,
    email,
    password,
    image,
  });

  try {
    await newUser.save();
  } catch (error) {
    console.log("Error registering user", err);
    res.status(500).json({ message: "Error registering the user!" });
  }

  //res.status(200).json({ message: "User registered successfully" });
  res.status(201).json({ user: newUser });
};

// --------- create a token for the user --------- //
const createToken = (userId) => {
  // Set the token payload
  const payload = {
    userId: userId,
  };

  // Generate the token with a secret key and expiration time
  const token = jwt.sign(payload, "Q$r2K6W8n!jCW%Zk", { expiresIn: "1h" });

  return token;
};

// --------- logging in of that particular user --------- //
const login = async (req, res) => {
  const { email, password } = req.body;
  let user;

  //check if the email and password are provided
  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and the password are required" });
  }

  try {
    user = await User.findOne({ email });
  } catch (error) {
    console.log("error in finding the user", error);
    res.status(500).json({ message: "Internal server Error!" });
  }
  if (user.password !== password) {
    return res.status(404).json({ message: "Invalid Password!" });
  } else {
    const token = createToken(user._id);
    res.status(200).json({ token });
  }
};

// --------- access all the users except the user who's is currently logged in! --------- //
const alllogedinUsers = async (req, res) => {
    const loggedInUserId = req.params.userId;
  
    User.find({ _id: { $ne: loggedInUserId } })
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((err) => {
        console.log("Error retrieving users", err);
        res.status(500).json({ message: "Error retrieving users" });
      });
  };

  //endpoint to send a request to a user
// const sendreq = async (req, res) => {
//     const { currentUserId, selectedUserId } = req.body;
  
//     try {
//       //update the recepient's friendRequestsArray!
//       await User.findByIdAndUpdate(selectedUserId, {
//         $push: { freindRequests: currentUserId },
//       });
  
//       //update the sender's sentFriendRequests array
//       await User.findByIdAndUpdate(currentUserId, {
//         $push: { sentFriendRequests: selectedUserId },
//       });
  
//       res.sendStatus(200);
//     } catch (error) {
//       res.sendStatus(500);
//     }
//   };
//endpoint to show all the friend-requests of a particular user
// const allFriendreq = async (req, res) => {
//     try {
//       const { userId } = req.params;
  
//       //fetch the user document based on the User id
//       const user = await User.findById(userId)
//         .populate("freindRequests", "name email image")
//         .lean();
  
//       const freindRequests = user.freindRequests;
  
//       res.json(freindRequests);
//     } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   };

//-------------#########################----------------------------------

  //endpoint to accept a friend-request of a particular person
const acceptFriendReq = async (req, res) => {
    try {
      const { senderId, recepientId } = req.body;
  
      //retrieve the documents of sender and the recipient
      const sender = await User.findById(senderId);
      const recepient = await User.findById(recepientId);

      if(!recepient.friends.includes(senderId)){

        sender.friends.push(recepientId);
        recepient.friends.push(senderId);

        await sender.save();
        await recepient.save();
        res.status(200).json({ message: "Friend Request accepted successfully" });

      }
      else{
        res.status(200).json({ message: "You allready have a chat with this user" });

      }
  
      
  
      // recepient.freindRequests = recepient.freindRequests.filter(
      //   (request) => request.toString() !== senderId.toString()
      // );
  
      // sender.sentFriendRequests = sender.sentFriendRequests.filter(
      //   (request) => request.toString() !== recepientId.toString
      // );
  
      

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  //endpoint to access all the friends of the logged in user!
const allFriends = async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findById(userId).populate(
        "friends",
        "name email image"
      );
      const acceptedFriends = user.friends;
      res.json(acceptedFriends);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  

  ///endpoint to get the userDetails to design the chat Room header
const getUserdetails = async (req, res) => {
    try {
      const { userId } = req.params;
  
      //fetch the user data from the user ID
      const recepientId = await User.findById(userId);
  
      res.json(recepientId);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  

  // const friend_requests_sent = async(req,res) => {
  //   try{
  //     const {userId} = req.params;
  //     const user = await User.findById(userId).populate("sentFriendRequests","name email image").lean();
  
  //     const sentFriendRequests = user.sentFriendRequests;
  
  //     res.json(sentFriendRequests);
  //   } catch(error){
  //     console.log("error",error);
  //     res.status(500).json({ error: "Internal Server" });
  //   }
  // }
  
  // const friends_uaserid = (req,res) => {
  //   try{
  //     const {userId} = req.params;
  
  //     User.findById(userId).populate("friends").then((user) => {
  //       if(!user){
  //         return res.status(404).json({message: "User not found"})
  //       }
  
  //       const friendIds = user.friends.map((friend) => friend._id);
  
  //       res.status(200).json(friendIds);
  //     })
  //   } catch(error){
  //     console.log("error",error);
  //     res.status(500).json({message:"internal server error"})
  //   }
  // }

module.exports = {
  registerUser,
  login,
  alllogedinUsers,
  // sendreq,
  // allFriendreq,
  acceptFriendReq,
  allFriends,
  // postmessage,
  getUserdetails,
  // getMessages,
  // deleteMessage,
  // friend_requests_sent,
  // friends_uaserid
};
