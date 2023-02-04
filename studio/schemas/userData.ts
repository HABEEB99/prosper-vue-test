export default {
  name: 'userData',
  title: 'UserData',
  type: 'document',
  fields: [
    {
      name: 'rank',
      title: 'Rank',
      type: 'string',
    },

    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'activities',
      title: 'Activities',
      type: 'array',
      of: [{type: 'activity'}],
    },
  ],
}
