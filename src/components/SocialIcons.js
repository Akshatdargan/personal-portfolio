const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.icon}>
      <a className="icon" style={styles.icon} href="https://github.com/Akshatdargan">
        <i className="fa-brands fa-github" aria-hidden="true" title="Akshat's github profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/akshat-dargan-b99684218">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Akshat's LinkedIn Profile"></i>
      </a>
     
    </div>
  );
};

export default SocialIcons;
