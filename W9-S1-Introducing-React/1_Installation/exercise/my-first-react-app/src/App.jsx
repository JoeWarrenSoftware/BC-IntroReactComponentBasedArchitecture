import './App.css'
import Student from './components/Student'

function App() {

  const myName = 'Joe';

  const students = ["Joe", "Matthew", "Yann"]

  // This is a comment outside of the JSX section

  return (
    <>
      <div>
        My name is {myName}
        {/* This is comment code inside the JSX section */}
        {/* This mapping function transforms an array into an array of divs, using a for loop */}
        {students.map((student) => (          
          <Student key={student} studentName={student} age="30" />
        ))}
      </div>
    </>
  )
}

export default App
