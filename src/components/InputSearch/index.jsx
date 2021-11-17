import styles from './input-search.module.scss';

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
        <input type="text" name="search-location" id="search-location" placeHolder="Digite o nome de uma cidade" />
      </div>
    </>
  )
}