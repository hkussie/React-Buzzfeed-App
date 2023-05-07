import { BuzzFeedQuiz } from "react-buzzfeed-quiz";
import ProfilePicture from "../assets/sample_profile_pic.jpg"
import "react-buzzfeed-quiz/lib/styles.css";
import Buzzfeed from "buzzfeed";

const App = () => {
  return (
    <BuzzFeedQuiz
      title={Buzzfeed()}
      description={"This is a description"}
      byline={true}
      bylineAuthor={"Harrison Kussie"}
      bylineAuthorLink={"https://github.com/hkussie"}
      bylineAuthorLinkOpenInNewTab={true}
      bylineAuthorTagline={"This is silly"}
      bylineAvatarImageSrc={ProfilePicture}
      autoScroll={true}
      questions={[
        {
          question: "Here's a question",
          answers: [
            {
              answer: "A sample answer", 
              resultID: 0,
            },
            {
              answer: "Another answer", 
              resultID: 1
            }
          ]
        },
        {
          question: "Here's another question", 
          answers: [
            {

            },
            {

            }
          ]
        }
      ]}
    />
  );
}
export default App;