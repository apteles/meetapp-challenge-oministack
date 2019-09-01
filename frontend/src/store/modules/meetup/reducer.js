import produce from 'immer';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

const INITIAL_STATE = {
    loading: false,
    meetups: [],
    meetup: null,
};
export default function meetup(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@meetup/MEETUP_REQUEST':
            case '@meetup/MEETUPS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@meetup/MEETUP_SUCCESS': {
                draft.loading = false;
                const timezone = Intl.DateTimeFormat().resolvedOptions()
                    .timeZone;
                action.payload.date = utcToZonedTime(
                    action.payload.date,
                    timezone
                );

                action.payload.date = format(action.payload.date, 'dd-MM-yyyy');
                draft.meetup = action.payload;
                break;
            }
            case '@meetup/MEETUPS_SUCCESS': {
                draft.loading = false;
                draft.meetups = action.payload;
                break;
            }
            case '@meetup/UPDATE_MEETUP_SUCCESS': {
                draft.meetup = null;
                break;
            }
            default:
        }
    });
}
