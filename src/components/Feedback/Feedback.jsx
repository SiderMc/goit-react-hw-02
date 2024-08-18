import css from "./Feedback.module.css"

export default function FeedBack({feedback:{good,neutral,bad},totalFeedback,positiveFeedback}){
    const percentageClass = positiveFeedback >= 75 
        ? css.good 
        : positiveFeedback >= 40 
        ? css.neutral 
        : css.bad;
    return (
        <div className={css.feedback}>
                    <p className={css.feedback__text}><span className={css.good}>Good: </span> {good}</p>
                    <p className={css.feedback__text}><span className={css.neutral}>Neutral: </span> {neutral}</p>
                    <p className={css.feedback__text}><span className={css.bad}>Bad: </span> {bad}</p>
                    <p className={css.feedback__text}><span>Total: </span> {totalFeedback}</p>
                    <p className={`${css.feedback__text} ${percentageClass}`}>
                        <span>Positive feedback: </span> {positiveFeedback}%
                    </p>
        </div>
    );
}