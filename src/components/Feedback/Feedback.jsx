import Notification from "../Notification/Notification";
import css from "./Feedback.module.css"

export default function FeedBack({feedback:{good,neutral,bad},totalFeedback}){
    const percentage = totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
    const percentageClass = percentage >= 75 
        ? css.good 
        : percentage >= 40 
        ? css.neutral 
        : css.bad;
    return (
        <div className={css.feedback}>
            {totalFeedback !== 0 ? (
                <>
                    <p className={css.feedback__text}><span className={css.good}>Good: </span> {good}</p>
                    <p className={css.feedback__text}><span className={css.neutral}>Neutral: </span> {neutral}</p>
                    <p className={css.feedback__text}><span className={css.bad}>Bad: </span> {bad}</p>
                    <p className={css.feedback__text}><span>Total: </span> {totalFeedback}</p>
                    <p className={`${css.feedback__text} ${percentageClass}`}>
                        <span>Positive feedback: </span> {percentage}%
                    </p>
                </>
            ) : (
                <Notification>There are no reviews yet. Be the first to leave feedback!</Notification>
            )}
        </div>
    );
}