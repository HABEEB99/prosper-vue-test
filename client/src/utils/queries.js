export const userListQuery = `*[_type == 'userList']{
    _id,
    name
  }`;

export const userDataQuery = `*[_type == 'userData']{
    _id,
    name,
    rank,
    activities[]{
        _key,
        activity,
        location,
        time
       }
  }`;
