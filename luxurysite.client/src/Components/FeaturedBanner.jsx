import woman from '../assets/blackwoman_showing_off_watch.jpg'
import ActionLink from './Common/ActionLink';
import styles from './FeaturedBanner.module.css'

function FeaturedBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.imageFrame }>
                <img src={woman} alt="Woman showing off our new signature rose gold watch." />
            </div>
            <aside>
                <p>Introducing our newest collection&nbsp;&#8209;</p>
                <p>Serenity</p>
                <ActionLink text="Shop Now" href = "#0"/>
            </aside>
      </div>

  );
}

export default FeaturedBanner;