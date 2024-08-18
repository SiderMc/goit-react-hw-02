import { useEffect, useState } from "react"
import Description from "../Description/Description"
import Options from "../Options/Options"
import FeedBack from "../Feedback/Feedback"
import Notification from "../Notification/Notification"
import css from "./App.module.css"

export default function App(){
    const initialState = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    const [feedback, setFeedback] = useState(() => {
        const savedFeedback = window.localStorage.getItem("feedback");
        return savedFeedback ? JSON.parse(savedFeedback) : initialState;
    });
    
    useEffect(()=>{window.localStorage.setItem("feedback",JSON.stringify(feedback))
    },[feedback])
    
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback  = totalFeedback ? Math.round((feedback.good / totalFeedback) * 100) : 0;

    const resetFeedback = ()=>{
        return setFeedback(initialState)
    }
    const updateFeedback = feedbackType => {
        return setFeedback({...feedback,[feedbackType]:feedback[feedbackType]+1})
    }
    return <div className={css.wrapper}>
            <section className={css.section}>
              <div className={css.container}>
                <div className={css.feedback__content}>
                    <Description/>
                    <div className={css.feedback__action_content}>
                    {totalFeedback !== 0 ? 
                        <FeedBack feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/>: <Notification>There are no reviews yet. Be the first to leave feedback!</Notification>}
                        <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} resetFeedback={resetFeedback}/>
                    </div>
                </div>
              </div>
            </section>
    </div>
}