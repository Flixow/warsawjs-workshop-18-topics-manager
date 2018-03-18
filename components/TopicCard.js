import {Card, Button} from './'

const TopicCard = ({topic, likeIt, setMeAsTrainer, canIBeTrainer}) => (
  <Card
    title={topic.title}
    Footer={() => (
      <React.Fragment>
        <Button
          onClick={() => setMeAsTrainer(topic.id)}
          disabled={!canIBeTrainer}
         >
          Chcę być trenerem
        </Button>
        <Button onClick={() => likeIt(topic.id)}>
          ♡ {topic.likes}
        </Button>
      </React.Fragment>
    )}
  >
    <ul>
      {topic.trainers.map((trainer, idx) => (
        <li key={idx}>
          <img src={trainer.avatar_url} alt=""/>
          {trainer.full_name}
        </li>
      ))}
    </ul>

    <style jsx>{`
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        align-items: center;
        border: 1px solid #9b9b9b;
        border-radius: 4px;
        padding: 10px;
        margin-top: 10px
      }

      li:fist-child {
        margin-top: 0;
      }

      li > img {
        width: 50px;
        height: 50px;
        margin-right: 5px;
      }
    `}</style>
  </Card>
);

export default TopicCard;
