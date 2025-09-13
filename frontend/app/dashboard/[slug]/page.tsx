import Link from "next/link";
interface Page {
  params: { slug: string };
}

const Page = ({ params }: Page) => {
  // Example patients data (replace later with API data)
  const patients = [
    { id: "1", name: "John Doe", age: 30 },
    { id: "2", name: "Jane Smith", age: 25 },
    { id: "3", name: "Alex Johnson", age: 40 },
  ];

  return (
    <div className="min-h-screen p-6 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-white">Dashboard</h1>
       <Link href='/newpatient'>
        <button className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition">
          + New Patient
        </button>
       </Link>
      </div>

      {/* Patients list */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {patients.map((patient) => (
          <Link href={`/patient/${patient.id}`}
            key={patient.id}
            className="p-4  rounded-lg shadow  bg-primary-400 hover:shadow-md transition border-2 border-amber-50"
          >
            <h2 className="text-lg font-medium text-black">{patient.name}</h2>
            <p className="text-black">Age: {patient.age}</p>
          </Link >
        ))}
      </div>
    </div>
  );
};

export default Page;
