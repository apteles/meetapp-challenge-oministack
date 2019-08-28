import produce from 'immer';

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
