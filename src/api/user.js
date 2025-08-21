export default function handler(req, res) {
  const users = [
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
    {
      id: "6069",
      username: "kk",
      Useremail: "kk@gmail.com",
      UserPassword: "kk",
    },
  ];

  res.status(200).json(users);
}
