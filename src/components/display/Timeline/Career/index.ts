import { CareerTimeline } from './Root';
import { CareerTimelineItem } from './Item';
import { CareerTimelineLine } from './Line';

export * from './Root';
export * from './Item';
export * from './Line';

export default Object.assign(CareerTimeline, {
  Item: CareerTimelineItem,
  Line: CareerTimelineLine
});
