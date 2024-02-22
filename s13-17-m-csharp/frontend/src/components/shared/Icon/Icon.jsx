import style from './Icon.module.css'

const Icon = () => {
    return (
        <div className={style.iconContainer}>
            <div className={style.iconDiv}>
                <a href="https://wa.me/3416851106" rel="noopener noreferrer" target="_blank">
                    <img className={style.iconImg} src="WhatsApp.svg" alt="whatsapp icon" />
                </a>
            </div>
        </div>
    )
}

export default Icon