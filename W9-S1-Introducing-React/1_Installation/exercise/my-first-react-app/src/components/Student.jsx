const Student = ({studentName, age}) => {

    console.log(`"New student ${studentName} found"`)

  return (
    <div>The Current student is: {studentName} and is {age} years old</div>
  )
}

export default Student