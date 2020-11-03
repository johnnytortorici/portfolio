import styles from "../styles/Project.module.css";

const Project = ({ name, role, description, src, alt, href }) => {
  return (
    <div className={styles.project_container}>
      <img src={src} alt={alt} />
      <div className={styles.project_description}>
        <h4>{name}</h4>
        <p className={styles.role}>{role}</p>
        <p>{description}</p>
      </div>
      <div className={styles.project_link}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Project;
