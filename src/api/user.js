let users = [
  {
    id: "f44b",
    username: "xx",
    Useremail: "sqd@gmail.com",
    UserPassword: "xsce",
  },
  {
    id: "6acc",
    username: "jeeten",
    Useremail: "jeetenpanchal84@gmail.com",
    UserPassword: "wwfegregwwev",
  },
  {
    id: "4e76",
    username: "harish",
    Useremail: "md@gmail.com",
    UserPassword: "34hfged",
  },
  {
    id: "e622",
    username: "manyo",
    Useremail: "mn@gmail.com",
    UserPassword: "frw@nfrh",
  },
  { id: "6069", username: "kk", Useremail: "kk@gmail.com", UserPassword: "kk" },
];

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json(users);
  }

  if (req.method === "POST") {
    const { username, Useremail, UserPassword } = req.body;

    const exists = users.find((u) => u.Useremail === Useremail);
    if (exists) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" });
    }

    const newUser = {
      id: Date.now().toString(36), // simple unique id
      username,
      Useremail,
      UserPassword,
    };

    users.push(newUser);

    return res.status(201).json(newUser);
  }

  // Method not allowed
  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
