import { useState } from "react";
const FormCreate = () => {
  const [student, setStudent] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    age: 15,
    group: "Front End",
  });
  const handleChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      if (response.status === 201) {
        alert("Student created successfully");
        setStudent({
          id: Math.floor(Math.random() * 1000),
          name: "",
          age: 15,
          group: "Front End",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2 className="text-center text-3xl">O`quvchi qo`shish</h2>
      <form
        className="flex py-5 gap-x-5 justify-center flex-wrap"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="w-[300px] px-2 py-1 rounded outline-none"
          onChange={handleChange}
          value={student.name}
          name="name"
          placeholder="Ismingizni Kiriting"
        />
        <select
          name="group"
          defaultValue={student.group}
          onChange={handleChange}
          className="rounded px-2 outline-none"
        >
          <option value="Front End">Front End</option>
          <option value="Kompyuter Savodxonligi">Kompyuter Savodxonligi</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 text-white p-2 px-5 outline-none rounded hover:bg-green-600 transition-all duration-300"
        >
          Qo`shish
        </button>
      </form>
    </>
  );
};
export default FormCreate;
