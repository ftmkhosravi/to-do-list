import Todo from "./component/Todo";

function App() {
  return (
    <div className="App">
      <h1 className="header">To Do List </h1>
      <Todo title="Sleeping" moreabout="11:00 PM - 6:30 AM" />
      <Todo
        title="WorkOut"
        moreabout="Legs workout – Leg Extensions – target 4 sets of 10 reps"
      />
      <Todo title="Meeting" moreabout="12:00 AM - 1:00 PM Interview & Meeting " />
      <Todo title="Check email" moreabout=" Check my work Emails" />
      <Todo
        title="Studing"
        moreabout=" 10:00 AM _ 11:30 AM English
       4:00 PM _ 5:30 PM react course"
      />
    </div>
  );
}

export default App;
