import css from "./Description.module.css"

export default function Description(){
    return <div className={css.description__text_content}>
    <h1 className={css.description__title}>Sip Happens Café</h1>
    <p className={css.description__text}>Please leave your feedback about our service by selecting one of the options below.</p>
</div>
}