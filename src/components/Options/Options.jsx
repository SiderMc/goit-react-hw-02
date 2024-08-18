import css from "./Options.module.css"

export default function Options({totalFeedback,updateFeedback,resetFeedback}){
    return <div className={css.options__actions_btns}>
        <button onClick={()=>updateFeedback("good")}   className={css.options__btn}>Good</button>
        <button  onClick={()=>updateFeedback("neutral")} className={css.options__btn}>Neutral</button>
        <button  onClick={()=>updateFeedback("bad")} className={css.options__btn}>Bad</button>
        {totalFeedback !== 0 && <button  onClick={resetFeedback} className={css.options__btn}>Reset</button>}
    </div>
}