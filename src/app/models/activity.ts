import { TimeBlock } from './time-block';

export class Activity extends TimeBlock {
    startHour?: number
    endHour?: number
    description?: string
}
