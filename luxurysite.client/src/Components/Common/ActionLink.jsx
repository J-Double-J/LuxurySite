import styles from './ActionLink.module.css'

function ActionLink({ text, href }) {
    // Div is needed for the ::after to be sized correctly.
    return (
      <div> 
          <a className = { styles.actionLink } href = { href }>{ text }</a>
      </div>
  );
}

export default ActionLink;