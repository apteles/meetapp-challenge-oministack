export function meetupRequest(id) {
    return {
        type: '@meetup/MEETUP_REQUEST',
        payload: { id },
    };
}

export function meetupSuccess(data) {
    return {
        type: '@meetup/MEETUP_SUCCESS',
        payload: data,
    };
}

export function meetupsRequest() {
    return {
        type: '@meetup/MEETUPS_REQUEST',
    };
}

export function meetupsSuccess(data) {
    return {
        type: '@meetup/MEETUPS_SUCCESS',
        payload: data,
    };
}

export function updateMeetupRequest(data) {
    return {
        type: '@meetup/UPDATE_MEETUP_REQUEST',
        payload: data,
    };
}

export function updateMeetupSuccess(id, data) {
    return {
        type: '@meetup/UPDATE_MEETUP_SUCCESS',
        payload: { id, ...data },
    };
}

export function meetupFailure() {
    return {
        type: '@meetup/MEETUP_FAILURE',
    };
}
