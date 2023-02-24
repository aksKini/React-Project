import React from 'react';

class StudentDetails extends React.Component {
  constructor(props) {
    super(props);

    // Initialize state with 5 student details
    this.state = {
      students: [
        { name: 'John Doe', age: 20, Role: 'Full Stack Dev' },
        { name: 'Jane Smith', age: 22, Role: 'Testing Eng' },
        { name: 'Bob Johnson', age: 21, Role: 'Java Dev' },
        { name: 'Alice Williams', age: 19, Role: 'Mern Stack Dev' },
        { name: 'Tom Davis', age: 20, Role: 'HR Manager' },
      ],
      currentIndex: 0, // Start with the first student
    };
  }

  handlePrevClick = () => {
    // Decrement the currentIndex, wrapping around to the end of the array if necessary
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + this.state.students.length - 1) % this.state.students.length
    }));
  }

  handleNextClick = () => {
    // Increment the currentIndex, wrapping around to the beginning of the array if necessary
    this.setState(prevState => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.students.length
    }));
  }

  render() {
    const { students, currentIndex } = this.state;
    const currentStudent = students[currentIndex];

    return (
        <div className="App">
      <div className="StudentDetails">
        <h2>Student Details</h2>
        <p><strong>Name</strong>: {currentStudent.name}</p>
        <p><strong>Age</strong>: {currentStudent.age}</p>
        <p><strong>Role</strong>: {currentStudent.Role}</p>
        <button onClick={this.handlePrevClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
      </div>
      </div>
    );
  }
}

export default StudentDetails;
