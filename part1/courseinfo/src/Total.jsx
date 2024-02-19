const countExersices = (parts) => {
  let totalExercises = 0;

  parts.forEach((part) => {
    totalExercises += part.exercises;
  });

  return totalExercises;
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {countExersices(props.parts)}</p>
    </div>
  );
};

export default Total;
