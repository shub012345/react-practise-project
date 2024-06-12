import  { useState } from "react";

const Practisetable = () => {
  const [formData, setFormData] = useState({
    id: "",
    email: "",
  });
  const [data, setData] = useState([

  ]);
  const [edited, setEdited] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (edited) {
       setData((prevData) =>
        prevData?.map((item) =>
          item.id === formData.id ? { ...formData } : item
        )
    );
      setEdited(false);
    } else {
      setData((prevData) => [
        ...prevData,
        { ...formData, id: prevData.length + 1 },
      ]);
    }
    setFormData({ id: "", email: "" });
  };


  const handleEdit = (item) => {
    setFormData(item);
    setEdited(true);
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <input
          placeholder="email"
          type="text"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
          <button type="submit">{edited ? "Update" : "Submit"}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th> Actions</th>
          </tr>
        </thead>
        <tbody>
        {data?.map((item) => {
            return (
              <tr key={item.id}>
               
                <td>{item.email}</td>
                <td onClick={() => handleEdit(item)}>Edit </td>
                {/* <td onClick={() => handleDelete(item.id)}>Delete </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Practisetable;
