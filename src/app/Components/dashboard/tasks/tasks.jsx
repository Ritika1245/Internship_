import Image from "next/image";
import styles from "./tasks.module.css";

const formatDate = (date) => {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${day}.${month}.${year}`;
};

const Tasks = () => {
  const currentDate = formatDate(new Date());

  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} text-xl font-bold`}>Latest Tasks</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Task Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Due</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                /> */}
                Task 1
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>{currentDate}</td>
            <td>19.04.2024</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                /> */}
                Task 2
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>{currentDate}</td>
            <td>25.04.2024</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                /> */}
                Task 3
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>{currentDate}</td>
            <td>21.04.2024</td>
          </tr>
          <tr>
            <td>
              <div className={`${styles.user} text-lg`}>
                {/* <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                /> */}
                Task 4
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>{currentDate}</td>
            <td>01.04.2024</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;
