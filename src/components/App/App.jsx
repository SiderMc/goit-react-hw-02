import { useEffect, useState } from "react"
import Options from "../Options/Options"
import FeedBack from "../Feedback/Feedback"
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
                    <div className={css.feedback__text_content}>
                        <h1 className={css.feedback__title}>Sip Happens Café
                        </h1>
                        <p className={css.feedback__description}>Please leave your feedback about our service by selecting one of the options below.
                        </p>
                    </div>
                    <div className={css.feedback__action_content}>
                        <FeedBack feedback={feedback} totalFeedback={totalFeedback}/>
                        <Options totalFeedback={totalFeedback} updateFeedback={updateFeedback} resetFeedback={resetFeedback}/>
                    </div>
                </div>
              </div>
            </section>
    </div>
}