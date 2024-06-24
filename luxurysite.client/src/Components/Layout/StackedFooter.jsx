import styles from './StackedFooter.module.css'

function StackedFooter({ children }) {
  return (
      <div className={styles.stackedFooter }>
          { children }
      </div>
  );
}

export default StackedFooter;