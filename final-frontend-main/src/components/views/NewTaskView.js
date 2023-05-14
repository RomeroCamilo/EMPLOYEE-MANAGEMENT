

const NewTaskView = ({ handleChange, handleSubmit, error }) => {
  return (
    <div className="root">
      <div className="formContainer">
        <div className="formTitle">
          <h2
            style={{
              fontWeight: "bold",
              fontFamily: "Courier, sans-serif",
              fontSize: "20px",
              color: "#11153e",
            }}
          >
            New Task
          </h2>
        </div>
        <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Description:
          </label>
          <input type="text" name="description" onChange={handleChange} />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Priority:
          </label>
          <input type="text" name="priority" onChange={handleChange} />
          <br />
          <br />

          <label style={{ color: "#11153e", fontWeight: "bold" }}>
            Is Complete:
          </label>
          <input
            type="checkbox"
            name="isComplete"
            onChange={handleChange}
            value={true}
          />
          <br />
          <br />

          <button type="submit">Submit</button>
          <br />
          <br />
        </form>
        {error !== "" && <p>{error}</p>}
      </div>
    </div>
  );
};

export default NewTaskView;