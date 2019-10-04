import { TimeBlock } from './time-block';
import { Material } from './material';

export class Activity extends TimeBlock {
    startHour?: number
    endHour?: number
    description?: string
    materials?: Material[]
}
