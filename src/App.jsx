import StudentCard from "./components/StudentCard";
import FormCreate from "./components/FormCreate";
import Loading from "./components/Loading";
import ErrorComponent from "./components/Error";
import { useQuery } from "@tanstack/react-query";
import { getStudents } from "./api/Students.get";
function App() {
 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["students"],
    queryFn: getStudents,
  });
  return (
    <main className="bg-gray-200 h-screen">
      <div className="container mx-auto">
        <h2 className="text-green-500 text-center mb-10 text-4xl pt-5">
          IT-CENTER o`quvchilari{" "}
        </h2>
        <FormCreate />
        <div className="flex flex-wrap gap-5">
          {isLoading ? (
            <Loading />
          ) : isError ? (
            <ErrorComponent error={error} />
          ) : data?.length > 0 ? (
            data?.map((student, index) => (
              <StudentCard key={index} student={student} />
            ))
          ) : (
            <h2 className="text-center text-2xl w-full">Studentlar mavjud emas</h2>
          )}
        </div>
      </div>
    </main>
  );
}
export default App;
