import PropTypes from 'prop-types';

function Student(props) {

    return (
        <div className="student">
            <p>Name: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>

        </div>
    );
}
Student.PropTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "John Doe",
    age: 20,
    isStudent: false
}

export default Student;