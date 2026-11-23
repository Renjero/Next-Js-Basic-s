// Dynamic Routes

type User = {
  id: number;
  name: string;
  email: string;
  bio?: string;
};

type ProfileProps = {
  params: Promise<{ name: string }>;
};

export default async function ProfilePage({ params }: ProfileProps) {
  const user: User[] = [
    {
      id: 1,
      name: "Rohan",
      email: "rohan@gmail.com",

      bio: "Frontend Developer",
    },
    {
      id: 2,
      name: "Neha",
      email: "neha@gmail.com",

      bio: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Ashish",
      email: "ashish@gmail.com",

      bio: "Backend Developer",
    },
    {
      id: 4,
      name: "Priya",
      email: "priya@gmail.com",

      bio: "Student and Programmer",
    },
    {
      id: 5,
      name: "Rahul",
      email: "rahul@gmail.com",

      bio: "Full Stack Developer",
    },
  ];

  const pageparams = await params;
  const username = pageparams.name;

  const userr = user.find(
    (uuser) => uuser.name.toLowerCase() === username.toLowerCase(),
  );

  if (!userr) {
    return <h1>User Not Found</h1>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>ID: {userr.id}</p>
      <p>Name: {userr.name}</p>
      <p>Email: {userr.email}</p>
      <p>Bio: {userr.bio || "No bio available"}</p>
    </div>
  );
}
