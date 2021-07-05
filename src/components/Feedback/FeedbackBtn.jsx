import {CustomSpan} from './Feedback.styles'

function FeedbackClick({text, onClick}) {
    return <CustomSpan onClick={onClick}>{text}</CustomSpan> 
}
export default FeedbackClick;