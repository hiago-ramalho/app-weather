import styles from './input-search.module.scss';
import SearchIcon from '../../assets/search.svg';

export default function InputSearch() {
  return (
    <>
      <div className={styles.inputContainer} >
        <label
          className={styles['sr-only']}
          htmlFor="search-location"
        >
          Digite o nome de uma cidade:
        </label>
        <div className={styles['input-group']} >
          <input 
            type="text" 
            name="search-location" 
            id="search-location" 
            placeholder="Digite o nome de uma cidade"
          />

          <button>
            <img src={SearchIcon} alt="Search" title="Search" />
          </button>
        </div>
      </div>
    </>
  )
}