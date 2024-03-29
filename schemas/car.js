export default {
  name: 'car',
  type: 'document',
  title: 'Car',
  fields: [
    {
      name: 'carName',
      type: 'string',
      title: 'Car Name',
    },
    {
      name: 'carType',
      type: 'string',
      title: 'Car type',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'capacity',
      type: 'number',
      title: 'Capacity',
    },
    {
      name: 'specification',
      type: 'string',
      title: 'Spefication',
    },
    {
      name: 'available',
      type: 'boolean',
      title: 'Available',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'img',
      type: 'url',
      title: 'img',
    },
  ],
}
