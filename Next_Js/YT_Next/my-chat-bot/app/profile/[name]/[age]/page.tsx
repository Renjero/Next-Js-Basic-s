type ProfileProps = {
  params: Promise<{
    name: string;
    age: string;
  }>;
};

export default async function ProfilePageAge({ params }: ProfileProps) {
  const PageParams = await params;

  const username = PageParams.name;
  const agee = PageParams.age;

  type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    bio: string;
  };

  const users: User[] = [
    {
      id: 1,
      name: "Rohan",
      email: "rohan@gmail.com",
      age: 21,
      bio: "Frontend Developer",
    },
    {
      id: 2,
      name: "Neha",
      email: "neha@gmail.com",
      age: 22,
      bio: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Ashish",
      email: "ashish@gmail.com",
      age: 24,
      bio: "Backend Developer",
    },
    {
      id: 4,
      name: "Priya",
      email: "priya@gmail.com",
      age: 20,
      bio: "Student and Programmer",
    },
    {
      id: 5,
      name: "Rahul",
      email: "rahul@gmail.com",
      age: 25,
      bio: "Full Stack Developer",
    },
  ];

const user = users.find(
  (user) =>
    user.name.toLowerCase() === username.toLowerCase() &&
    user.age.toString() === agee
);

  if (!user) {
    return <h1>User Not Found!</h1>;
  }

  return (
    <div>
      <h1>Profile Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}