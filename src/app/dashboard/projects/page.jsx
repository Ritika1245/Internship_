import Image from "next/image";
import Link from "next/link";
import styles from "@/app/Components/dashboard/projects/projects.module.css";
import Search from "@/app/Components/dashboard/search/search";
import Pagination from "@/app/Components/dashboard/pagination/pagination";
import { fetchProjects } from "@/app/lib/data";
import { deleteProject } from "@/app/lib/actions";

const ProjectPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, projects } = await fetchProjects(q, page);
  console.log("projects------------")
  console.log(count)
  console.log(projects)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/projects/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Repository Name</td>
            <td>Owner</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>
                <div className={styles.project}>
                  <Image
                    src={"/noproject.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.projectImage}
                  />
                  {project.name}
                </div>
              </td>
              <td>{project.description}</td>
              <td>{project.repository_name}</td>
              <td>{project.repository_owner || "Owner"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/projects/${project._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form >
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProjectPage;

