import { useState } from "react";

const TableSet = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    password: "",
  });
  const [isEdited, setisEdited] = useState(false);
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (isEdited) {
       setData((prevData) =>{
        prevData.map((item) =>
          item.id === formData.id ? { ...formData } : item
        )
    });
      setisEdited(false);
    } else {
      setData((prevData) => [
        ...prevData,
        { ...formData, id: prevData.length + 1 },
      ]);
    }
    setFormData({ id: "", name: "", email: "" });
  };

  const handleEdit = (item) => {
    setFormData(item);
    setisEdited(true);
  };
  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="name"
          onChange={handleChange}
          name="name"
          value={formData.name || ""}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={formData.email || ""}
          required
        />
        <button type="submit">{isEdited ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td onClick={() => handleEdit(item)}>Edit </td>
                <td onClick={() => handleDelete(item.id)}>Delete </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableSet;
