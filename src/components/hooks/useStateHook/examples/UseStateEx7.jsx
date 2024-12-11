import React, { useState } from "react";

const UseStateEx7 = () => {
  //useState with array of objects
  let arr = [
    {
      id: 1,
      name: "Mahesh Mohite",
      age: 20,
      grade: "A",
      subjects: ["Mathematics", "Physics", "Chemistry"],
      image:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 19,
      grade: "B+",
      subjects: ["Biology", "English", "History"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 21,
      grade: "A-",
      subjects: ["Computer Science", "Mathematics", "Statistics"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 22,
      grade: "B",
      subjects: ["Philosophy", "Psychology", "Sociology"],
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 20,
      grade: "A+",
      subjects: ["Economics", "Political Science", "Mathematics"],
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 6,
      name: "David Wilson",
      age: 18,
      grade: "B",
      subjects: ["History", "Geography", "English"],
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      age: 21,
      grade: "A",
      subjects: ["Physics", "Computer Science", "Mathematics"],
      image:
        "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 8,
      name: "James Garcia",
      age: 20,
      grade: "B-",
      subjects: ["Chemistry", "Biology", "English"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 9,
      name: "Olivia Lee",
      age: 19,
      grade: "A-",
      subjects: ["Political Science", "History", "Sociology"],
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=200&h=200",
    },
    {
      id: 10,
      name: "Liam Hernandez",
      age: 22,
      grade: "B+",
      subjects: ["Mathematics", "Statistics", "Economics"],
      image:
        "https://images.unsplash.com/photo-1552058544-f2b08422138a?crop=faces&fit=crop&w=200&h=200",
    },
  ];

  //   {
  //     id: 1,
  //     name: "John Doe",
  //     age: 20,
  //     grade: "A",
  //     subjects: ["Mathematics", "Physics", "Chemistry"],
  //   }

  let [student, setStudent] = useState(arr);

  return (
    <div>
      <div>Ex 7:</div>
      <div className="grid grid-cols-5">
        {student.map((element, index) => (
          <div key={index}>
            <div>
              <br />
              <div>
                <img className="rounded-full" src={element.image} alt="" />
              </div>
              <div>Id: {element.id}</div>
              <div>Name: {element.name}</div>
              <div>Age: {element.age}</div>
              <div>Grade: {element.grade}</div>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseStateEx7;
