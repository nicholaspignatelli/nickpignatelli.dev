import StyledTimelineItem from "../TimelineItem/styled/StyledTimelineItem";

const TimelineContainer = ({ events, className, children }) => {
  return (
    <div className={className}>
      {events.map((ev, i) => (
        <StyledTimelineItem
          title={ev.title}
          company={ev.company}
          description={ev.description}
          durationArray={ev.durationArray}
          techStack={ev.techStack}
          key={i}
        />
      ))}
    </div>
  );
};

export default TimelineContainer;
