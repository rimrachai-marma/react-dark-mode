import styles from './Hello.module.css';


function Hello() {
  return (
    <div className={styles.hello}>
      <h2>Hi there, <br />
      I'm Rimrachai Marma
      <br />
      </h2>
      <span>Full Stack Web Developer</span>
    </div>
  );
}

export default Hello;
