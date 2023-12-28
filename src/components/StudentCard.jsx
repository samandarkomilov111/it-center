import  PropTypes  from "prop-types";
const tg =
  "https://static.vecteezy.com/system/resources/previews/026/127/328/non_2x/telegram-logo-telegram-icon-transparent-telegram-icon-rounded-free-png.png";
  const StudentCard = ({ student }) => {
  return (
    <div className="shadow bg-gray-300 p-10 relative rounded w-[calc(33%_-_20px)] 2xl:w-[calc(25%_-_20px)]">
      <span className="absolute top-0 right-0 text-xs bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-all duration-300 cursor-pointer">
        {student.group}
      </span>
      <img
        className="w-20 mx-auto"
        src="https://cdn1.iconfinder.com/data/icons/project-management-8/500/worker-512.png"
        alt="project-management"
      />
      <div className="text-center">
        <h2>{student.name}</h2>
        <div className="flex justify-center">
          <a href="">
            <img className="w-6 object-cover" src={tg} alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};
StudentCard.propTypes = {
  student: PropTypes.object 
}
export default StudentCard;
