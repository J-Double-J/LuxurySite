import woman from '../assets/blackwoman_showing_off_watch.jpg'
import styles from './FeaturedBanner.module.css'

function FeaturedBanner() {
    return (
        <div className={styles.banner }>
            <img src={woman} alt="Woman showing off our new signature rose gold watch." />
            <aside>
                <p>Introducing our newest collection -</p>
                <p>Serenity</p>
            </aside>
      </div>

  );
}

export default FeaturedBanner;