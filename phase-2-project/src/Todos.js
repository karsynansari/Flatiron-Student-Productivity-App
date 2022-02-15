import React from "react";

function Todos() {
  return (
    <div>
      <hi1>Add To-Do</hi1>
      <form>
        <div>
          <input type="text" name="task" placeholder="Task.." />
        </div>
        <div>
          <input type="date" name="date" placeholder="YYYY-MM-DD" />
        </div>
        <input type="checkbox" value="checked" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Todos;
