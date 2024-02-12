import AddTask from "./components/Add Task/AddTask"
import Quote from "./components/Quote/Quote"

function App() {

  return (
    <>
    <div className="max-w-7xl mx-auto p-10 border-2 rounded-md mt-10">
      
      <div className="flex gap-10">
        {/* Task add section */}
        <section className="flex-1 bg-gray-200 p-5 rounded-md">
          <AddTask></AddTask>
        </section>

        {/* Quote of the day section */}
        <section className="flex-1 bg-gray-200 p-5 rounded-md">
          <Quote></Quote>
        </section>
      </div>
      
    </div>
    </>
  )
}

export default App
