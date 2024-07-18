import Head from 'next/head';
import Link from 'next/link';

const ProjectList = () => {
  const projects = [
    { name: 'Project 1', status: 'Running',projectType:'Building Ecommerce Platform', page: '/project-dashboard/1' },
    { name: 'Project 2', status: 'Completed',projectType:'Building Ecommerce Platform', page: '/project-dashboard/2' },
    { name: 'Project 3', status: 'Pending',projectType:'Solo Project', page: '/project-dashboard/3' },
    { name: 'Project 4', status: 'Running',projectType:'E Board Development', page: '/project-dashboard/4' },
  ];

  const getStatusColor = (status:string) => {
    switch (status) {
      case 'Running':
        return 'bg-green-500 animate-pulse';
      case 'Completed':
        return 'bg-blue-500';
      case 'Pending':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <Head>
        <title>Project List</title>
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-5 text-center">Project List</h1>
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project.name} className="flex justify-between items-center p-4 border-b border-gray-200 ">
            
               <div>
               <h2 className="text-2xl font-semibold">{project.name}</h2>
               <span>{project.projectType}</span>
               </div>
              
              <Link href={project.page} className="text-blue-500 hover:underline">Go to dashboard</Link>
              <span className={`inline-block px-3 py-1 rounded-full text-white ${getStatusColor(project.status)}`}>{project.status}</span>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectList;
