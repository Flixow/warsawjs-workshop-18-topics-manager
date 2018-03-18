import {Card} from './'

const TopicCard = ({topic, treiners, likeIt}) => (
  <Card
    title={topic.title}
    Footer={() => (
      <div onClick={() => likeIt(topic.id)}>
        ♡ {topic.likes}
      </div>
    )}
  >

  </Card>
);

export default TopicCard;
